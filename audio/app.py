import streamlit as st
import torch
import librosa
import numpy as np
from transformers import Wav2Vec2Processor, Wav2Vec2ForSequenceClassification

# Load the pre-trained model and processor
@st.cache_resource
def load_model():
    model_name = "motheecreator/Deepfake-audio-detection"
    processor = Wav2Vec2Processor.from_pretrained(model_name)
    model = Wav2Vec2ForSequenceClassification.from_pretrained(model_name)
    model.eval()  # Set the model to evaluation mode
    return model, processor

def preprocess_audio(file, processor):
    # Load and preprocess the audio
    y, sr = librosa.load(file, sr=16000)
    
    # Preprocess with the Wav2Vec2 processor
    inputs = processor(y, sampling_rate=sr, return_tensors="pt", padding=True)
    return inputs

def predict(model, processor, file):
    inputs = preprocess_audio(file, processor)
    
    # Get the prediction from the model
    with torch.no_grad():
        logits = model(**inputs).logits
        
    # Get the predicted class (0: real, 1: fake)
    probabilities = torch.softmax(logits, dim=1)
    confidence = probabilities[0, 1].item()  # Confidence of being fake
    return confidence

def main():
    st.title("Deepfake Audio Detection")
    st.write("Upload an audio file to detect if it's a deepfake or not.")

    uploaded_file = st.file_uploader("Choose an audio file...", type=["wav", "mp3"])

    if uploaded_file is not None:
        # Load the model and processor
        model, processor = load_model()
        
        # Make prediction
        confidence = predict(model, processor, uploaded_file)
        
        # Display the result
        if confidence >= 0.5:
            st.error(f"Warning: The uploaded audio may be a deepfake. (Confidence: {confidence:.2f})")
        else:
            st.success(f"The uploaded audio appears to be real. (Confidence: {1-confidence:.2f})")
        
        # Play the audio
        st.audio(uploaded_file, format="audio/wav")

if __name__ == "__main__":
    main()
