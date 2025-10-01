// * Calculater Ui and than logic 
import Container from "./Components/Container";
import Btn from "./Components/Button";
function App() {
    

    return (
        <>
          {/* <input type="text" className=" border" required /> */}
        <Container>
          <div className="groups bg-amber-900 w-[90%] h-[90%]">
            <div className="top bg-pink-800 w-full h-[50px]">
              <input type="text" name="input" id="input" className="w-full h-[50px]" />
            </div>
              <div className="buttom bg-gray-600 w-full h-[90%] grid overflow-hidden grid-cols-4 grid-rows-1 gap-2">
                <Btn></Btn>
              </div>
          </div>
        </Container>
        </>
    );
}

export default App
