from google.cloud import storage
from pathlib import Path


def create_secure_bucket(storage_client: type(storage.Client)):
    """Creates all the buckets needed for the personal brand."""

    # create the secrets bucket
    secureBucket = storage_client.create_bucket("secure_personal_brand")
    print("Bucket {} created".format(secureBucket.name))
    return secureBucket

def upload_secure_files(storage_client: type(storage.Client)):
    """Uploads all the files required for initialization of the proyect."""

    secure_bucket = storage_client.bucket("secure_personal_brand")

    # upload the oauth secret not very secret file
    bucket_file_name = "credentials/oauth2_client.json"
    file_path = Path("../../credentials/oauth2_client.json")
    blob = secure_bucket.blob(bucket_file_name)
    blob.upload_from_filename(file_path)
    print("File {} uploaded to {}.".format(file_path, bucket_file_name))

    # upload the email credentials of juan
    bucket_file_name = "credentials/juan_email_creds.json"
    file_path = Path("../../credentials/juan_email_creds.json")
    blob = secure_bucket.blob(bucket_file_name)
    blob.upload_from_filename(file_path)
    print("File {} uploaded to {}.".format(file_path, bucket_file_name))

    # upload the secrets file (custom made json)
    bucket_file_name = "credentials/secrets.json"
    file_path = Path("../../credentials/secrets.json")
    blob = secure_bucket.blob(bucket_file_name)
    blob.upload_from_filename(file_path)
    print("File {} uploaded to {}.".format(file_path, bucket_file_name))


if __name__ == "__main__":
    
    storage_client = storage.Client(project="encoded-road-275921")
    try:
        create_secure_bucket(storage_client)    
    except Exception as e:
        print("> Error creating the secure bucket: ", e )
    
    try:
        upload_secure_files(storage_client)
    except Exception as e:
        print("> Error uploading the files: ", e )

    