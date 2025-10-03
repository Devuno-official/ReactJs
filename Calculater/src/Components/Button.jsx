
let Btn = function ({symbol}) {
 return symbol.map((arr) => {
          return (
               <button type="button" className=" bg-linear-to-t from-sky-500 to-indigo-500 h-18 w-full  text-amber-100 rounded-2xl">{arr}</button>
          );
     })
}

export default Btn;
