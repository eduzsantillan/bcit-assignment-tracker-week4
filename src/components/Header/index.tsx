import { useState } from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

type childComponentProps = {
  addItem: (item: string) => void;
};

export function Header(props: childComponentProps) {
  const [buttonAvailable, setButtonAvailable] = useState(false);
  const [inputItem, setInputItem] = useState("");

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.trim().length > 0) {
      setButtonAvailable(true);
      setInputItem(e.currentTarget.value);
    } else {
      setButtonAvailable(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.addItem(inputItem);
    setInputItem("");
    setButtonAvailable(false);
  };

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleSubmit}>
        <input
          placeholder="Add a new assignment"
          type="text"
          onChange={handleInput}
          value={inputItem}
        />
        <button
          disabled={!buttonAvailable}
          style={{
            backgroundColor: buttonAvailable ? "#5c6ac4" : "#b9b8b8",
            color: buttonAvailable ? "#fff" : "#868585",
            cursor: buttonAvailable ? "pointer" : "not-allowed",
          }}
          type="submit"
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}

/*
Resources:
https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
https://stackoverflow.com/questions/41488715/how-to-disable-button-in-react-js
https://stackoverflow.com/questions/40676343/typescript-input-onchange-event-target-value
*/
