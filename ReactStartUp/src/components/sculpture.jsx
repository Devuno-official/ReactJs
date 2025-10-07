import { useState } from "react";
import { SculptureList } from "./sculptureList"

// *When you press “Next” on the last sculpture, the code crashes. Fix the logic to prevent the crash. You may do this by adding extra logic to event handler or by disabling the button when the action is not possible.

// *After fixing the crash, add a “Previous” button that shows the previous sculpture. It shouldn’t crash on the first sculpture.



export default function Sculpture() {
    let [index, setClick] = useState(0);

    const nextHandle = function () {
        setClick(index + 1 );
        if(index === 11 ){
            setClick(index = 0);
             return ;
        }
    }

const perviousHandle = function(){
          setClick(index - 1);
          if(index === 0 ){
            setClick(index = 11);
             return;
          }     
}


    let sculpture = SculptureList[index];

    return (
        <>
            <h1>{index + 1} / {SculptureList.length}</h1>
            <button onClick={nextHandle} className="button" >Next</button>
            <button type="button" onClick={perviousHandle} className="button">Pervious</button>
            <article>
                {sculpture.artist}
            </article>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>{sculpture.name}</p>
            <summary>{sculpture.description}</summary>
        </>
    );
}


