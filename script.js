var output_string=""


function encryption(){
     document.querySelector("#encrypt-btn").addEventListener("click",function(){
         var inp=document.getElementById("txtmsg1").value
         var passw=document.getElementById("password").value
         const str=inp.split("")
         str.forEach(element => {
            output_string+=`&#128${element.charCodeAt()}`
         });
        //  document.querySelector("#result").style.display="block"
         document.querySelector("#result").innerHTML=output_string

         var data=[];
         if(JSON.parse(localStorage.getItem('data1'))){
            data=JSON.parse(localStorage.getItem('data1'))
            data.push({"pass":passw,"input":inp,"clutter":output_string})
         }else{
            data=[{"pass":passw,"input":inp,"clutter":output_string}]
         }

         localStorage.setItem('data1',JSON.stringify(data))
     })
}

encryption();


function decryption(){
    document.querySelector("#decrypt-btn").addEventListener("click",function(){
        var clutter2="";
        var input2=document.querySelector("#txtmsg2").value
        var pass2=document.querySelector("#final-password").value
        var user=JSON.parse(localStorage.getItem('data1'))
        // console.log(user);

        var str2=input2.split(" ")
        str2.forEach(element =>{
            clutter2+=`&#${element.codePointAt(0)}`
        })
        var found;
        for(let i of user){
            if(i.clutter===clutter2){
                found=i;
            }
        }
        if(found.clutter===clutter2){
            document.querySelector("#result").style.display="block"
            document.querySelector("#result").innerHTML=found.input
            document.querySelector("#result").style.color="#eee"
        }else{
            document.querySelector("#result").style.display="block"
            document.querySelector("#result").style.color="red"
            document.querySelector("#result").innerHTML="Wrong Password"
        }
    })
}

decryption();



function btnClicking(){
    document.querySelector("#enc-btn").addEventListener("click",function(){
        document.querySelector("#encryption").style.display="block"
        document.querySelector("#decryption").style.display="none"
        document.querySelector("#enc-btn").style.backgroundColor="#333"
        document.querySelector("#dec-btn").style.backgroundColor="#222"
        document.querySelector("#main>h1 span img").style.rotate="90deg"
        document.querySelector("#result").style.display="none"
    })
    document.querySelector("#dec-btn").addEventListener("click",function(){
        document.querySelector("#decryption").style.display="block"
        document.querySelector("#encryption").style.display="none"
        document.querySelector("#enc-btn").style.backgroundColor="#222"
        document.querySelector("#dec-btn").style.backgroundColor="#333"
        document.querySelector("#main>h1 span img").style.rotate="270deg"
        document.querySelector("#result").style.display="none"
    })

    document.querySelector("#encrypt-btn").addEventListener("click",function(){
        document.querySelector("#result").style.display="block"
    })

    document.querySelector("#decrypt-btn").addEventListener("click",function(){
        document.querySelector("#result").style.display="block"
    })
}
btnClicking();