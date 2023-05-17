# ExcelGPT
ExcelGPT is an AI-powered data science assistant. This assistant is designed to help you explore and understand your datasets, by using an OpenAI model to understand your queries and generate helpful responses.

How it works
The assistant uses the OpenAI GPT-3.5-turbo model. This is a language model developed by OpenAI that can generate human-like text given some input. In this case, it is used to process the user's queries about a dataset and generate responses.

The assistant is implemented as a Flask web application, which can be hosted on a server and interacted with over the internet. The application accepts HTTP POST requests containing the user's queries and returns the generated responses.

Usage
To use ExcelGPT, you need to have a dataset in CSV or Excel format. You can submit this dataset via the / endpoint, which will return an initial prompt from the assistant.

After this, you can submit your queries via the /send_message endpoint. The query should be included in the body of the POST request as a JSON object with a single field, "message", containing the query as a string. The response from the assistant will be returned as a JSON object with a single field, "response", containing the response as a string.

Setup
To run the application, you need to have Python 3.9 or newer installed, as well as the dependencies listed in the requirements.txt file. These can be installed using pip:

bash
Copy code
pip install -r requirements.txt
You also need to have an OpenAI API key, which should be set as the OPENAI_API_KEY environment variable.

To start the application, you can run the application.py file:

bash
Copy code
python application.py
The application can be deployed on platforms such as Heroku or Vercel. For Heroku, a Procfile is included to specify the web server configuration.

Contributing
Contributions are welcome! Please feel free to submit a pull request.

License
ExcelGPT is open source, licensed under [INSERT LICENSE HERE].

Please adjust the details as necessary based on the specifics of your project.
