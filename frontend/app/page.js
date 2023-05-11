'use client'

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [response, setResponse] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    axios.post("http://localhost:5000/", formData).then((res) => {
      setResponse(res.data.response);
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input type="file" onChange={handleFileUpload} />
      <p>{response}</p>
    </main>
  );
}
