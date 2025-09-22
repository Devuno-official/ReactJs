const user = [
  { title: "Banana", color: "pink", id: 1 },
  { title: "tomotes", color: "lightblue", id: 2 },
  { title: "watermelon", color: "blue", id: 3 },
];

let CardProduct = user.map((item) => {  
   return <div
    key={item.id}
      className="top"
      style={{
        background: item.color,
      }}
    >
      <p key={item.id}>{item.title}</p>
    </div>
});

export default function RenderCard() {
  return (
    <>
      <div className="Card">
            {CardProduct}
        </div>
    </>
  );
}
