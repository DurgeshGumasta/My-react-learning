import React, { useContext, useEffect, useState } from "react";
import { createContexts } from "../App";
import { useDataContext } from "../context/test-context";
export default function ReciveData() {
    let useContextData = useContext(createContexts)
    let [dataRecived, setDataRecived] = useState('');
    const {data} = useDataContext()
    console.log("recived ----", data );
    useEffect(() => {
        // get data from the context
        setDataRecived(useContextData)
    }, [useContextData]);
    return (
        <div>
            <h1 className="style:color:red"> Recived Data :- {dataRecived}</h1>
        </div>
    );
}