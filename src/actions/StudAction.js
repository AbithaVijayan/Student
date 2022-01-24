

export const showStudents=()=>{
    return{
        type:'SHOWSTUDENTS'
    }
}

export const delStudents=(stdId)=>{
    return{
        type:'DELETESTUDENTS',
        payload:stdId
    }
}
export const addStudents=(student)=>{
    return{
        type:'ADDSTUDENTS',
        payload:student
    }
}
export const updateStudents=(student)=>{
    return{
        type:'UPDATESTUDENTS',
        payload:student
    }
}
export const searchStudents=(stdId)=>{
    return{
        type:'SEARCHSTUDENTS',
        payload:stdId
    }
}