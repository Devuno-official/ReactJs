import { useState } from "react";
import { SculptureList } from "./sculptureList"


export default function Sculpture() {
    let [index, setClick] = useState(0);

    const imgHandle = function () {
        setClick(index + 1);
    }
    let sculpture = SculptureList[index];

    return (
        <>
            <h1>{index} / {SculptureList.length}</h1>
            <button onClick={imgHandle} className="button">Click Here</button>
            <article>
                {sculpture.artist}
            </article>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>{sculpture.name}</p>
            <summary>{sculpture.description}</summary>
        </>
    );
}


