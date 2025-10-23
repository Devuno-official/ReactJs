import ShowTask from "./Components/showTask";
import Modal from "./Components/Modal";
import { useState } from "react";
import Container from "./Components/Container";
import Header from "./Components/Header";

function App() {
  let [userTask, setuserTask] = useState([]);
  let [heading, setheading] = useState("");
  let [task, settask] = useState("");
  let [taskCount , settaskCount] = useState(0);

  function HeadingHandle(e) {
     //.stopPropagation();
    heading = e.target.value;
    console.log(heading);
    setheading(heading.trim());
  }

  function TaskHandle(e) {
    //stopPropagation();
      task= e.target.value
      console.log(task);
      settask(task.trim());
  }

  function saveHandle() {
    let storeTask = {
      heading: heading,
      task: task,
      id: 2,
    };
    let Val = [...userTask, storeTask];
    setuserTask(Val);
    settaskCount(userTask.length + 1);
  }
      
  return (
    <>
      <Container>
        <Header taskCount={taskCount} />
        <ShowTask userTask={userTask} />
        <Modal
          HeadingHandle={HeadingHandle}
          TaskHandle={TaskHandle}
          saveHandle={saveHandle}
        />
      </Container>
    </>
  );
}

export default App;
