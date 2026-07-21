import GrandChild from "./GrandChild";
function Child({name}){
    return <GrandChild name={name}></GrandChild>
}
export default Child;