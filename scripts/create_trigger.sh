

# https://cloud.google.com/build/docs/automating-builds/create-manage-triggers?hl=es-419
# creates a trigger 
gcloud beta builds triggers create github \
    --name="automated-production-trigger" \
    --description="builds image and deploys to cloud run on production commit" \
    --repo-name="personal_brand" \
    --repo-owner="juanda2222" \
    --branch-pattern="^production$" \
    --build-config="cloudbuild.yaml"