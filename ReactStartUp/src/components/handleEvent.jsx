export default function handleEvent() {
     const ClickEvent = function (event) {
          console.log(event); // *react special syntheticBaseEvent object 
          console.log("click me");
     }

     return (
          <button
               type="button"
               className="button"
               onClick={ClickEvent}
          >Click here</button>
     );
}