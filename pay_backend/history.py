import pymongo
import sys
from bson import ObjectId
import json



try:
    client = pymongo.MongoClient( "mongodb+srv://admin:Ktp6rIlwnIqzhsoP@cluster0.y4awipo.mongodb.net/?retryWrites=true&w=majority")

    # return a friendly error if a URI error is thrown
except pymongo.errors.ConfigurationError:
    print("An Invalid URI host error was received. Is your Atlas host name correct in your connection string?")
    sys.exit(1)

# use a database named "myDatabase"
db = client.myDatabase2

# use a collection named "recipes"
my_collection = db["history"]


def insert_hist(recipe_documents):
    try:
        result = my_collection.insert_many(recipe_documents)

    # return a friendly error if the operation fails
    except pymongo.errors.OperationFailure:
        print(
            "An authentication error was received. Are you sure your database user is authorized to perform write operations?")
        sys.exit(1)
    else:
        inserted_count = len(result.inserted_ids)
        print("I inserted %x documents." % (inserted_count))

        print("\n")


def find_hist(x):
    my_doc = my_collection.find_one(x)

    if my_doc is not None:
        return my_doc
    else:
        print("I didn't find any such user","\n")
        return "null"
# UPDATE A DOCUMENT
#
# You can update a single document or multiple documents in a single call.
# Here we update the prep_time value on the document we just found.
# $set,$push,$get,$each(krish naik)
# Note the 'new=True' option: if omitted, find_one_and_update returns the
# original document instead of the updated one.

def update_hist(data):
    # Retrieve the current balance
    current_balance = my_collection.find_one({"phone": data["phone"]})["balance"]
    new_balance = current_balance + data["amount"]
    my_doc = my_collection.update_one(
        {"phone": data["phone"]},
        {
            "$push": {
                "trans_n": data["amount"]
            },
            "$set": {
                "balance": new_balance
            }
        }
    )

    # Check if the update was successful
    if my_doc.modified_count > 0:
        print("Here's the updated history:")
        print(my_doc)
    else:
        print("I didn't find any such user")
    print("\n")


def delete_hist(data):
    my_result = my_collection.delete_one({"email": data["email"]})
    print("I deleted %x records." % my_result.deleted_count)
    print("\n")