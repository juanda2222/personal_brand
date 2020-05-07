
:: use cloud build to upload the image to gcr 
::(this is a place to storage the containers and analize security reasons)
::https://cloud.google.com/sdk/gcloud/reference/builds/submit
call gcloud builds submit . ^
    --tag=gcr.io/encoded-road-275921/just-node-image ^
    --gcs-source-staging-dir=gs://encoded-road-275921/personal_cloud_run

::deploy the image located in google container register
::https://cloud.google.com/sdk/gcloud/reference/run/deploy
call gcloud run deploy just-node-personal-page ^
    --image=gcr.io/encoded-road-275921/just-node-image ^
    --platform=managed ^
    --region=us-central1 ^
    --allow-unauthenticated