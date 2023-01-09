
SERVICE_NAME="personal-brand"
ENVIRONMENT_NAME="production"
GITHUB_REPOSITORY_NAME="personal_brand"
GITHUB_OWNER="juanda2222"


# the cloud storage location for the files of the project is specified 
function create_or_update_stack()
{   
    # serch if the stack has already been created
    gcloud deployment-manager deployments describe $SERVICE_NAME &> /dev/null
    service_description_exit_code=$? # $? returns the exit code of the last command
    
    # structure the variables passed down to the template
    properties=test_var:test_value,machineType:n1-standard-1,image:debian-9
    if [[ $service_description_exit_code -eq 0 ]]; 
    # export test_var=test_value
    then
        # Update the cloud deployment (if exit_code == 0)
        gcloud deployment-manager deployments update $SERVICE_NAME --template infrastructure.jinja --properties $properties
        echo ">>> Stack $SERVICE_NAME updated"
    else
        # Create the cloud deployment (if exit_code == 1)
        gcloud deployment-manager deployments create $SERVICE_NAME --template infrastructure.jinja --properties $properties
        echo ">>> Stack $SERVICE_NAME created"
    fi
}

function create_or_update_trigger()
{
    # https://cloud.google.com/build/docs/automating-builds/create-manage-triggers?hl=es-419
    # creates a trigger 
    gcloud beta builds triggers create github \
        --name="automated-$ENVIRONMENT_NAME-trigger" \
        --description="builds image and deploys to cloud run on $ENVIRONMENT_NAME commit" \
        --repository="$GITHUB_REPOSITORY_NAME" \
        --repo-owner="$GITHUB_OWNER" \
        --branch-pattern="^$ENVIRONMENT_NAME$" \
        --build-config="cloudbuild.yaml"

}

create_or_update_trigger
create_or_update_stack