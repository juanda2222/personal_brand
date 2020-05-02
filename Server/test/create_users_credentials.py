
import os
import json

from google_auth_oauthlib.flow import InstalledAppFlow
from requests import get


PROYECT_ABS_PATH = os.path.dirname(os.path.realpath(__file__))
JSON_SECRET_ABS_PATH = os.path.join(PROYECT_ABS_PATH, "oauth2_client.json")
JSON_USER_DATA_ABS_PATH = os.path.join(PROYECT_ABS_PATH, "user_data.json")
JSON_USER_CREDENTIALS_ABS_PATH = os.path.join(PROYECT_ABS_PATH, "user_credentials.json")

def get_user_info_flow():
        
    flow = InstalledAppFlow.from_client_secrets_file(
        JSON_SECRET_ABS_PATH,
        scopes=[
            "openid",
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email"
        ]
    )

    # the credentials object is described here:
    # https://google-auth.readthedocs.io/en/latest/reference/google.oauth2.credentials.html

    credentials = flow.run_local_server(
        host='localhost',
        port=99, 
        authorization_prompt_message='Please visit this URL: {url}', 
        success_message='The auth flow is complete. you may close this window.',
        open_browser=True
    )
    
    credentials_dic = dict()
    credentials_dic["id_token"] = credentials.id_token 
    credentials_dic["token"] = credentials.token
    credentials_dic["refresh_token"] = credentials.refresh_token
    credentials_dic["client_id"] = credentials.client_id
    credentials_dic["client_secret"] = credentials.client_secret
    print("->> Credentials dict: ", credentials_dic)

    # write the user's credentials to file
    with open(JSON_USER_CREDENTIALS_ABS_PATH, 'w') as f:
        json.dump(credentials_dic, f)

    # get the resources using a http request with the acces token:
    r = get(
        'https://www.googleapis.com/oauth2/v3/userinfo'+'?'+
        'access_token='+credentials.token
    )
    print("->> Response headers: ", r.headers)
    print("->> Response texts: ", r.text)
    if r:
        print('Response OK')
    else:
        print('Response Failed')

    return r.json()


if __name__ == "__main__":
    
    # get the user info using googleoauth2
    try:
        user_data = get_user_info_flow()
        print(">>> user data: ", user_data)
    except Exception as e:
        print("Error! ", e)

    # write the user data to disk
    with open(JSON_USER_DATA_ABS_PATH, 'w') as f:
        json.dump(user_data, f)

