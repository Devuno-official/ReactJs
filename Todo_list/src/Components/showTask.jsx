function ShowTask({ userTask }) {

  let TaskName = userTask.map((task) => {
    return (
          <div className="row" key={task.id}>
              <div className="col-4 task">
               <p>{task.task}</p>
              </div>
              <div className="col">
                <button type="button" className="btn btn-success ed">
                  Edit
                </button>
                <button type="button" className="btn btn-danger ed">
                  Delete
                </button>
              </div>
            </div>
        );

  });


        return (
        <>
          <div className="container1 text-center ">
            {TaskName}
          </div>
        </>
        );
}

        export default ShowTask;
