export default function CardProduct({ items }) {
  return (
    <>
      <div
        classNameName="Card"
        style={{
          color: items.color,
        }}
      >
        {items.map((item) => {
          return (
            <div
              key={item.id}
              classNameName="top"
              style={{
                color: item.color,
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
