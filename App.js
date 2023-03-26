function Test()
{
let myobject={name:"Madras"};
let newObject=myobject;
myobject.name="Chennai";
let myarray=["a","e","i","o","u"]
let vowelArray = myarray;
myarray.push("u");
console.log(myarray)
const ECE=()=>{alert("check the console output!")}
return <div><button onClick={ECE}>References Data types and call the funcion</button></div>
}
ReactDOM.render(<Test/>,document.getElementById("mydiv"))