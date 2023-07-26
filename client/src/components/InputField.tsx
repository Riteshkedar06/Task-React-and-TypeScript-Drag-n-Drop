import React, { useRef } from "react";
import "./inputfield.css";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      action=""
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <div className="input__group">
        <input
          type="text"
          className="input__box"
          name="task"
          value={todo}
          ref={inputRef}
          onChange={(e) => setTodo(e.target.value)}
          required
        />
        <span>Enter a Task</span>
        <i></i>
      </div>

      {/* <input
        type="text"
        className="input__box"
        placeholder="Enter a task"
        name="task"
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        required
      /> */}

      <button className="input_submit">Go</button>
    </form>
  );
};

export default InputField;
