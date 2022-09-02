let count = 0;

document.getElementById("count_el").innerText = count;

function increment()
{
    count++;
    document.getElementById("count_el").innerText = count;
}

function decrement()
{
    if(count>0)
        count--;
    else
     alert("Already at minimum count");  
    document.getElementById("count_el").innerText = count;
}

let counter = 0;

function saveRecord()
{
    // alert(" count = "+ count + "\n Data saved successfuly");
    
    let countStr = count + " - ";
   
    if(counter<3)
    {
        document.getElementById("text").textContent += countStr;
        counter++;
    }
       
    
    else
    {
        document.getElementById("text").textContent = "Previous Entires: ";
        document.getElementById("text").textContent += countStr;  
        counter=0
    } 

    count=0;
    document.getElementById("count_el").innerText = count;

    // we are using textContent insteaad of innerText because innerText only shows human readable text so it will no print space after dashed
}

