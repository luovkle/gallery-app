import uuid
import shutil

from fastapi import UploadFile
from fastapi.staticfiles import StaticFiles

from app.config import pictures_path, pictures_dir


def mount_sub_app(app):
    app.mount(
        f"/{pictures_dir}", StaticFiles(directory=pictures_dir), name=pictures_dir
    )


def create_pictures_dir():
    if not pictures_path.exists():
        pictures_path.mkdir()


def save_picture(picture: UploadFile):
    new_name = uuid.uuid4().hex + ".png"
    temp_path = f"{pictures_path}/{new_name}"
    with open(temp_path, "wb") as buffer:
        shutil.copyfileobj(picture.file, buffer)
    return new_name
