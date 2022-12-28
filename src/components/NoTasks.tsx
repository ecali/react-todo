import { PacmanLoader } from "./PacmanLoader";

export const NoTask = () => {
  return (
    <div className="notasks">
      <h1 className="display-5">Add a task to see here a list</h1>
      <div className="loadingio-spinner-bean-eater-6gswgfbtlcs">
        <PacmanLoader />
      </div>
    </div>
  );
};
