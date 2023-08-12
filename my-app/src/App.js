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

  var course_name = [
    { name: "Bangla", price: "100taka" },
    { name: "english", price: "200taka" },
    { name: "arbic", price: "1230taka" },
  ];

  const course = ["bangla", "English", "somaj", "arbic"];

  const price = ["$2", "$3", "$5", "$10"];
  console.log("this  is value ");
  const all_courses = course_name.map((courses) => courses.name);
  console.log(all_courses);

  const course_array = course.map((course) => course);
  console.log(course_array);

  // const courses_names = course.map((n) => n);
  // console.log(courses_names);
  return (
    <div>
      <GetCourse
        name={course_name[0].name}
        price={course_name[0].price}
      ></GetCourse>
      <GetCourse
        name={course_name[1].name}
        price={course_name[1].price}
      ></GetCourse>
      <GetCourse
        name={course_name[2].name}
        price={course_name[2].price}
      ></GetCourse>
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
      <h1>THis is map</h1>
      <ul>
        {course_name.map((course) => (
          <li>{course.name}</li>
        ))}
      </ul>

      <ul>
        {course_name.map((course) => (
          <GetCourse name={course.name} price={course.price}></GetCourse>
        ))}
      </ul>

      <Allcourse name="CSE" credit="123 credit"></Allcourse>
      <Prechase name={course[0]} price={price[0]}></Prechase>
      <Prechase name={course[1]} price={price[1]}></Prechase>
      <Prechase name={course[2]} price={price[2]}></Prechase>
      <Prechase name={course[3]} price={price[3]}></Prechase>
    </div>
  );
}
//components
function GetCourse(props) {
  var style = {
    border: "1px solid red ",
    fontColor: "red ",
    textSize: "2px",
  };
  return (
    <>
      <h1>this is best course {props.name} </h1>
      <h6>price is : {props.price}</h6>
      <h2>please Enter your university id card </h2>
      <h3 style={style}>style this </h3>
    </>
  );
}

function Allcourse(props) {
  return (
    <>
      <h1>Best course in aiub university is : {props.name}</h1>
      <h1>minimum credit : {props.credit}</h1>
    </>
  );
}

function Prechase(props) {
  const style = {
    backgroundColor: "light",
    border: "2px solid black",
    Height: "200px",
    Wight: "100px",
  };
  console.log(props);
  return (
    <div style={style}>
      <h1>Course name :{props.name} </h1>
      <h1>Price : {props.price} </h1>
      <button>Buy now </button>
    </div>
  );
}

export default App;
