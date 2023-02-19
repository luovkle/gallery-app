from app.db import client
from app.schemas import PictureCreate, PictureRead, picture_entity, pictures_entity
from app.utils import save_picture
from fastapi import APIRouter, File, Form, Query, UploadFile

db = client.pictures

router = APIRouter()


@router.post("/pictures", response_model=PictureRead)
async def send_picture(
    picture: UploadFile = File(),
    tags: list[str] = Form(),
):
    picture_name = save_picture(picture)
    picture_create = PictureCreate(picture=picture_name, tags=tags[0].split(","))
    inserted_id = db.pictures.insert_one(picture_create.dict()).inserted_id
    db_picture = db.pictures.find_one({"_id": inserted_id})
    return picture_entity(db_picture)


@router.get("/pictures", response_model=list[PictureRead])
async def search_by_tag(
    offset: int = Query(default=0),
    limit: int = Query(default=10, le=10),
    tags: list[str] = Query(),
):
    pictures = db.pictures.find({"tags": tags}).skip(offset).limit(limit)
    pictures_dict = pictures_entity(pictures)
    return pictures_dict
