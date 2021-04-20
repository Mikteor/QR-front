import { useEffect } from "react";





const Loader = (props) => {
if(!props.auth) return <p> loading..</p>

    return <div>{props.children}</div>;
}


export default Loader