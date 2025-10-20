import "./Container.css";
import Header from "./Header";

export default function Container({ children }) {
  // Get actual task count from children if ShowTask component is present
  const taskCount = Array.isArray(children)
    ? children.filter((child) => child.type?.name === "ShowTask").length
    : 0;

  return (
    <div className="task-container">
      <div className="task-wrapper bg-white shadow-sm">
        <Header taskCount={taskCount} />
        <div className="task-content-area">{children}</div>
      </div>
    </div>
  );
}
