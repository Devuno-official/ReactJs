import "./Container.css";

export default function Container({ children }) {

  return (
    <div className="task-container">
      <div className="task-wrapper bg-white shadow-sm">
        {/* <Header taskCount={taskCount} /> */}
        <div className="task-content-area">{children}</div>
      </div>
    </div>
  );
}
