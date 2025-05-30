import ReciveData from "./recive-data"
import { useDataContext } from "../context/test-context"
export default function Test(){
    const { data, setData } = useDataContext()
    setData("data from test sender");
    return (    
        <>

        <h1>Test</h1>
        <ReciveData/>
        </>
    )
}