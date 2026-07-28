import {useState} from "react";
function Dbase(){
  const [FormData,setFormData]=useState({
    name:'',
    email:'',
    message:''
});
const [status,setStatus]=useState(
    {
        type:'',
        msgs:''
    }
);
const [loading,setLoading]=useState(false);
const handleInputData=(e)=>{
    const {name,value}=e.target;
    setFormData(
        prev=>({
            ...prev,
            [name]:value
        })
    );
};
const handleSubmit=async(e)=>
{
    e.preventDefault();
    setLoading(true);
    setStatus({
        type:'',
        msgs:''
    });
    try{
        const response=await fetch('http://localhost:5000/api/contacts',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(FormData)
        });
        const result=await response.json();
        if(response.ok){
            setStatus({type:"success",msgs:"Form Submitted Successfully."})
            setFormData({name:'',email:'',message:''});
        }
        else{
            setStatus({type:'failed',msgs:"please fill the form."});
        }
    }
    catch(error){
        setStatus({type:'error',msgs:'could not connect to local host'});
    }
    finally{
        setLoading(false);
    }
}
return(
        <>
    <div
      style={{
        width: "420px",
        margin: "60px auto",
        padding: "30px",
        borderRadius: "20px",
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        boxShadow: "0px 8px 25px rgba(0,0,0,0.3)",
        color: "white",
        fontFamily: "Poppins, sans-serif",}}>
      <h1 style={{textAlign: "center", marginBottom: "25px",color: "#fff",fontSize: "32px",}}>Send Message</h1>

      <form onSubmit={handleSubmit}>
        <label style={{fontWeight: "bold",fontSize: "17px",color: "#fff",}}>Name:</label>
        <br />
        <input type="text" name="name" value={FormData.name} onChange={handleInputData} required
            style={{
                width: "100%",
                padding: "12px",
                marginTop: "6px",
                marginBottom: "18px",
                border: "none",
                borderRadius: "10px",
                outline: "none",
                backgroundColor: "#f4f4f4",
                color: "#333",
                fontSize: "15px",
            }}/>
        <label style={{fontWeight: "bold",fontSize: "17px",color: "#fff"}}>Email:</label>
        <br />
        <input type="email" name="email" value={FormData.email} onChange={handleInputData} required
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "6px",
            marginBottom: "18px",
            border: "none",
            borderRadius: "10px",
            outline: "none",
            backgroundColor: "#f4f4f4",
            color: "#333",
            fontSize: "15px",
            }}/>
        <label style={{fontWeight: "bold",fontSize: "17px",color: "#fff",}}>Message:</label>
        <br />
        <textarea name="message" value={FormData.message} onChange={handleInputData} required rows="5"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "6px",
            marginBottom: "18px",
            border: "none",
            borderRadius: "10px",
            outline: "none",
            backgroundColor: "#f4f4f4",
            color: "#333",
            fontSize: "15px",
        }}/>
        <button type="submit" disabled={loading} 
        style={{
            width: "100%",
            padding: "14px",
            backgroundColor: "#ff4d6d",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
        }}>
          {loading ? "Submitting..." : "Submit"}
        </button>

        {status.msgs && (
          <p
            style={{
                marginTop: "15px",
                textAlign: "center",
                color: "#fff",
                fontWeight: "bold",
            }}>
            {status.msgs}
          </p>
        )}
      </form>
    </div>
  </>
);
       
}
export default Dbase;