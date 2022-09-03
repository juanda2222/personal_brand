



# Excecute the cloud build
# the cloud storage location for the files of the project is specified 
gcloud builds submit . \
    --gcs-source-staging-dir=gs://encoded-road-275921/personal-brand_files \
    --config=cloudbuild.yaml
