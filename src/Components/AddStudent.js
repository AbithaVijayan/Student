import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { addStudents } from "../actions/StudAction";
import Student from "../StudentData/Student";
import './Students.css';
export default function AddStudent(){
    let [flag,setFlag]=useState(false);
    let dispatch=useDispatch();
    const [student,setStudent]=useState(new Student());

    const setDetails=(e)=>{
        setStudent({...student,[e.target.name]:e.target.value});
    }

    const test=(e)=>{
        e.preventDefault();
        dispatch(addStudents(student));
        setFlag(true);
        
    }

    return(
        <div className="ShowStudents">
        {flag?<Navigate to="/students/showall"></Navigate>:
            <form onSubmit={test}>
            <table className="table">
                <tr>
                <th><label>Enter Id : </label></th>
                   <td><input type="number" name="studId" value={student.studId} onChange={setDetails}></input></td>
                </tr>
                <tr>
                <th><label>Enter Name : </label></th>
                <td><input type="text" name="studName" value={student.studName} onChange={setDetails}></input></td>
                </tr>
                <tr>
                <th><label>Enter Department : </label></th>
                <td><input type="text" name="studDepartment" value={student.studDepartment} onChange={setDetails}></input></td>
                </tr>
                <tr>
                <th><label>Enter Year : </label></th>
                <td><input type="text" name="studYear" value={student.studYear} onChange={setDetails}></input></td>
                </tr>
                <tr>
                <td><input type="submit" value="ADD STUDENT"></input></td>
                <td><input type="reset" value="Reset"></input></td>
                </tr>
            </table>
            </form>
            }
        </div>
    );
}