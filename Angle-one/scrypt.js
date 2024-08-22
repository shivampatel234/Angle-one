// let btn = document.querySelector("button");
// let qr = document.querySelector(".qr");
// let qrImage = document.querySelector("#qrImage")
// let qrtext = document.querySelector("#qrText")

// console.log(qrtext.value)



// function qrCode(){
//     qrImage.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value

    
// }

// btn.addEventListener("click",() =>{
//     qr.classList.remove("img")
//     qrCode()

// })
/////////////////////////////////////////////////////////////////////////////////////////


// let toggle = document.querySelector(".toggle");
// let links = document.querySelector(".sidebar")
// let body = document.querySelector("body");


// toggle.addEventListener("click",()=>{
//     links.classList.remove("hide")
    
    
// })

/////////////////////////////////////////////// PASSWORD//////////////////////////////////////////////////////

// let boxes = document.querySelectorAll("button");
// let input = document.querySelector("input");
// let body =document.querySelector("body")

// let arr = [3,2,3,9]

// let string = ' '


// const display = boxes.forEach((val) =>{
//     val.addEventListener("click",(e)=>{

//         if(e.target.innerHTML === 'X'){
//             string = string.substring(0,string.length-1)
//             input.value = string

//         }
//         else if(e.target.innerHTML ==="/"){
//             body.innerHTML = "Congratulation"


//         }
//         else{
//             string += e.target.innerHTML
//             input.value = string
//         }
        
      
//     })
// })


////////////////////////////////////////////////////////////////////////





// let buttonArray = Array.from(boxes);

// let string = ' '


// const display = buttonArray.forEach((val) => {
//     val.addEventListener("click",(e)=>{
//         let a = val.getAttribute("id")
//         if(e.target.innerHTML =='/'){
//             if(e.target.innerHTML == '3')
//             string = 'congraturlation'
//             input.value=string;


//         }
//         else if(e.target.innerHTML == 'X'){
//                 string = string.substring(0,string.length-1)
//                 input.value=string;
//         }else{
//             string += e.target.innerHTML;
//             input.value=string;

//         }
        
       
        
        

//     })
    
   
// });


///////////////////////////////////////////////LEARNING BY SARTHAK///////////////////////////////////////////////////


let addbtn = document.querySelector("#add");
let heading5 = document.querySelector("h5");
let x = 0;

addbtn.addEventListener("click",()=>{
    if(x===0){
        heading5.innerHTML = "Friend";
        heading5.style.color ="green";
        addbtn.innerHTML = "Remove Friend";
        x = 1;

    }
    else{
        heading5.innerHTML = "Stranger";
        heading5.style.color ="red";
        addbtn.innerHTML = "Add Friend";
        x=0;

    }
   

})












