let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");
// let li=document.querySelectorAll("li");

btn.addEventListener("click",function(){
    
    let item=document.createElement("li");
    item.innerText=input.value;
    
   
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
   
    item.appendChild(delbtn)

    ul.appendChild(item);
    
    
    input.value=null;
});



// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     })
// }
// BUT THERE IS A PROBLEM, THIS CODE IS NOT ABLE TO DELETE THE NEW LIST (WHICH WE ADDED);


// SOLUTION IS----> EVENT DELEGATION

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();

    }
});
