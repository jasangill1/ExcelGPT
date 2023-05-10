import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt

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

def main():
    st.title("ExcelAI")
    st.subheader("talk to your excel sheet")

    # Create a file input widget and allow the user to upload a CSV or Excel file
    file = st.file_uploader("Upload a CSV or Excel file", type=["csv", "xlsx"])

    if file is not None:
        # Read the file using Pandas
        with tempfile.NamedTemporaryFile(delete=False) as temp:
            temp.write(file.read())
            temp.close()
            df = pd.read_csv(temp.name) if file.type == "text/csv" else pd.read_excel(temp.name)

        # Define message templates
        system_template = "Welcome to ExcelAI! How can I assist you with your {file_type} today?"
        system_prompt = SystemMessagePromptTemplate.from_template(system_template)

        user_template = "{user_input}"
        user_prompt = HumanMessagePromptTemplate.from_template(user_template)

        # Create a LangChain agent for the file
        openai_llm = OpenAI(
            temperature=0.0,
            model_name="gpt-3.5-turbo",
            openai_api_key=openai_api_key,
            max_tokens=256
        )
        agent = create_csv_agent(openai_llm, temp.name, verbose=True)

        # Format initial prompt
        initial_prompt = ChatPromptTemplate.from_messages([system_prompt]).format_prompt(file_type=file.type).to_messages()
        st.write(initial_prompt[0].content)

        # Allow the user to query the agent with their own questions
        query = st.text_input("", "")

        while query:
            # Format user input prompt
            user_prompt_formatted = ChatPromptTemplate.from_messages([user_prompt]).format_prompt(user_input=query).to_messages()

            # Run agent with formatted prompt
            response = agent.run(user_prompt_formatted)

            # Format agent response prompt
            agent_prompt_formatted = ChatPromptTemplate.from_messages([system_prompt]).format_prompt(file_type=file.type).to_messages()
        
            # Write response and prompt for next query
            st.write(response)
            st.write(agent_prompt_formatted[0].content)

            # Get next query
            query = st.text_input("", "")

        # Delete the temporary file
        os.remove(temp.name)

if __name__ == "__main__":
    main()
