const vegetables=["onion","tomato","cabage","pumpkin"];
//vegetables.forEach(veg=>console.log(veg));
function something(m,callback){
    console.log(m+"nothing nothing");
    callback();
}
function character(){
    console.log("Casting:siddharth,thrisha");
}
//something("movie:",character);
let promise = new Promise((resolve,reject)=>{
    resolve("success");
}
);
//promise.then(result=> console.log(result));
async function sum() {
    return 7+8;
}
//sum().then(console.log);
let std={
    NAME:"aqsa",
    AGE:20
};
let json=JSON.stringify(console.log(std));