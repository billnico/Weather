let dataHolder=document.getElementById("content");

const getData= async (url)=>{
    let data= await fetch(url,{
        mode: "cors"
    });
    return data;
    console.log(data);
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