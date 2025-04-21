const course = {
  coursename: "js in hindi",
  price : "999",
  courseInstructor : "Prathiba Kamle"
}

// course.courseInstructor  // =>it is also correct

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//   "name" : "Prathiba",
//   "coursename" : "js in hindi",
//   "price" : "free"
// }   // like this json works 



