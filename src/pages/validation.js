import axios from "axios";
import { useEffect, useState } from "react";



const ip = process.env.REACT_APP_IP;


const Validation = ({match}) => {
    const {link} = match.params;
    // console.log(match.params)
    const [code, setCode] = useState('')
    useEffect(() => {
        ServerCall(link)
        
    }, [])
    const onSubmit = (e) => {
        e.preventDefault();
        //server call
        ValidationCode(code);
        
    }


    return (
        <div>
            <h1> hello world </h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
            </form>
        </div>
    )
}


export default Validation



const ServerCall = async (link) => {
    const res = await axios.get(ip + `codes/qr/${link}`);
    alert(res.data.msg);

}


const ValidationCode = async (code) => {
    const res = await axios.put(ip+`codes/win/${code}`)
    console.log(res.data); //validation status
}