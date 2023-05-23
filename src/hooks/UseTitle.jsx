import { useEffect } from "react";


const UseTitle = title=> {
    useEffect(()=>{
        document.title=`math Worms -${title}`;
    },[title])
};

export default UseTitle;