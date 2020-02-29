//This file is created to get the information from .json file.
//object can 


fetch("data.json") //fethces the data from external file. and the response from the file is stored in "response".
.then((response)=>{
    return response.json();     //json method converts json data into json object.
}).then((data=>{console.log(data)}))