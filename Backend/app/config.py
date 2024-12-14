from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    postgres_url: str  # Required: PostgreSQL URL
    mongodb_url: str = None  # Optional: MongoDB URL
    secret_key: str  # Required: Secret key for authentication or cryptography
    algorithm: str = "HS256"  # Default algorithm for cryptography (e.g., JWT)

    class Config:
        env_file = ".env"  # Path to the .env file

# Initialize the settings instance
settings = Settings()
