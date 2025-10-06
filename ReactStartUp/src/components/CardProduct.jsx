
export default function CardProduct({ items }) {
  return (
    <>
      <div className="Card" style={{
        color: items.color
      }}>
        {items.map((item) => {
          return (
            <div
              key={item.id}
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

