import streamlit as st
import os
from keras.models import load_model
import tempfile
import librosa
import numpy as np

def file_selector(folder_path='.'):
    filenames = os.listdir(folder_path)
    selected_filename = st.selectbox('Select a file', filenames)
    return os.path.join(folder_path, selected_filename)

def detect_fake(filename):
    sound_signal, sample_rate = librosa.load(filename, res_type="kaiser_fast")
    mfcc_features = librosa.feature.mfcc(y=sound_signal, sr=sample_rate, n_mfcc=40)
    mfccs_features_scaled = np.mean(mfcc_features.T, axis=0)
    mfccs_features_scaled = mfccs_features_scaled.reshape(1, -1)
    result_array = model.predict(mfccs_features_scaled)
    result_classes = ["FAKE", "REAL"]
    result = np.argmax(result_array[0])
    return result_classes[result]

# Streamlit UI
st.set_page_config(page_title="AI Kavach - Deepfake Audio Detection", page_icon="🎙️", layout="centered")

st.title("AI Kavach - Deepfake Audio Detection")
st.write("Upload an audio file, and our model will determine whether it's a deepfake or a real recording.")

# Use the file selector to choose the model file
model_path = file_selector('models')
st.write(f'Selected model file: {model_path}')

# Load the selected model
try:
    model = load_model(model_path)
    st.write("Model loaded successfully.")
except Exception as e:
    st.error(f"Error loading model: {e}")

uploaded_file = st.file_uploader("Choose an audio file...", type=["wav", "mp3"])

if uploaded_file is not None:
    st.audio(uploaded_file, format='audio/wav')
    
    # Save the uploaded file temporarily
    with tempfile.NamedTemporaryFile(delete=False) as temp_file:
        temp_file.write(uploaded_file.getvalue())
        temp_filename = temp_file.name
    
    st.write("Processing the audio file...")
    
    # Detect if the audio is fake or real
    try:
        result = detect_fake(temp_filename)
        st.write(f"The uploaded audio is classified as: **{result}**")
    except Exception as e:
        st.error(f"Error processing audio file: {e}")
