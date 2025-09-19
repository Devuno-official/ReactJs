const user = [
  { title: "Banana", color: "pink", id: 1 },
  { title: "tomotes", color: "yellow", id: 2 },
  { title: "watermelon", color: "blue", id: 2 },
];

let CardProduct = user.map((item) => {  
   return <div
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
