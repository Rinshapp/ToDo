let input=document.getElementById("input")
let button=document.getElementById("button")
let div=document.getElementById("div")

console.log(input);
console.log(button);
console.log(div);

button.addEventListener("click",(event)=>{
    event.preventDefault();
    if (input.value==="") {
        alert("You must enter a task here")
    }else{
    console.log(input.value);

    
    let paragraph=document.createElement("p")
    let icon1=document.createElement("a")
    let span=document.createElement("span")
    let edit=document.createElement("label")

    span.innerHTML=input.value
    icon1.innerHTML=`<i class="fa-solid fa-trash " style="color: #233e26;"></i>`
    edit.innerHTML=`<i class="fa-solid fa-pen-to-square " style="color: #193617;"></i>`

    paragraph.appendChild(span);
    paragraph.appendChild(edit)
    paragraph.appendChild(icon1);
    div.appendChild(paragraph);

    icon1.addEventListener("click",function(){
        paragraph.removeChild(icon1);
        paragraph.removeChild(span);
        div.removeChild(paragraph);
    })


edit.addEventListener("click",function(){
    let editedvalue=prompt("Edit your task")
    span.innerHTML=editedvalue;
})


    input.value = ''
    }
})




