import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
from huggingface_hub import login

# Authenticate with Hugging Face
def authenticate_huggingface():
    """
    Log in to Hugging Face using an access token.
    """
    huggingface_token = "Put your hugging face access token here"  # Replace with your token
    login(huggingface_token)

# Load the Llama-2 model and tokenizer
def load_model_and_tokenizer():
    """
    Load the Llama-2-13b model and tokenizer.
    """
    model_name = "meta-llama/Llama-2-13b-hf"
    tokenizer = AutoTokenizer.from_pretrained(model_name, use_auth_token=True)
    model = AutoModelForCausalLM.from_pretrained(
        model_name,
        torch_dtype=torch.float16,  # Use FP16 for faster inference
        device_map="auto",         # Automatically map the model to available GPUs
        use_auth_token=True        # Use the Hugging Face token for gated model access
    )
    return model, tokenizer

def generate_response(message: str) -> str:
    """
    Generate a response using the Llama-2 model.
    """
    try:
        # Authenticate and load the model/tokenizer
        authenticate_huggingface()
        model, tokenizer = load_model_and_tokenizer()
        
        # Prepare the input for the model
        input_prompt = (
            "You are VIFA (Virtual First Aid), a helpful medical assistant. "
            "Your purpose is to provide accurate and safe medical advice, health tips, and first aid guidance. "
            "If unsure, always recommend consulting a licensed healthcare professional.\n"
            "User: " + message + "\nVIFA:"
        )
        
        # Tokenize the input prompt
        inputs = tokenizer(input_prompt, return_tensors="pt").to("cuda")
        
        # Generate a response
        outputs = model.generate(
            inputs.input_ids,
            max_length=512,
            temperature=0.7,
            top_p=0.9,
            do_sample=True
        )
        
        # Decode and return the response
        response = tokenizer.decode(outputs[0], skip_special_tokens=True)
        return response.split("VIFA:")[-1].strip()

    except Exception as e:
        return (
            "Sorry, VIFA encountered an error while generating a response. "
            "Please try again later or contact support. Error details: " + str(e)
        )

# Example usage
if __name__ == "__main__":
    user_message = "What should I do for a headache?"
    print(generate_response(user_message))
