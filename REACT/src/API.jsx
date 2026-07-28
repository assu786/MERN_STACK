import {useState,useEffect} from "react";
import axios from "axios";
function API(){
    const API="https://jsonplaceholder.typicode.com/users";
    const [user,setUser]=useState([]);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    useEffect(()=>{
        getusers();
    },[]);
    async function getusers(){
        try{
            const response = await axios.get(API);
            setUser(response.data);

        }
        catch(error){
            console.log(error);
        }
    }
    async function adduser(){
        if(name==""||email=="")
        {
            alert("please fill the details.");
            return;
        }
        try{
            const response=await axios.post(API,{name,email});
            setUser([...user,response.data]);
            setName("");
            setEmail("");
            alert("User Added successfully");
        }
        catch(error){
            console.log(error);
        }
    }
    async function Updateuser(id) {
    try {
        const response = await axios.patch(`${API}/${id}`, {

            name: "AQSA",
            email: "fathufathima.786@gmail.com",
        });

        setUser(
            user.map((user) =>
                user.id === id ? response.data : user
            )
        );

        alert("User updated successfully");
    } catch (error) {
        console.log(error);
    }
}
    async function deleteUser(id){
        try{
            await axios.delete(`${API}/${id}`);
            setUser(user.filter((user)=>
                user.id!=id
            ));
            alert("user deleted.")
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <>
        <div>
            <h1>React CRUD operations</h1>
            <label><b>Name:</b></label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <br></br>
            <label><b>Email:</b></label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <br></br>
            <button onClick={adduser}>ADD</button>
            {user.map((user) => (
    <div
        key={user.id}
        style={{
            margin: "20px",
            border: "2px solid brown",
            padding: "10px",
        }}
    >
        <h2>{user.name}</h2>
        <h3>{user.email}</h3>

        <button onClick={() => Updateuser(user.id)}>
            Update
        </button>

        <button
            onClick={() => deleteUser(user.id)}
            style={{ marginLeft: "10px" }}
        >
            Delete
        </button>
    </div>
))}
            
        </div>
        </>
    );
}
export default API;