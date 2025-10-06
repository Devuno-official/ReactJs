import Rendering from "./components/renderingLists";
import CardProduct from "./components/CardProduct";
import HandleEvent from "./components/HandleEvent";

const user = [
  { title: "Banana", color: "pink", id: 1 },
  { title: "tomotes", color: "lightblue", id: 2 },
  { title: "watermelon", color: "blue", id: 3 },
];

const ClickEvent = function(e) {
  e.stopPropagation();         //* react special syntheticBaseEvent object 
  document.body.style = "Black";
}



function App() {
  return (
    <>
      <Rendering />
      <HandleEvent ClickEvent={ClickEvent} /> {/*pass function via props */}
      <CardProduct items={user} />
    </>
  );
}

export default App;
