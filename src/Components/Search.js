import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button,Box } from '@material-ui/core';
import './Students.css';
import SearchStudents from './SearchStudents';

function TableBody(){
    let studArr=useSelector((store)=>store.StudReducer);
    /* let dispatch=useDispatch();
    useEffect(()=>{
        dispatch(showStudents());
    }) */
    /* let studImpl=new StudentImpl();
    let [studArr,setArray]=useState([]);
    useEffect(()=>{
        setArray(studImpl.getAllStudents());
    },[studArr]); */
    return(
        <tbody>
            {
                studArr.map((student)=>{
                    return(
                        <tr key={student.studId}>
                        <td>{student.studId}</td>
                        <td>{student.studName}</td>
                        <td>{student.studDepartment}</td>
                        <td>{student.studYear}</td>
                        <td><NavLink style={{textDecoration:'none'}} to={`/students/delete/${student.studId}`}><Button size="small" variant='contained' color="secondary">DELETE</Button></NavLink></td>
                        <td><NavLink style={{textDecoration:'none'}} to={`/students/update/${student.studId}`}><Button size="small" variant='contained' color="secondary">UPDATE</Button></NavLink></td>
                        </tr>
                    );
                })
            }
        </tbody>
    );
}
function TableHead(){
    return(
        <thead>
            <th>ID</th>
            <th>NAME</th>
            <th>DEPARTMENT</th>
            <th>YEAR </th>
            <th colSpan="2">ACTION </th>
        </thead>
    )
}

export default function Search(){
    const [searchText, setSearchText] = useState("");
    const [searching, setSearchingState] = useState(false);
    let searchSubmit = (e) =>{
        e.preventDefault();
        console.log(searchText);
        setSearchingState(true);
    }

    function OnBlurSearch(){
        setSearchingState(false);
    }
    return(
        <div className='ShowStudents'>
        <h2 className='h22'>STUDENT DETAILS</h2>
        <form className='form1' onSubmit={searchSubmit} method="post" >
                       <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} onBlur={OnBlurSearch}  className="SearchBar"/> 
                       {/* <button  type='submit' className="Button"> Search </button> */}
                       <Button type='submit' size="small" variant="contained" color="success"> Search</Button>
        </form>
                {
                     searching && 
                    <table border="2" className="table1">
                                <TableHead></TableHead>
                                    
                                <SearchStudents searchText={searchText} />
                    </table>

                }
        </div>
    );
}