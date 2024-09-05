import pymongo
import sys
from bson import ObjectId
import json

try:
    client = pymongo.MongoClient(
        "mongodb+srv://admin:Ktp6rIlwnIqzhsoP@cluster0.y4awipo.mongodb.net/?retryWrites=true&w=majority")

    # return a friendly error if a URI error is thrown
except pymongo.errors.ConfigurationError:
    print("An Invalid URI host error was received. Is your Atlas host name correct in your connection string?")
    sys.exit(1)

# use a database named "myDatabase"
db = client.myDatabase2

# use a collection named "recipes"
my_collection = db["user"]


def insert(recipe_documents):
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


def find(x):
    my_doc = my_collection.find_one(x)

    if my_doc is not None:
        return my_doc
    else:
        print("I didn't find any recipes that contain 'potato' as an ingredient.", "\n")
        return "null"


# DELETE DOCUMENTS
#
# As with other CRUD methods, you can delete a single document
# or all documents that match a specified filter. To delete all
# of the documents in a collection, pass an empty filter to
# the delete_many() method. In this example, we'll delete two of
# the recipes.
#
# The query filter passed to delete_many uses $or to look for documents
# in which the "name" field is either "elotes" or "fried rice".


def delete(data):
    my_result = my_collection.delete_one({"email": data["email"]})
    print("I deleted %x records." % (my_result.deleted_count))
    print("\n")


def convert_to_serializable(data):
    for key, value in data.items():
        if isinstance(value, ObjectId):
            data[key] = str(value)
    return data


def check(data):
    val = find({"email": data["email"]})
    if val == "null":
        return 0
    else:
        return 1

