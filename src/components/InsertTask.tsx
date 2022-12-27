import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { TaskModel } from "../utils/task";

export const InsertTask = () => {
  const {user} = UserAuth();
  const [value, setValue] = useState("");

  const handleNewTask = async () => {
    const t: TaskModel = {
      text: value.charAt(0).toUpperCase() + value.slice(1),
      completed: false,
    };
    await addDoc(collection(db, 'todos' + user.uid), {t});
    setValue('');
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
        <MdAddCircleOutline />
      </button>
    </div>
  );
};
