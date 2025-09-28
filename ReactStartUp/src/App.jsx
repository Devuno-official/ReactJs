import Rendering from "./components/renderingLists";
import CardProduct from "./components/CardProduct";

const user = [
  { title: "Banana", color: "pink", id: 1 },
  { title: "tomotes", color: "lightblue", id: 2 },
  { title: "watermelon", color: "blue", id: 3 },
];

function App() {
  return (
    <>
     <Rendering />
      <CardProduct  items={user} />
    </>
  );
}

export default App;
