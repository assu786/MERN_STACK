import{useState,useEffect} from "react";
import Parent from'./Parent.jsx';
import "./Count.css";
function Count(){
    const [count,setCount]=useState(0);
    const [mobile,BuyMobile]=useState(false);
    const [Lunch,FinishLunch]=useState("");
    useEffect(
        ()=>{
            document.title=`count: ${count}`;
        },[count]
    );
    return(
        <>
        <h1 className="smallcount">COUNT:{count}</h1>
        <div className="count">
        <button onClick={
            ()=>setCount(count+1)
        }>+1</button>
        <button onClick={
            ()=>setCount(count-1)
        }>-1</button>
        </div>
        <h2>Mobile:{mobile}</h2>
        <button onClick={()=>BuyMobile("oppo")}>change</button>
        <h2>phone:{mobile?"Android":"iphone"}</h2>
        <button onClick={()=>BuyMobile(!mobile)}>change</button>
        <div>
        <h2>i ate {Lunch} for my lunch.</h2>
        <input type="text" placeholder="rice" value={Lunch} onChange={(e)=>FinishLunch(e.target.value)}></input>
        </div>
        <div>
        <Parent name="Aqsa"></Parent>
        </div>
        </>
    );
}
export default Count;