import { useDispatch, useSelector } from "react-redux";
// import { Delete, Read, Update } from "../redux/actions/userActions";
import { useState } from "react";
import { remove, read, update } from "../redux/slices/userSlice";

function UserCard() {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("");

    const [updateSection, setUpdateSection] = useState(false);

    // const user = useSelector(state => state);
    // console.log(user);


    const dispatch = useDispatch();


    return (
        <div>
            <h2>User Details:</h2>
            <button onClick={() => { dispatch(read()) }}>Fetch User Details</button>
            <button onClick={() => { dispatch(remove()) }}>Delete User</button>
            <button onClick={() => { setUpdateSection(!updateSection) }}>Update User</button>

            {updateSection &&
                <>
                    <input type="text" placeholder="Username" onChange={(e) => { setName(e.target.value) }} />
                    <input type="number" placeholder="Age" onChange={(e) => { setAge(e.target.value) }} />
                    <input type="text" placeholder="Gender" onChange={(e) => { setGender(e.target.value) }} />
                    <button onClick={() => { dispatch(update({ name, age, gender })); setUpdateSection(false) }}>Update</button>
                </>
            }
        </div>
    );
}

export default UserCard;