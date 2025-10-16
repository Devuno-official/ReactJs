import "./Container.css";

export default function Container(props) {
  return (
    <div className="task-container ">
      <div
        className=" bg-white rounded-2 shadow-lg"
        style={{
          maxWidth: "800px",
          background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
          boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
