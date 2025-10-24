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
   // e.stopPropagation();
     heading = e.target.value;
     heading = heading.trim();
       setheading(heading);
  }

  function TaskHandle(e) {
     // e.stopPropagation();
    task = e.target.value; 
    settask(task.trim());
  }

  function saveHandle() {
    
     console.log(task);
     console.log(heading);
    
    let storeTask = {
      heading: heading,
      task: task,
      id: taskCount,
    };

    if (storeTask.heading.length > 0 && storeTask.task.length > 0) {
      let Val = [...userTask, storeTask];
      setuserTask(Val);
    } 
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
          heading={heading}
          task={task}
        />
      </Container>
    </>
  );
}

export default App;
