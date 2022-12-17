import { PictureItem } from "./PictureItem";
import { useFetchPictures } from "../hooks/useFetchPictures";

interface Props {
  tags: string[];
}

export const PictureGrid = ({ tags }: Props) => {
  const { pictures, isLoading } = useFetchPictures(tags);

  return (
    <>
      <h1>{tags[0]}</h1>
      {isLoading && <h6>Loading...</h6>}
      {pictures.map((picture) => (
        <PictureItem key={picture.id} {...picture} />
      ))}
    </>
  );
};
