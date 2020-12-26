
export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
 
 
  return(
    <>
    <div class="CourseCard">
      <td>
        <div class="tag">
          <p>Subject : {props.subj}</p>
          <p>GPA : {props.grade}</p>
          <p>Unit : {props.credit}</p>
        </div>
      </td>
      <td>
      <div class="pos">
        <button  class="btn" onClick = {() =>{
            props.del(props.subj)
        }}>X</button></div>
      </td>
    </div>
  </>);
  

};

