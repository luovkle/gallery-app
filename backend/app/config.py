import os
import pathlib

# Pictures
pictures_dir = "pictures"
current_path = pathlib.Path.cwd()
pictures_path = current_path / pictures_dir

# Mongo
mongodb_url = os.getenv("MONGODB_URL")

# App
remote_origins_str = os.getenv("REMOTE_ORIGINS", "")
remote_origins: list[str] = remote_origins_str.split(",")
