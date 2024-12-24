import React, { useEffect, useState } from 'react'
import axios from 'axios';
/** just for testing purposes */
const IpAddress = () => {
    const [ip,setIP] = useState("")
    
    const getData = async () => {
        const res = await axios.get("https://api.ipify.org/?format=json");
        console.log(res.data);
        setIP(res.data.ip);
    };
    useEffect(()=>{
        getData()
    },[])
    console.log('---------------the ip address is ',ip)
  return (
    <div>
        IpAddress
{ip}
    </div>
  )
}

export default IpAddress