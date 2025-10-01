
let Container = (porps) => {
     return (
          <>
               <div className="bg-blue-400 w-screen h-screen flex items-center justify-center">
                    <div className="bg-amber-200 w-[30%] h-[80%] flex items-center justify-center">{porps.children}</div>
               </div>
          </>
     );
}

export default Container;