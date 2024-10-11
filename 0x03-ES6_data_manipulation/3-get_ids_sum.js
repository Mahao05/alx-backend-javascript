function getListStudents()
{
return[
{id:1, firstName:’Guillaume’, location: ‘San Francisco’},
{id:2, firstName:’James’, location:’Columbia’},
{id:3, firstName:’Serena’, location:’San Francisco’}
]
}

getListStudents();

function getStudentIdsSum(array)
{
return array.reduce((sum,current)) => sum+current.id,0)
}

const students = getListStudents();
const value = getStudentIdSum(student);

value;
