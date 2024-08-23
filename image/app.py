import streamlit as st
from PIL import Image
import torch
from transformers import AutoImageProcessor, AutoModelForImageClassification

# Load the pre-trained model and processor
processor = AutoImageProcessor.from_pretrained("dima806/deepfake_vs_real_image_detection")
model = AutoModelForImageClassification.from_pretrained("dima806/deepfake_vs_real_image_detection")

def preprocess_image(image):
    image = image.convert("RGB")
    with torch.no_grad():
        inputs = processor(images=image, return_tensors="pt")
        outputs = model(**inputs)
        logits = outputs.logits
        predicted_class = torch.argmax(logits, dim=1).item()
        return predicted_class == 0  # Return True if predicted as real, False otherwise

def main():
    st.title("Deepfake vs Real Image Detection")
    st.write("Upload an image to determine whether it is real or deepfake.")

    uploaded_file = st.file_uploader("Choose an image...", type=["jpg", "jpeg", "png"])

    if uploaded_file is not None:
        image = Image.open(uploaded_file)
        st.image(image, caption="Uploaded Image", use_column_width=True)

        if st.button("Predict"):
            is_real = preprocess_image(image)
            if is_real:
                st.success("The image is predicted to be REAL.")
            else:
                st.error("The image is predicted to be DEEPFAKE.")

if __name__ == "__main__":
    main()

