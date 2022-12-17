from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.endpoints import router
from app.utils import create_pictures_dir, mount_sub_app
from app.db import client
from app.config import remote_origins


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=remote_origins,
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)


@app.on_event("startup")
def startup_event():
    create_pictures_dir()
    mount_sub_app(app)


@app.on_event("shutdown")
def shutdown_event():
    client.close()


app.include_router(router)
