let dataHolder=document.getElementById("content");
let form=document.getElementById("search")

const formSub=async (e)=>{
    e.preventDefault();
    dataHolder.innerHTML=``;
    let formData=new FormData(form);
    let city=formData.get("city");

    let url=`http://api.weatherapi.com/v1/current.json?key=91de4c405b304512a41210049230204&q=${city}`;
    let resData=await getData(url);
    let logData=await resData.json();
    displayData(logData);
}

form.addEventListener("submit",(e)=>formSub(e));

const getData= async (url)=>{
    let data= await fetch(url,{
        mode: "cors"
    });
    return data;
}

const displayData=(data)=>{
    const keyNames=Object.keys(data);

    keyNames.map((item,i)=>{

        let dataItem=document.createElement("div")
        dataItem.classList.add("dataItem");
        
        let title=document.createElement("div");
        title.classList.add("title")
        title.innerText=`${item}`;

        let itemContent=document.createElement("div");
        itemContent.classList.add("itemContent");
        itemContent.innerText=`${data[item]}`;
        
        dataItem.appendChild(title);
        dataItem.appendChild(itemContent);
        dataHolder.appendChild(dataItem);
    })
}