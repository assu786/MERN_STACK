function Events(){
    return(
        <>
        <div>
            <button onMouseOver={()=>alert("this is mouseover event")}>Jerry</button>
            <button onMouseLeave={()=>alert("this is mouseLeave event")}>Tom</button>
        </div>
        <input 
        onFocus={()=>console.log("this is onfocus function")}
        onBlur={()=>console.log("blurred")}/>
        
        </>
    );
}
export default Events;