import { useState } from "react";
import { CourseCard } from "./components/CourseCard";

function App() {
  const grade = [{key: 'A', val: 4.0}, {key: 'B+', val: 3.5}, {key: 'B', val: 3.0}, {key: 'C+', val: 2.5},
                 {key: 'C', val: 2.0} , {key: 'D+', val: 1.5}, {key: 'D', val: 1.0}, {key: 'F', val: 0.0}, 
                 {key: 'W', val: -1}];
  const credit = [1, 2, 3];

  const [myCourses, setMyCourse] = useState([]);
  const [inputData, setInputData] = useState({});
  const [GPA, setGPA] = useState(4.0);

 
  let name = ""
  let a = ""
  let g = 0
  let c = 0
  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */
  function calculateGPA(course) {
    // TODO
    let grade = 0.00
    let credit = 0
    course.forEach(obj => {
      if(Number(obj.grade) !== -1){
        grade += Number(obj.grade) * Number(obj.credit)
        credit += Number(obj.credit)
      }
    })
    grade  = Number(grade) / Number(credit)
    if(Number(grade) >= 0)
      setGPA(Number(grade.toPrecision(3)))
    else setGPA(4.00)
  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event 
   */
  function addCourse(event) {
    event.preventDefault();
    // TODO
    const course={
      id:name,
      alphabet: a, 
      grade: g,
      credit: c
    }
    const newCourse = [...myCourses,course]
    setMyCourse(newCourse)
    console.log(myCourses);

    // recalculate GPA
    calculateGPA(newCourse);
  }

  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id 
   */
  function onDeleteCourse(id) {
    // TODO
    const retain = myCourses.filter(obj =>{
      return obj.id !== id
    })
    setMyCourse(retain)
    calculateGPA(retain);
  }

  return (
    <div className="container mx-auto h-screen">
      <h1 className="text-center text-4xl p-3 tracking-widest">
        GPA CALCULATOR(Ver.2)
      </h1>
      <div className="h-2/3 md:w-2/4 p-3 rounded-lg mx-auto overflow-auto">
        <h1 className="text-2xl my-3">My courses</h1>
        {/* TODO display courses */

        }
                {myCourses.map(obj => {
          const delBtn = document.createElement('button')
          delBtn.innerHTML = 'X'
          delBtn.onclick = () =>{
            onDeleteCourse(obj.id)
          }
          return <CourseCard subj={obj.id} grade = {obj.alphabet} credit = {obj.credit} del = {onDeleteCourse}/>
        })}


      
        </div>
        
        

          
          <form onSubmit={e => {
              addCourse(e)
              document.getElementById("name").value =''
              document.getElementById("grade").selectedIndex = 0
              document.getElementById("w").selectedIndex = 0
              }
            } align=  "center">
            
              <label for ="name">Subject</label>
              <input type="text " placeholder="ชื่อวิชา" name="name" id = "name" onChange={(e) => name=(e.currentTarget.value)}></input>
              
              {/*<label for ="nameID">SubjectID</label>
              <input type="text " placeholder="รหัสวิชา" id = "nameID"></input>*/}
              <label for ="gpa">GPA</label>
              
              <select id="grade" onChange = {(e)=>{
                g = e.currentTarget.value
                a = e.currentTarget.options[e.currentTarget.selectedIndex].text
                }}>
                <option value = "-2"></option>
                {grade.map((item) => { return <option value={item.val} >{item.key}</option> })}
                </select>
             
              
               
              
              <label for ="w">Unit</label>
            <select id="w" onChange = {(e)=>{c = e.currentTarget.value}}>
            <option value = "0"></option>
                {credit.map((item) => {return <option value = {item}>{item}</option>})}
               {
                /*
                 <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
                 */
               }
               
              
         
            </select>
            <button class = "in"type="button"  id = "submit" name="submit" onClick={addCourse} >Add Subject</button>
          
            
          </form>
        
          
        
        {/* TODO display calculated GPA */}
        {
          <div class = "gpaS" >
            <div class = "wow">
               <p>GPA :{GPA.toFixed(2)}</p>
            </div>
       
        </div>
      
      }
      
        </div>
      
  );
}

export default App;
