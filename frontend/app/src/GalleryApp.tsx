import { useState } from "react";

import { AddTag, PictureGrid } from "./components";

interface ComponentState {
  tags: string[];
}

export const GalleryApp = () => {
  const [tags, setTags] = useState<ComponentState["tags"]>([]);

  const onAddTag = (tag: string) => {
    if (tags.includes(tag)) return;
    setTags([...tags, tag]);
  };

  return (
    <div className="container">
      <h1>GalleryApp</h1>
      <AddTag onAddTag={onAddTag} />
      {tags.map((tag) => (
        <PictureGrid key={tag} tags={[tag]} />
      ))}
    </div>
  );
};
