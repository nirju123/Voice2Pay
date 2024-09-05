
from flask_cors import CORS
from flask import Flask, jsonify, request
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from bson import ObjectId
import json
from marshmallow import Schema, fields, ValidationError
from model import predict
from schema import UserSchema,LoginSchema,HistorySchema
from  user import  insert
from history import insert_hist, find_hist, update_hist

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
app.config['JWT_SECRET_KEY'] = 'nirju123'
jwt = JWTManager(app)


@app.route("/")
def home():
    return "<div>happy mongodb</div>"

@app.route('/talk', methods=['POST'])
def handle_input():
    if request.method == 'POST':
        # Access the JSON data sent in the request body as a python dictionary
        data = request.get_json()
        print('Received data:',data)
        value = int(predict(data))
        print(value)
        return jsonify(value), 200
    else:
        return jsonify({'error': 'Invalid request method'}), 405

######################first page#######################
@app.route('/login', methods=['POST'])
def handle_login():
    print(2)
    if request.method == 'POST':
        data = request.get_json()
        print('Received data:', data)
        access_token = create_access_token(identity=data['phone'])
        return jsonify(access_token=access_token), 200
        # try:
        #     result = LoginSchema().load(data)
        #     access_token = create_access_token(identity=result['phone'])
        #     return jsonify(access_token=access_token), 200
        # except ValidationError as err:
        #     print(err.messages)
        #     return jsonify({'error': err.messages}), 400
    else:
        return jsonify({'error': 'Invalid request method'}), 405

@app.route('/newUser', methods=['POST'])
def new_user():
    print(3)
    if request.method == 'POST':
        data = request.get_json()
        print('Received data:', data)
        try:
            #profile update
            del data['confirm_password']
            result = UserSchema().load(data)
            data.update({"names": ["tom", "jerry"]})
            data.update({"phones": [1234567890, 9876543210]})
            list1 = [data]
            insert(list1)
            #history update
            del data['username']
            del data['names']
            del data['phones']
            data.update({"balance": 10000})
            data.update({"trans_n":[]})
            list1 = [data]
            insert_hist(list1)
            access_token = create_access_token(identity=result['phone'])
            return jsonify(access_token=access_token), 200
        except ValidationError as err:
            print(err.messages)
            return jsonify({'error': err.messages}), 400
    else:
        return jsonify({'error': 'Invalid request method'}), 405

########second page####################################
@app.route('/pay', methods=['POST'])
@jwt_required()
def amount_paid():
    print(4)
    if request.method == 'POST':
        data = request.get_json()
        print('Received data:', data)
        current_user_phone = get_jwt_identity()
        try:
            x = data["cred"][:10]
            send_doc = find_hist({'phone':current_user_phone})
            get_doc =  find_hist({'phone': x})
            print(send_doc,get_doc)
            if send_doc['password'] == data['password'] and get_doc!="null":
                update_hist({"phone":current_user_phone,"amount":-1*data['amount'],"other":x})
                update_hist({"phone": x, "amount": data['amount'],"other":current_user_phone})
                print("can be done")
                return jsonify("done"), 200
                # access_token = create_access_token(identity=result['email'])
                # return jsonify(access_token=access_token), 200
            else:
                print("can not be done")
                return jsonify({'error': 'Invalid Password'}), 405
        except ValidationError as err:
            print(err.messages)
            return jsonify({'error': err.messages}), 400
        # return jsonify("done"), 200
    else:
        return jsonify({'error': 'Invalid request method'}), 405




if __name__ == '__main__':
    app.run(debug=True)
