
SERVICE_NAME="personal-brand"

# the cloud storage location for the files of the project is specified 
function create_or_update_stack()
{
    gcloud deployment-manager deployments describe $SERVICE_NAME &> /dev/null
    service_description_exit_code=$? # $? returns the exit code of the last command
    if [[ $service_description_exit_code -eq 0 ]]; 
    then
        # Update the cloud deployment (if exit_code == 0)
        gcloud deployment-manager deployments update $SERVICE_NAME --config infrastructure.yaml 
        echo ">>> Stack $SERVICE_NAME updated"
    else
        # Create the cloud deployment (if exit_code == 1)
        gcloud deployment-manager deployments create $SERVICE_NAME --config infrastructure.yaml 
        echo ">>> Stack $SERVICE_NAME created"
    fi
}


create_or_update_stack