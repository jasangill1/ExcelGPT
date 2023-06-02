# ExcelGPT :bar_chart: :robot: 

ExcelGPT is an AI-powered data science assistant designed to facilitate data exploration and understanding. The tool employs the OpenAI GPT-3.5-turbo model, a powerful language model, to comprehend your queries and provide insightful responses.

## How It Works :bulb: 

The assistant is integrated into a Flask web application, which can be hosted on a server and accessed via the internet.

## Usage :keyboard: 

To use ExcelGPT, you need to have a dataset in CSV or Excel format.

- Submit this dataset via the `/` endpoint. This will return an initial prompt from the assistant.
- After this, you can submit your queries via the `/send_message` endpoint.

For example:

```json
{
  "message": "Your query goes here..."
}

```
The response from the assistant will be returned in this format:
```json
{
  "response": "The assistant's response..."
}
```

## Setup :wrench:
To run the application, you need to have Python 3.9 or newer installed, as well as the dependencies listed in the requirements.txt file. These can be installed using pip:

```bash
pip install -r requirements.txt
```
You also need to have an OpenAI API key, which should be set as the `OPENAI_API_KEY` environment variable.

To start the application, you can run the `application.py` file:

```bash
python application.py
```
To run the frontend of the application, navigate into the frontend directory and start the development server with the following commands:

```bash
cd frontend
npm install
npm run dev
```
make sure to change the ports to the flask ports normally shows up once server starts 

The application can be deployed on platforms such as Heroku or Vercel. For Heroku, a `Procfile` is included to specify the web server configuration.

## Contributing :handshake:
Contributions are welcome! Please feel free to submit.
