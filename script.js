//your JS code here. If required.



const inputvalue=document.querySelectorAll(".code")


       inputvalue.forEach((ele,index) => {   
        ele.addEventListener(("keyup"),(e)=>{
            let currentEle=e.target.value;
 if(e.key>=0 && e.key <=9){
            if(currentEle.length==1 && index<inputvalue.length-1){
               
                inputvalue[index+1].focus();
  
              }
           }        });

       ele.addEventListener(("keydown"),(e)=>{

           if(e.key=="Backspace" && ele.value=="" && index>0){
            inputvalue[index-1].focus()
           }
           else{
            inputvalue.value=""
           }

       })
  
    });


