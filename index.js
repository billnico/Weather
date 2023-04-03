let dataHolder=document.getElementById("content");
let form=document.getElementById("search")
let loader=document.getElementById("load");

const formSub=async (e)=>{
    e.preventDefault();
    loader.style.display="block";
    
    let formData=new FormData(form);
    let city=formData.get("city");

    let url=`http://api.weatherapi.com/v1/current.json?key=91de4c405b304512a41210049230204&q=${city}`;
    let resData=await getData(url);
    let logData=await resData.json();
    displayData(logData);
    console.log(logData);
}

form.addEventListener("submit",(e)=>formSub(e));

const getData= async (url)=>{
    let data= await fetch(url,{
        mode: "cors"
    });
    return data;
}

const displayData=({current})=>{

    loader.style.display="none";
    dataHolder.innerHTML=``;

    const keyNames=Object.keys(current);
    keyNames.map((item,i)=>{
                 
        let dataItem=document.createElement("div")
        dataItem.classList.add("dataItem");
        
        let title=document.createElement("div");
        title.classList.add("title")
        title.innerText=`${item}`;

        let itemContent=document.createElement("div");
        itemContent.classList.add("itemContent");
        itemContent.innerText=`${current[item]}`;
        
        dataItem.appendChild(title);
        dataItem.appendChild(itemContent);
        dataHolder.appendChild(dataItem);
    })
}

(async ()=>{
    loader.style.display="block";
    let url=`http://api.weatherapi.com/v1/current.json?key=91de4c405b304512a41210049230204&q=lilongwe`;
    let resData=await getData(url);
    let logData=await resData.json();
    displayData(logData);
    console.log(logData);
})();