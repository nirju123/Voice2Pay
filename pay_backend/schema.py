from datetime import date
from pprint import pprint
from user import insert, find, convert_to_serializable
from marshmallow import Schema, fields, ValidationError, validates_schema,  validate


class UserSchema(Schema):
    username = fields.Str(required=True)
    phone = fields.Int(required=True)
    password = fields.Str(required=True)
    account_number = fields.Int(required=True)

    @validates_schema
    def validate_password_length(self, data, **kwargs):
        if 'password' in data and len(data['password']) < 8:  # Set minimum length to 8 characters
            raise ValidationError('Password must be at least 8 characters long.')

    @validates_schema
    def validate_unique_phone(self, data, **kwargs):
        val = find({"phone": data["phone"]})
        if "phone" in data and val != "null":
            raise ValidationError('phone already exists')  # Raise an error if the email is not unique
        if "phone" in data and len(str(data['phone'])) != 10:
            raise ValidationError('Phone Number length must be 10 characters long.')

    @validates_schema
    def validate_unique_account(self, data, **kwargs):
        val = find({"account_number": data["account_number"]})
        if "account_number" in data and val != "null":
            raise ValidationError('phone already exists')  # Raise an error if the email is not unique
        if "account_number" in data and len(str(data['account_number'])) != 10:
            raise ValidationError('Account number length must be 10 characters long.')


class LoginSchema(Schema):
    phone = fields.Int(required=True)
    password = fields.Str(required=True)

    @validates_schema
    def validate_user(self, data, **kwargs):
        val = find({"phone": str(data["phone"])})
        print(val,"hi")
        val1 = val['password']
        if "phone" in data:
            if val == "null" or val1 != data["password"]:
                raise ValidationError('Phone do not exist or password wrong')  # Raise an error if the email is not unique


class HistorySchema(Schema):
    email = fields.Email(required=True)
    wpm = fields.Int(required=True)  # Assuming a list of floats for wpm
    ratio = fields.Float(required=True)
    words = fields.List(fields.Str(required=True))  # List of strings for words

    @validates_schema
    def validate_words_length(self, data, **kwargs):
        if 'words' in data:
            data['words'] = [word for word in data['words'] if word.strip()]
            if len(data['words'])==0:
                data['words'].append('bx')



# class FriendsSchema(Schema):
#     name = fields.Str(required=True)
#     phone = fields.Int(required=True)
#
#     @validates_schema
#     def validate_unique_phone(self, data, **kwargs):
#         val = find({"phone": data["phone"]})
#         if "phone" in data and val != "null":
#             raise ValidationError('phone already exists')  # Raise an error if the email is not unique
#         if "phone" in data and len(data['phone']) != 10:
#             raise ValidationError('Phone Number length must be 10 characters long.')