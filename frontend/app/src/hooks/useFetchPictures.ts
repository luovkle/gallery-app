import { useState, useEffect } from "react";

import { DefaultService, PictureRead } from "../client";

interface Hook {
  input: string[];
  output: {
    pictures: PictureRead[];
    isLoading: boolean;
  };
}

interface HookState {
  pictures: PictureRead[];
  isLoading: boolean;
}

const initialState = {
  pictures: [],
  isLoading: true,
};

export const useFetchPictures = (tag: Hook["input"]): Hook["output"] => {
  const [pictures, setPictures] = useState<HookState["pictures"]>(
    initialState.pictures
  );
  const [isLoading, setIsLoading] = useState<HookState["isLoading"]>(
    initialState.isLoading
  );

  const setNewPictures = async () => {
    const newPictures = await DefaultService.searchByTagPicturesGet(tag);
    setPictures(newPictures);
    setIsLoading(false);
  };

  useEffect(() => {
    setNewPictures();
  }, []);

  return {
    pictures,
    isLoading,
  };
};
