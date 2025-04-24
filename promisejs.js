// let promise = new Promise((resolve,reject)=> {
//     resolve({user:"Kanishk",pass:"12345"})
// })
// promise.then((data)=>{
//     console.log(data);
//     return data;
// }).then((data)=>{
//     console.log(data.pass);
// })
let url='https://api.github.com/users/Kanishk160903';
let b = fetch(url);
b.then((data)=>{
    console.log(data)
    return data.json();
}).then((data)=>{
    console.log(data);
}).catch(()=>{
    console.log("Error")
}).finally(()=>{
    console.log("First")
})