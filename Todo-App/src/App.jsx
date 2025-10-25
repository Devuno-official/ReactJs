import ShowTask from "./Components/showTask";
import Modal from "./Components/Modal";
import { useState } from "react";
import Container from "./Components/Container";
import Header from "./Components/Header";

function App() {
  let [userTask, setuserTask] = useState([]);
  let [heading, setheading] = useState("");
  let [task, settask] = useState("");
  let [taskCount, settaskCount] = useState(0);

  function HeadingHandle(e) {
    e.preventDefault();
    setheading(e.target.value);
  }

  function TaskHandle(e) {
    e.preventDefault();
    settask(e.target.value);
  }

  function saveHandle() {
    if (!heading.trim() || !task.trim()) {
              return;
    }

    const newTask = {
      heading: heading.trim(),
      task: task.trim(),
      id: taskCount,
    };

    setuserTask([...userTask, newTask]);
    settaskCount(taskCount + 1);
    setheading("");
    settask("");
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
          heading={heading}
          task={task}
        />
      </Container>
    </>
  );
}

export default App;
