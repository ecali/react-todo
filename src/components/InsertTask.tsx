import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { UserAuth } from "../context/AuthContext";
import { TaskModel } from "../utils/task";

export const InsertTask = (props: {
  tasks: TaskModel[];
  setTasks: (value: TaskModel[]) => void;
}) => {
  const {user} = UserAuth();
  const [value, setValue] = useState("");

  const handleNewTask = () => {
    const t: TaskModel = {
      uid: user.uid,
      text: value.charAt(0).toUpperCase() + value.slice(1),
      completed: false,
    };
    setValue('');
    props.setTasks([t, ...props.tasks]);
  };

  return (
    <div className="insert-cnt">
      <input
        className="search-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button
        className="search-button"
        disabled={!value}
        onClick={handleNewTask}
      >
        <BsSearch />
      </button>
    </div>
  );
};
