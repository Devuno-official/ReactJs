// * Calculater Ui and than logic 
import Container from "./Components/Container";
import Btn from "./Components/Button";


export default function App() {
 const changeValue = function(event){
   let textVal = event.target.value;
           console.log(textVal);
                   
 }

    let arr = ['1️', '2️', '3️', '✖️', '4️', '5️', '6️', '➗', '7️', '8️', '9️', '➕', '0️', '➖','⬅','🟰'];
    return (
        <>
        <Container>
            <input type="text" name="input" id="input" className="w-[20%] h-[15%] bg-black rounded-t-2xl text-white border-none outline-none" onChange={changeValue}/>
            <div className="bg-black w-[20%] h-[50%] gap-1  grid grid-cols-4 grid-rows-3 place-content-center overflow-hidden rounded-b-2xl">
                <Btn symbol={arr}></Btn>
            </div>
        </Container>
        </>
    );
}


