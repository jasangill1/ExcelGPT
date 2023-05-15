// components/IntroMessage.js
import React from 'react';

const IntroMessage = () => {
  return (
    <div className="flex space-x-4 text-center">
      <div className="flex flex-col items-center mb-5">
        <h2 className="text-green-400 font-mono">ExcelAI - Data Science Assistant</h2>
            <div className="space-y-2">
            <p className="infoText font-mono">
            ExcelAI is a data science assistant powered by OpenAI's language models. It provides an interactive interface to analyze and extract insights from structured data files such as CSV and Excel files. With ExcelAI, you can ask questions, perform calculations, and visualize data to gain valuable insights.
                </p>
                <h3 className="text-green-400 font-mono">Key Features</h3>
                <ul className="list-disc list-inside">
                    <li className="infoText font-mono">File Upload: Upload your data files in CSV or Excel format.</li>
                    <li className="infoText font-mono">Interactive Conversations: Engage in interactive conversations with ExcelAI to ask questions and receive answers.</li>
                    <li className="infoText font-mono">Data Analysis: Utilize powerful data analysis capabilities to compute statistics, perform calculations, and generate visualizations.</li>
                    <li className="infoText font-mono">Natural Language Processing: Leverage the natural language processing capabilities of ExcelAI to understand and respond to user queries in a conversational manner.</li>
                    <li className="infoText font-mono">Seamless Integration: Integrate ExcelAI into your data science workflow effortlessly with its RESTful API.</li>
                </ul>
                <h3 className="text-green-400 font-mono">Use Cases</h3>
                <ul className="list-disc list-inside">
                    <li className="infoText font-mono">Exploratory Data Analysis: Quickly explore and understand the contents of your data files by asking questions about the data distribution, summary statistics, and correlations between variables.</li>
                    <li className="infoText font-mono">Data Visualization: Generate insightful visualizations, such as bar charts, line plots, and scatter plots, to visualize patterns and trends in your data.</li>
                    <li className="infoText font-mono">Statistical Analysis: Perform statistical computations on your data, including calculating means, medians, standard deviations, and correlations.</li>
                    <li className="infoText font-mono">Predictive Modeling: Use ExcelAI to help you with predictive modeling tasks, such as predicting outcomes based on historical data or identifying important features in your dataset.</li>
                </ul>
                <h3 className="text-green-400 font-mono">Example Usage</h3>
                <ol className="list-decimal list-inside">
                    <li className="infoText font-mono">Upload a CSV file containing sales data.</li>
                    <li className="infoText font-mono">Ask ExcelAI questions like "What is the total revenue?", "Which product category has the highest sales?", or "Show me a plot of sales over time."</li>
                    <li className="infoText font-mono">Receive responses from ExcelAI with answers, calculations, or visualizations.</li>
                </ol>
                    <p className="infoText font-mono">
                    ExcelAI simplifies data analysis tasks by providing an intuitive conversational interface and leveraging the power of AI. It empowers users with the ability to explore and gain insights from their data in a user-friendly and efficient manner.
                </p>
                <p className="infoText font-mono">
                    Note: The above description is a general overview of ExcelAI's functionality and potential use cases. The specific capabilities and responses may vary based on the underlying language model and the specific data you are working with.
                </p>
        </div>
      </div>
    </div>
  );
};

export default IntroMessage;
