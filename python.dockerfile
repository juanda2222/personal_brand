# Use the official lightweight Python image.
# https://hub.docker.com/_/python
FROM python:3.7-slim

# Copy local code to the container image.
#set a enviroment variable
ENV APP_HOME /app 
ENV TARGET="puto el que lo lea"
# set the working directory for every command ADD, COPY, ETC.
WORKDIR $APP_HOME
#copy from the workin dir to the file system at the container
COPY . ./

# Install production dependencies.
RUN pip install Flask gunicorn

# Run the web service on container startup. Here we use the gunicorn
# webserver, with one worker process and 8 threads.
# For environments with multiple CPU cores, increase the number of workers
# to be equal to the cores available.
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 python_server:app