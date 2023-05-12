import matplotlib.pyplot as plt
from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
from langchain.agents import create_csv_agent
from langchain.chat_models import ChatOpenAI
from langchain.llms import OpenAI
from langchain.prompts import ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate
import tempfile
import os

# Load OpenAI API key from environment variables or .env file
openai_api_key ="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"

# Create prompt templates
system_prompt_template = SystemMessagePromptTemplate.from_template("I'm a data science assistant. How can I help?")
human_prompt_template = HumanMessagePromptTemplate.from_template("{question}")

chat_prompt_template = ChatPromptTemplate.from_messages([
    system_prompt_template,
    human_prompt_template,
])

# Initialize Flask app
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route("/", methods=["POST"])
def get_response():
    # Get file from POST request
    file = request.files["file"]

    # Read the file using Pandas
    with tempfile.NamedTemporaryFile(delete=False) as temp:
        temp.write(file.read())
        temp.close()
        df = pd.read_csv(temp.name) if file.content_type == "text/csv" else pd.read_excel(temp.name)

    # Create a LangChain agent for the file
    openai_llm = OpenAI(
        temperature=0.0,
        model_name="text-davinci-003",
        openai_api_key=openai_api_key,
        
    )
    agent = create_csv_agent(openai_llm, temp.name, verbose=True)

    # Get initial prompt
    system_template = "Welcome to ExcelAI! How can I assist you with your {file_type} today?"
    initial_prompt = ChatPromptTemplate.from_messages([SystemMessagePromptTemplate.from_template(system_template)]).format_prompt(file_type=file.content_type).to_messages()

    # Return initial prompt as response
    return jsonify(response=initial_prompt[0].content)

@app.route("/send_message", methods=["POST"])
def send_message():
    data = request.get_json()
    message = data['message']

    # Here you can process the message and generate a response using your AI model
    # For now, we will just return the same message
    response = f"Received: {message}"

    return jsonify(response=response)

if __name__ == "__main__":
    app.run()
