function ShowTask() {
  return (
    <div class="container1 text-center ">
      <div class="row">
        <div class="col-4">
          <p>Cool Tasks</p>
        </div>
        <div class="col">
          <button type="button" class="btn btn-success ed">
            Edit 
          </button>
          <button type="button" class="btn btn-danger ed">
            Delete 
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowTask;
