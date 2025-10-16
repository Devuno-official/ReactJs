export default function Button() {
  return (
    <>
      <button
        type="button"
        className="task-btn btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        New Task
      </button>
    </>
  );
}
