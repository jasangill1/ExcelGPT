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
import sys


# Load OpenAI API key from environment variables or .env file
openai_api_key = os.getenv("OPENAI_API_KEY")
# Create prompt templates
system_prompt_template = SystemMessagePromptTemplate.from_template("I'm a data science assistant. How can I help?")
human_prompt_template = HumanMessagePromptTemplate.from_template("{question}")

chat_prompt_template = ChatPromptTemplate.from_messages([
    system_prompt_template,
    human_prompt_template,
])

# Initialize Flask app
application = Flask(__name__)
CORS(application, resources={r"/*": {"origins": "*"}})

# Create LangChain agent
openai_llm = OpenAI(
    temperature=0.0,
    model_name="gpt-3.5-turbo",
    openai_api_key=openai_api_key
)
agent = None

@application.route("/", methods=["POST"])
def get_response():
    # Get file from POST request
    file = request.files["file"]

    # Check if the file is CSV
    if file.content_type != "text/csv":
        with tempfile.NamedTemporaryFile(delete=False, suffix=".xlsx") as temp:
            temp.write(file.read())
            temp.close()

            # Read the file as Excel and save as CSV
            df = pd.read_excel(temp.name)
            csv_file_path = temp.name.replace(".xlsx", ".csv")
            df.to_csv(csv_file_path, index=False)
    else:
        with tempfile.NamedTemporaryFile(delete=False, suffix=".csv") as temp:
            temp.write(file.read())
            temp.close()

            csv_file_path = temp.name

    # Create a LangChain agent for the file
    global agent
    agent = create_csv_agent(openai_llm, csv_file_path, verbose=True)

    # Get initial prompt
    system_template = "Welcome to ExcelAI! How can I assist you with your data today?"
    initial_prompt = ChatPromptTemplate.from_messages([SystemMessagePromptTemplate.from_template(system_template)]).format_prompt().to_messages()

    # Return initial prompt as response
    return jsonify(response=initial_prompt[0].content)

@application.route("/send_message", methods=["POST"])
def send_message():
    try:
        data = request.get_json()
        message = data['message']

        # Process the message with the AI model
        agent_input = [HumanMessagePromptTemplate.from_template(message)]
        response = agent.run(agent_input)
        
        # Return the response
        return jsonify(response=response)
    except Exception as e:
        return jsonify(response=str(e)), 500


if __name__ == "__main__":
    application.run()
