import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
const Mycomp =() =>{
    const [caption,setCaption]= useState("hello");
    return (
        <>
        <h1 >{caption}</h1>
        <Button onClick={() => setCaption("I have changed")}>change</Button>
        </>
    
    )
}
export default Mycomp;