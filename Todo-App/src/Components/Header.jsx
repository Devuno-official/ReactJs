import { useState } from "react";

export default function Header({ taskCount }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="app-header border-bottom bg-white sticky-top">
      <div className="d-flex align-items-center justify-content-between p-3">
        <div className="d-flex align-items-center gap-3">
          <h1 className="h5 mb-0 text-primary fw-bold d-flex align-items-center gap-2">
            <i className="bi bi-check2-square"></i>
            Tasks
          </h1>
          <span className="badge bg-primary-subtle text-primary rounded-pill px-2">
            {taskCount} tasks
          </span>
        </div>

        <div className="d-flex align-items-center gap-2">
          {isSearchOpen ? (
            <div className="search-container d-flex align-items-center">
              <input
                type="search"
                className="form-control form-control-sm me-2"
                placeholder="Search tasks..."
                autoFocus
              />
              <button
                className="btn btn-link btn-sm text-muted p-0"
                onClick={() => setIsSearchOpen(false)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
          ) : (
            <>
              <button
                className="btn btn-link btn-sm text-muted"
                onClick={() => setIsSearchOpen(true)}
              >
                <i className="bi bi-search"></i>
              </button>
              <button
                type="button"
                className="btn btn-primary d-flex align-items-center gap-2 px-3 py-2 rounded-3 shadow-sm"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i className="bi bi-plus-lg"></i>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
