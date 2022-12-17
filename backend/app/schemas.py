from pydantic import BaseModel


class PictureBase(BaseModel):
    picture: str
    tags: list[str]


class PictureCreate(PictureBase):
    ...


class PictureRead(PictureBase):
    id: str


def picture_entity(picture):
    return {
        "id": str(picture["_id"]),
        "picture": picture["picture"],
        "tags": picture["tags"],
    }


def pictures_entity(pictures):
    return list(map(picture_entity, pictures))
