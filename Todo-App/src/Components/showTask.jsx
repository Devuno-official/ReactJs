import { useState } from "react";
import "./ShowTask.css";

function ShowTask({ userTask }) {
  const [expandedTask, setExpandedTask] = useState(null);

  const toggleTask = (taskId) => {
    setExpandedTask(expandedTask === taskId ? null : taskId);
  };

  return (
    <div className="task-list w-100 m-0 p-0">
      {userTask.map((task) => (
        <div className="task-item  border-bottom" key={task.id}>
          <div className=" d-flex justify-content-between p-3">
            <div
              className="task-content flex-grow-1"
              onClick={() => toggleTask(task.id)}
              role="button"
              style={{ cursor: "pointer" }}
            >
              <h3 className="fs-6 fw-semibold text-primary mb-1">
                {task.heading || "Task"}
              </h3>
              <div className="task-preview">
                <small className="text-muted">
                  {task.task.length > 40
                    ? task.task.substring(0, 40) + "..."
                    : task.task}
                </small>
              </div>
            </div>
            <div className="task-actions d-flex gap-2 ms-3 align-items-start">
              <button
                type="button"
                className="btn btn-outline-primary btn-sm"
                onClick={() => {
                  // Edit handler
                }}
              >
                <i className="bi bi-pencil-square"></i>
              </button>
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={() => {
                  // Delete handler
                }}
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </div>

          {expandedTask === task.id && (
            <div className="task-details px-3 pb-3">
              <p className="mb-0 text-dark">{task.task}</p>
            </div>
          )}
        </div>
      ))}

      {userTask.length === 0 && (
        <div className="text-center text-muted py-4 px-3">
          <i className="bi bi-clipboard-x fs-3 mb-2 d-block opacity-50"></i>
          <p className="mb-0 small">
            No tasks added yet. Start by adding a new task!
          </p>
        </div>
      )}
    </div>
  );
}

export default ShowTask;
