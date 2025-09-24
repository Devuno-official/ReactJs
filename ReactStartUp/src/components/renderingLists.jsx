const products = [
  { title: "Banana", isFruit: false, id: 1 },
  { title: "tomotes", isFinite: false, id: 2 },
  { title: "watermelon", isFruit: true, id: 3 },
];

const listItems = products.map((product) => {
  return (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  );
});

let Rendering = function () {
  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
};

export default Rendering;
