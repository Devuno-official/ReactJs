import ShowTask from "./Components/showTask";
import Button from "./Components/UiComponent";
import Modal from "./Components/Modal";
import { useState } from "react";
import Container from "./Components/Container";

function App() {
  let [userTask, setuserVal] = useState([]);
  let [heading, setheading] = useState("");
  let [task, settask] = useState("");

  function HeadingHandle(e) {
    e.stopPropagation();
    heading = `${e.target.value}`;
    setheading(heading);
  }

  function TaskHandle(e) {
    e.stopPropagation();
    task = `${e.target.value}`;
    settask(task);
  }

  function saveHandle() {
    let storeTask = {
      heading: heading,
      task: task,
      id: 2,
    };
    let Val = [...userTask,storeTask];
    setuserVal(Val);
  }

  return (
    <>
      <Container>
        <Button />
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
