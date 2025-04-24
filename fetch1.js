const btn=document.getElementById("but");
btn.onclick=function(){
    async function getUsers() {
  
           fetch("https://api.github.com/users").then( (response) =>{
            let data = response.json();
            return data;
          }).then((data)=>{
            console.log(data);
          }).catch((err)=>{
            console.log(err);
          })
        
}
}