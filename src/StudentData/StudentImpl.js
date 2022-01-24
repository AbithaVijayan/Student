import Student from './Student';
export default class StudentImpl{

    studArray=new Set();
    constructor(){
        this.studArray.add(new Student(101,'Abitha','CSE','SE'));
        this.studArray.add(new Student(102,'Arun','ISE','SE'));
      }
   
      getAllStudents(){
          return [...this.studArray];
      }
      addStudent(stud){
        console.log("******AddStudent*******");
          let newStud=new Student(parseInt(stud.studId),stud.studName,stud.studDepartment,stud.studYear);
          console.log(newStud);
          this.studArray.add(newStud);
          return [...this.studArray];
      }
      searchStudent(stdId){
        console.log("******SearchStudent*******");
          return [...this.studArray].find((student)=>student.studId==stdId);
      }
      deleteStudent(stdId){
        console.log("******DeleteStudent*******");
          let student=this.searchStudent(stdId);
          this.studArray.delete(student);
          return [...this.studArray];
      }
      updateStudent(student){
        console.log("******UpdateStudent*******");
        this.deleteStudent(parseInt(student.studId));
        //console.log(this.studArray);
        let stud=new Student(student.studId,student.studName,student.studDepartment,student.studYear);
        this.studArray.add(stud);
        return [...this.studArray];
      }
}