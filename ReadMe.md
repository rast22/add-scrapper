To run this app go to the root directory and run the following command:

    docker-compose up

IMPORTANT NOTEs: 
  1. This app was developed as a Test task for Luxonis.
  2. This app only works on Windows environment, due to Chromium specifics.


Functionality:
    <p>This app parses https://www.sreality.cz/en/search/for-sale/apartments list of apartments and saves them to a database.
    It also provides a REST API to get the list of apartments from the database.
    The app is dockerized and can be run with docker-compose. The default amount of parsed adverts is 500, but could be change to anything.</p>

