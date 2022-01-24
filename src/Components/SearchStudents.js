import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function SearchStudents(props){
   



  //  let dispatch = useDispatch();
    let navigate = useNavigate();

    let [stuArr,setStudentArr] = useState([])
    let studentArr = useSelector((reducer) => reducer.StudReducer)
    let searchText = props.searchText.toLowerCase();
   
    useEffect(() => {
     //   dispatch(showStudents());
        setStudentArr(studentArr);
    },[])

    return (
        <>
            {
                stuArr.map((student,index)=>(student.studId.toString().includes(searchText)) &&
                        <tr key={index}>
                        <td>{student.studId}</td>
                        <td>{student.studName}</td>
                        <td>{student.studDepartment}</td>
                        <td>{student.studYear}</td>
                        <td><NavLink style={{textDecoration:'none'}} to={`/students/delete/${student.studId}`}><Button size="small" variant='contained' color="secondary">DELETE</Button></NavLink></td>
                        <td><NavLink style={{textDecoration:'none'}} to={`/students/update/${student.studId}`}><Button size="small" variant='contained' color="secondary">UPDATE</Button></NavLink></td>
                        </tr>

                       

                )      
                
           }
        </>
    )
}