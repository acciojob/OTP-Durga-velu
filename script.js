//your JS code here. If required.


const inputvalue=document.querySelectorAll(".code")


   

    inputvalue.forEach((ele) => {
         
        ele.addEventListener(("keyup"),(e)=>{

            let currentEle=e.target;
            let inputField=e.key.charCodeAt(0)
            console.log(e.key);
            

            if(e.key=="Backspace"){
               let preElement=currentEle.previousElementSibling;
               if(preElement){
                preElement.focus()
               } 
               return;
            }
   

       let nextEle=currentEle.nextElementSibling;
       if(nextEle){
        nextEle.focus()
       }
              
    });
    });







