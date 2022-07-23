//creating an array of objects 
let students = [
   {
    name: "maxxxx",
    here: true  // are they here right now
   },
   {
    name: "pam",
    here: true
   }
]

// returns an array of strings with student's name only from the student array 
//function getStudentsNames(studentsArray) {
const getStudentsNames = (studentsArray) => {
    let studentName = []
    for (let i=0;i<studentsArray.length;i++) {
        studentName.push(studentsArray[i].name)
    }
    return studentName
}

//print out what the getStudentsname returns
// console.log(getStudentsNames(students))
const studentsnames = getStudentsNames(students)
console.table(studentsnames)
console.table(students)
