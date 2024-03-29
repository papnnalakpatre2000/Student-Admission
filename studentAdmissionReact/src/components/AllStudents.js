import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import Student from "./Student";

const AllStudents=()=>{
    const[temp,setTemp]=useState([]);

    const getAllUsers=()=>{
        axios.get(`http://localhost:8080/documents/getall`).then(
            (Response)=>{
                toast.success("Employee Loaded SucessFully");  
            
                setTemp(Response.data);
                
                console.log(Response.data);
                console.log("Hellos")
                
            },(error)=>{
                console.log(error);
                toast.error("Employee Loaded SucessFully1"); 

            }
        )
    }

    const updatedCourses=(id)=>{
        setTemp(temp.filter((e)=>id!==e.id));
    }
    useEffect(()=>{
        getAllUsers();
    },[]);


return(
    <div>
{
    temp.length>0?temp.map((item)=><Student key={item.id} employee={item}  update={updatedCourses}/>):"No data availalbe"
}</div>
);
}
export default AllStudents;