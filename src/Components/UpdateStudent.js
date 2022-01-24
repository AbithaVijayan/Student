import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { updateStudents } from "../actions/StudAction";
import Student from "../StudentData/Student";
import './Students.css';
export default function UpdateStudents(){
    let { id } = useParams();
    //console.log(id);

    let myArry = useSelector((state) => state.StudReducer);
    //console.log(myArry);
    let studen=myArry.find((ele)=>ele.studId==id);
    
    //console.log(studen);

    const [student, setStudent] = useState(new Student(studen.studId,studen.studName,studen.studDepartment,studen.studYear));
    const [flag, setFlag] = useState(false);
    const handleUpdation = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    }
    let dispatch = useDispatch();
    let test = (e) => {
        e.preventDefault();
        //console.log(student);
        dispatch(updateStudents(student));
        setFlag(true);
    }
    return(
        <div className="ShowStudents">
        <h2 className='h22'>UPDATE STUDENT DETAILS</h2>
        {flag?<Navigate to="/students/showall"></Navigate>:
            <form onSubmit={test}>
            <table className="table">
                <tr>
                <th><label>Enter Id : </label></th>
                   <td><input type="number" name="studId" value={student.studId} onChange={handleUpdation}></input></td>
                </tr>
                <tr>
                <th><label>Enter Name : </label></th>
                <td><input type="text" name="studName" value={student.studName} onChange={handleUpdation}></input></td>
                </tr>
                <tr>
                <th><label>Enter Department : </label></th>
                <td><input type="text" name="studDepartment" value={student.studDepartment} onChange={handleUpdation}></input></td>
                </tr>
                <tr>
                <th><label>Enter Year : </label></th>
                <td><input type="text" name="studYear" value={student.studYear} onChange={handleUpdation}></input></td>
                </tr>
                <tr>
                <td><input type="submit" value="UPDATE"></input></td>
                <td><input type="reset" value="Reset"></input></td>
                </tr>
            </table>
            </form>
            }
        </div>
    );
}