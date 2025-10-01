
let arr = ['1', '2', '3', '*', '4', '5', '6', '/', '7', '8', '9', '+', '0', '/','<-','c'];

let Btn = function () {
     return arr.map((symbol) => {
          return (
               <button type="button" className=" w-full h-[90px]  bg-amber-600 border">{symbol}</button>
          );
     })
}

export default Btn;
