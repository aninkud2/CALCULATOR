let result=document.getElementById("inputtext")
console.log (result)
let calculate=(numbers)=>{result.value+=numbers}
console.log(result.value) 
let simplify=()=>{try{result.value=eval(result.value)}
                 catch(err){alert("syntax error" )}};
function clr(){result.value =""};
function del(){result.value=result.value.slice(0,-1)}
function power(){result.value =" "};