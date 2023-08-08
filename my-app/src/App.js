function App() {
  var name = "shafin";
  var obj = {
    name: "konak",
    id: "20-43322-2",
    course: "bd studies ",
  };
  var style = {
    color: "blue",
    backgroundColor: "red",
  };
  return (
    <div>
      <GetCourse></GetCourse>
      <header>
        <a>style is : {2 + 3} </a>
        <a>Learn React</a>
        <p class=" ">this is react practice in this course </p>
        <p id=" ">number is : {2 + 3}</p>
        <p> the name is this boy is : {name}</p>
        <p style={style}> this object is : {obj.name}</p>
        <p> this object is : {obj.id}</p>
        <p style={style}> this object is : {obj.course}</p>
      </header>
    </div>
  );
}
//components
function GetCourse() {
  var style = {
    border: "1px solid red ",
    fontColor: "red ",
    textSize: "2px",
  };
  return (
    <>
      <h1>this is best course </h1>
      <h2>please Enter your university id card </h2>
      <h3 style={style}>style this </h3>
    </>
  );
}

export default App;
