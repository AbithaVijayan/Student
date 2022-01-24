import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { delStudents } from "../actions/StudAction";

export default function DeleteStudent(){
    let {id}=useParams();
    console.log(id);
    let dispatch=useDispatch();
    useEffect(()=>{
        dispatch(delStudents(parseInt(id)));
    },[]);

    return(
        <>
        <h2>Student deleted Successfully!!!</h2>
        <Navigate to="/students/showall"></Navigate>
        </>
    );
}