import ShowTask from "./Components/showTask";
import UiKit from "./Components/UiComponent";

const userTask = [
  {task : "EveryWeek end with a Project ", id:1},
   {task : "6 hours of coding daily with " ,id:2},
   {task:"Next week plaining ",id:3} 
];

function App() {
  return (
    <>
      <h1 className="text-center heading">Todo List</h1>
      <UiKit />
      <ShowTask userTask = {userTask} />
    </>
  );
}

export default App;
