import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
from huggingface_hub import login

# Global variables for the model, tokenizer, and device
model = None
tokenizer = None
device = "cuda" if torch.cuda.is_available() else "cpu"

def authenticate_huggingface():
    """
    Log in to Hugging Face using an access token.
    """
    huggingface_token = "Put your hugging face user access token here "  # Replace with your token
    login(huggingface_token)

def load_model_and_tokenizer():
    """
    Load the BioGPT model and tokenizer once globally.
    """
    global model, tokenizer

    if model is None or tokenizer is None:
        model_name = "microsoft/BioGPT-Large"  # Model name

        # Load the tokenizer
        tokenizer = AutoTokenizer.from_pretrained(model_name)

        # Load the model
        model = AutoModelForCausalLM.from_pretrained(
            model_name,
            torch_dtype=torch.float16,  # Use float16 for faster computation if supported
        )

        # Move model to appropriate device
        model = model.to(device)
        print(f"Model and tokenizer loaded on {device}.")

def generate_response(message: str) -> str:
    """
    Generate a response using the BioGPT model.
    """
    try:
        # Ensure model/tokenizer is loaded
        load_model_and_tokenizer()

        # Prepare the input for the model
        input_prompt = (
            "You are a helpful AI medical assistant specializing in healthcare. "
            "Your purpose is to provide accurate and concise medical advice. "
            "If unsure, recommend consulting a licensed healthcare professional.\n"
            "User: " + message + "\nAssistant:"
        )

        # Tokenize the input prompt
        inputs = tokenizer(input_prompt, return_tensors="pt").to(device)

        # Generate a response
        outputs = model.generate(
            inputs.input_ids,
            max_length=512,           # Limit the maximum response length
            temperature=0.7,          # Adjust creativity of responses
            top_p=0.9,                # Use nucleus sampling for diverse outputs
            do_sample=True
        )

        # Decode and return the response
        response = tokenizer.decode(outputs[0], skip_special_tokens=True)
        return response.split("Assistant:")[-1].strip()

    except Exception as e:
        return (
            "Sorry, an error occurred while generating a response. "
            "Please try again later or contact support. Error details: " + str(e)
        )

if __name__ == "__main__":
    authenticate_huggingface()  # Authenticate once
    load_model_and_tokenizer()  # Preload model and tokenizer
    user_message = "What are the symptoms of diabetes?"
    print(generate_response(user_message))
