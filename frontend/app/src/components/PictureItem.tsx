interface Props {
  picture: string;
}

export const PictureItem = ({ picture }: Props) => {
  const pictureUrl = `http://localhost:8000/pictures/${picture}`;

  return (
    <div>
      <img src={pictureUrl} height={500} />
    </div>
  );
};
