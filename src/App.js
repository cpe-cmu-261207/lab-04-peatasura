import { useState } from "react";
import { CourseCard } from "./components/CourseCard";

function App() {
  const grade = ["A", "B+", "B", "C+", "C", "D+", "D", "F", "W"];
  const credit = [1, 2, 3];

  const [myCourses, setMyCourse] = useState([]);
  const [inputData, setInputData] = useState({});
  const [GPA, setGPA] = useState(4.0);

  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */
  function calculateGPA() {
    // TODO
  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event 
   */
  function addCourse(event) {
    event.preventDefault();
    // TODO

    // recalculate GPA
    calculateGPA();
  }

  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id 
   */
  function onDeleteCourse(id) {
    // TODO
  }

  return (
    <div className="container mx-auto h-screen">
      <h1 className="text-center text-4xl p-3 tracking-widest">
        GPA CALCULATOR
      </h1>
      <div className="h-2/3 md:w-2/4 p-3 rounded-lg mx-auto overflow-auto">
        <h1 className="text-2xl my-3">My courses</h1>
        {/* TODO display courses */
          <p id = "io">

          </p>
        }


      
        </div>
        {/*grade.map((item)=>{
          
          return <p>{item}</p>
    
        })*/}
        {/* TODO add course input form */
        
            <form  align=  "center">
            
              <label for ="name">Subject</label>
              <input type="text " placeholder="ชื่อวิชา" id = "name"></input>
              <label for ="name">SubjectID</label>
              <input type="text " placeholder="รหัสวิชา" id = "nameID"></input>
              <label for ="gpa">GPA</label>
              <select id = "gpa" name ="gpa">
              {/*
                    <option value="4">A</option>
                    <option value="3.5">B+</option>
                    <option value="3">B</option>
                    <option value="2.5">C+</option>
                    <option value="2">C</option>
                    <option value="1.5">D+</option>
                    <option value="1">D</option>
                    <option value="0">F</option>
                */
              }
                {grade.map((item) => (
                <option value = {grade.value}>{item}</option>
                 ))}

              </select>
              <label for ="Unit">Unit</label>
            <select name ="Unit" id = "Unit">
                  {
                    credit.map((item)=>(
                      <option value ={credit.value}>{item}</option>
                    ))
                  }
               {
                /*
                 <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
                 */
               }
               
              
         
            </select>
            <button type="button"  id = "submit" name="submit" buttonClicked={CourseCard} >Add Subject</button>
          
            
          </form>
        
          
        }
        {/* TODO display calculated GPA */}
      </div>
    
  );
}

export default App;
