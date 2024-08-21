import React, { useState } from "react";
import axios from "axios";

function AudioDetectionForm() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setResult("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      setError("Please select an audio file.");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post(
        "http://localhost:5000/detect_fake",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResult(response.data.result);
      setError("");
    } catch (error) {
      console.error("Error:", error.message);
      setError(
        "Error occurred while processing the audio file: " + error.message
      );
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex space-between items-center gap-5"
      >
        <input
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          className="text-richblack-300 font-bold rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Detect Audio
        </button>
      </form>
      {error && (
        <p className="mt-2" style={{ color: "red" }}>
          {error}
        </p>
      )}
      {result && <p className="mt-2 ml-1">Audio: {result}</p>}
    </div>
  );
}

export default AudioDetectionForm;
