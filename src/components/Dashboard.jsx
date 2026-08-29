import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function Dashboard() {
    const { create, read, update, remove, clear } = useLocalStorage("student1", { name: "Sahal", age: 14 });
    const [createStudent, setCreateStudent] = useState(false);
    const [updateStudent, setUpdateStudent] = useState(false);
    const [removeStudent, setRemoveStudent] = useState(false);
    const [id, setId] = useState(0);
    const [student, setStudent] = useState({
        id: "", value: {
            name: "",
            age: 0
        }
    });

    console.log(student, "===>>>Student on Dashboard<<<===");

    function createClickHandler() {
        create(student.id, student.value);
    }

    function updateClickHandler() {
        update(student.id, student.value);
    }

    function removeClickHandler() {
        remove(id);
    }


    return (
        <>
            <h1>Dashboard</h1>
            {/* <p id="student">{item.name}</p> */}
            {/* <button id="read">Show Students</button> */}
            <button id="create" onClick={() => { setCreateStudent(!createStudent) }}>Create Student</button>
            <button id="update" onClick={() => { setUpdateStudent(!updateStudent) }}>Update Student</button>
            <button id="remove" onClick={()=>{setRemoveStudent(!removeStudent)}}>Remove Student</button>
            <button id="clear" onClick={()=>{clear();}}>Clear</button>

            {createStudent && <>
                <h2>Create Student</h2>
                <input type="text" id="id" placeholder="Id" onChange={(e) => { setStudent({ ...student, id: e.target.value }) }} value={student.id} />
                <input type="text" id="name" placeholder="Name" onChange={(e) => { setStudent({ ...student, value: { ...student.value, name: e.target.value } }) }} value={student.value.name} />
                <input type="number" id="age" placeholder="Age" onChange={(e) => { setStudent({ ...student, value: { ...student.value, age: e.target.value } }) }} value={student.value.age} />
                <button id="save" onClick={() => { createClickHandler(); setCreateStudent(false) }}>Save</button>
            </>}

            {updateStudent && <>
                <h2>Update Student</h2>
                <input type="text" id="update-id" placeholder="Id" onChange={(e) => { setStudent({ ...student, id: e.target.value }) }} value={student.id} />
                <input type="text" id="update-name" placeholder="Name" onChange={(e) => { setStudent({ ...student, value: { ...student.value, name: e.target.value } }) }} value={student.value.name} />
                <input type="number" id="update-age" placeholder="Age" onChange={(e) => { setStudent({ ...student, value: { ...student.value, age: e.target.value } }) }} value={student.value.age} />
                <button id="update-save" onClick={() => { updateClickHandler(); setUpdateStudent(false) }}>Save</button>
            </>}

            {removeStudent && <>

            <input type="text" id="remove-id" placeholder="Id" onChange={(e)=>{setId(e.target.value)}}/>
            <button id="remove-save" onClick={()=>{removeClickHandler(); setRemoveStudent(false);}}>Remove</button>
            </>}


        </>
    );
}

export default Dashboard;