import ShowTask from "./Components/showTask";
import ModalBOX from "./Components/model";
function App() {
  return (
    <div>
      <h1 className="text-center heading">Todo List</h1>
      <div class="container text-center taskBar">
        <div class="row justify-content-md-center"></div>
        <div class="row rowDiv">
          <div class="col-6">
            <input type="text" placeholder="enter here" />
          </div>
          <div class="col-md-auto">
            <input type="date" name="date" id="date" />
          </div>
          <div class="col col-lg-2">
            <button type="button" class="btn btn-primary task">
              Add Task
            </button>
          </div>
        </div>
      </div>
      <ShowTask />
      <ShowTask />
    </div>
  );
}

export default App;
