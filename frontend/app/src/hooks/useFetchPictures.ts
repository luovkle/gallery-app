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
  const [state, setState] = useState<HookState>(initialState);

  const setNewPictures = async () => {
    const newPictures = await DefaultService.searchByTagPicturesGet(tag);
    setState({ pictures: newPictures, isLoading: false });
  };

  useEffect(() => {
    setNewPictures();
  }, []);

  return {
    pictures: state.pictures,
    isLoading: state.isLoading,
  };
};
