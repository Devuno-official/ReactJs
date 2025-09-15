
let print = function(){
    console.log("hello");
}

let Button = function(){
    var hello = "plz help us";
    return (
      <button onClick={function(){  
        window.alert("hello button");
        print()
      }}>{hello}</button>
    );
}

export {Button};