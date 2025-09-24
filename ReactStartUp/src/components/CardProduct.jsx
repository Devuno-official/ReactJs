
function CardProduct({ items }) {
  return (
    <>
      <div className="Card" style={{
          color:items.color
      }}>
        {items.map((item) => {
          return (
            <div
              className="top"
              style={{
                color: item.color
              }}
            >
              <p key={item.id}>{item.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CardProduct;
