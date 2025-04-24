let url='https://api.github.com/users/Kanishk160903';
async function fetchdata(){
    try{
        let b=await fetch(url);
        let c=await b.json();
        console.log(c);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("first")
    }
}
fetchdata();