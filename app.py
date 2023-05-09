import streamlit as st
import pandas as pd
from langchain.agents import create_csv_agent
from langchain.llms import OpenAI
import tempfile
import os

# Load OpenAI API key from environment variables or .env file
openai_api_key ="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"


def main():
    st.title("ExcelAI")
    st.subheader("An Excel assistant powered by OpenAI")

    # Create a file input widget and allow the user to upload a CSV or Excel file
    file = st.file_uploader("Upload a CSV or Excel file", type=["csv", "xlsx"])

    if file is not None:
        # Read the file using Pandas
        with tempfile.NamedTemporaryFile(delete=False) as temp:
            temp.write(file.read())
            temp.close()
            df = pd.read_csv(temp.name) if file.type == "text/csv" else pd.read_excel(temp.name)

        # Create a LangChain agent for the file
        openai_llm = OpenAI(
            temperature=0.0,
            model_name="gpt-3.5-turbo",
            openai_api_key=openai_api_key,
            max_tokens=256
        )
        agent = create_csv_agent(openai_llm, temp.name, verbose=True)

    

        # Allow the user to query the agent with their own questions
        query = st.text_input("Ask a question", "")
        if st.button("Ask"):
            response = agent.run(query)
            st.write(response)
            


        # Delete the temporary file
        os.remove(temp.name)

if __name__ == "__main__":
    main()
