import axios from "axios";
import { useEffect, useState } from "react";



const ip = process.env.REACT_APP_IP;


const Validation = ({match}) => {
    const {link} = match.params;
    console.log(match.params)
    const [code, setCode] = useState('')
    useEffect(() => {
        ServerCall(link)
        
    }, [])
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(code, match.params)
    const {link} = match.params;

        //server call
        ValidationCode(code, link);
        
    }


    return (
        <div>
            <h1> hello world </h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
                <button type='submit' onClick={(e)=>onSubmit(e)}>submit</button>
            </form>
        </div>
    )
}


export default Validation



const ServerCall = async (link) => {
    try{
        console.log(link)
        const res = await axios.get(ip + `codes/qr/${link}`);
        alert(res.data.msg); 
    }
   catch(err){
       alert(err.response.data.err)
   }

}


const ValidationCode = async (code) => {
    
    try{
        const body = {code:code}
       const res = await axios.put(ip+`codes/win/`,body)
    console.log(res.data); //validation status  
    }
    catch(err){
        alert(err.response.data.err); //validation status  

    }
}