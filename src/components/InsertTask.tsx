import { BsSearch } from "react-icons/bs";

export const InsertTask = () => {
  return (
    <div className="insert-cnt">
      <input className="search-input" type="text"></input>
      <button className="search-button">
        <BsSearch />
      </button>
    </div>
  );
};
