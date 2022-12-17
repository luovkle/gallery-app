import React, { useState } from "react";

interface Props {
  onAddTag: (tag: string) => void;
}

interface ComponentState {
  inputValue: string;
}

export const AddTag = ({ onAddTag }: Props) => {
  const [inputValue, setInputValue] =
    useState<ComponentState["inputValue"]>("");

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const tag = inputValue.trim();
    if (tag.length == 0) return;
    onAddTag(tag);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="search"
        value={inputValue}
        onChange={onChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};
