import React , {useState} from "react";
export default function Page() {
    const [name, setName] = useState("");
    const [id, setId] = useState("");   

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email); 
    }



}