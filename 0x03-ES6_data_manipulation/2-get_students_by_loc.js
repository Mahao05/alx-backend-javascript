export default function getListStudents()
{
return[
{id:1, firstName:’Guillaume’, location: ‘San Francisco’},
{id:2, firstName:’James’, location:’Columbia’},
{id:3, firstName:’Serena’, location:’San Francisco’}
]
}

getListStudents();

function getListStudentId(array){
if (!Array.isArray(Array)){
return [];
}
return  array.map((a) => a.id)
}

getListStudentIds(“hello”);
getListStudentIds(getListStudents();


Function getListStudentsByLocation(array,city)
{
return array.filter((e) =>
e.location === city);
}

const students = getListStudents

getStudentsByLocation(students, ‘San Francisco’);
