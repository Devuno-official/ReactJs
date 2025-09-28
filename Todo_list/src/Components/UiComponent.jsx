
function UiKit() {

     return (
     <>
      <div className="container text-center taskBar">
        <div className="row justify-content-md-center"></div>
        <div className="row rowDiv">
          <div className="col-6">
            <input type="text" placeholder="enter here" />
          </div>
          <div className="col-md-auto">
            <input type="date" name="date" id="date" />
          </div>
          <div className="col col-lg-2">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
     </>
     );
}

export default UiKit;