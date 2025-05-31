import React, {useRef} from "react";
export default function Home(){
const ref = useRef(0);

console.log(ref,"ref---- ");

 return(
    <div>
        <h1>Home page</h1>
        <input ref={ref} type="text" />
    </div>
 )   
}