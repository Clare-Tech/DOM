// EXAMINE THE DOCUMENT OBJECT 
// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.domain);
// console.log(document.all);
// console.log(document.all[9]);
// document.all[9].textContent = "I just made changes"
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID
// let title = document.getElementById("header-title");
// title.textContent = "<h3>textcontent</h3>"
// title.innerText = "<h3>innerText</h3>"
// title.innerHTML = "<h3>innerhtml</h3>"
// console.log(title);
// one of the difference between textContent and .innerText is that .innerText pays attention to the styling.

// GETELEMENTSBYCLASSNAME & getElementByTagName
// let result = document.getElementsByClassName("list-group-item");
// result[1].style.fontWeight = "bold"
// console.log(result[1]);

// for(let i = 0; i<result.length; i++){
//     result[i].style.color="red"
// }

// let item = document.getElementsByTagName("li");

// for(let i = 0; i<item.length; i++){
//     item[i].style.color="#333"
// }

// let result = document.querySelector(".form-control-mr-2")
// result.style.border="10px solid red"

// let titles = document.querySelectorAll(".title")
// titles[1]
// console.log(titles);

// let odd = document.querySelectorAll("li:nth-child(odd)");
// let even = document.querySelectorAll("li:nth-child(even)");

// for(let i =0; i<odd.length;i++){
//     odd[i].style.backgroundColor = "#f4f4f4";
//     even[i].style.backgroundColor = "#ccc"
// }

// TRAVERSING THE DOM
// childNodes, lastChild, firstChild are not really useful
// let item = document.querySelector("#items")
// item.parentNode.parentNode.parentNode.style.backgroundColor="#ddd"
// item.parentElement.parentElement.parentElement.style.backgroundColor="#ddd"
// console.log(item.childNodes);
// console.log(item.children);
// console.log(item.children[1].innerHTML);
// console.log(item.firstElementChild);
// console.log(item.lastElementChild);
// console.log(item.nextElementSibling);
// console.log(item.previousElementSibling);

// CREATE ELEMENT
// let newDiv = document.createElement("div");
// newDiv.className = "hello";
// newDiv.id = "hello1";
// newDiv.setAttribute("width","500px")

// create textNode
// let text = document.createTextNode("This is a new Text");

// add text to  element
// newDiv.appendChild(text);

// let container = document.querySelector("header .container");
// let h1 = document.querySelector("header h1");

// container.insertBefore(newDiv, h1)
// console.log(newDiv);

// let myClick = ()=>{
//     // alert("i was clicked")
//     document.getElementById("header-title").textContent = "Item Lister"?"listpicker":"Item Lister"
// }
// let btnClick = document.getElementById("btnClick");
// btnClick.addEventListener("click", myClick)


// document.getElementById("btnClick").addEventListener("click", myClick);

// function myClick(e){
//     console.log(e);
    // console.log(e.target.id);
    // console.log(e.target.classList);
    // console.log(e.target.className);
    // document.getElementById("output").innerHTML= `<h1>${e.target.id}</h1>`
    // console.log(e.type);
    // console.log(e.altKey);
// }

// MOUSE ACTIONS

// const runEvent = (e) =>{
//     e.preventDefault()
//     console.log(e);
    // console.log(`Event type is:${e.type}`);
    // let ouput = document.getElementById("output")
    // ouput.innerHTML = `<h1>MouseY:${e.offsetY} MouseX${e.offsetX} </h1>`
    // ouput.style.backgroundColor="rgb("+e.offsetX+", "+e.offsetY+", 40)"

//    document.getElementById("output").innerHTML = e.target.value
//     console.log(e.target.value);


// }
// let inputDate = document.querySelector("input[type='text']");
// let form = document.querySelector("#form");
// let select = document.querySelector("select")

// let mouseEvents = document.getElementById("btnClick");
// mouseEvents.addEventListener("click", runEvent);
// mouseEvents.addEventListener("dblclick", runEvent);
// mouseEvents.addEventListener("mousedown", runEvent);
// mouseEvents.addEventListener("mouseup", runEvent);
// mouseEvents.addEventListener("mouseover", runEvent);
// mouseEvents.addEventListener("mouseout", runEvent);
// mouseEvents.addEventListener("mouseenter", runEvent);
// mouseEvents.addEventListener("mouseleave", runEvent);
// mouseEvents.addEventListener("mousemove", runEvent);
// inputDate.addEventListener("keydown", runEvent);
// inputDate.addEventListener("focus", runEvent)
// inputDate.addEventListener("blur", runEvent)
// inputDate.addEventListener("cut", runEvent);
// inputDate.addEventListener("copy", runEvent)
// inputDate.addEventListener("paste", runEvent)
// inputDate.addEventListener("input", runEvent)
// select.addEventListener("change", runEvent)
// inputDate.addEventListener("click", runEvent)
// form.addEventListener("submit", runEvent)

// BUILT WITH VANILA JAVASCRIPT


// ITEM LISTER PROJECT

let form = document.querySelector("#addForm");
let itemList = document.getElementById("items");
let filter = document.querySelector("#filter");

const addItem=(e)=>{
    e.preventDefault();
    
    // get input value
    let newItems = document.getElementById("item").value;

    // create new li element
    let lists = document.createElement("li");
    // add className
    lists.className="list-group-item";
   

    // add textNode with input value
    let textNode = document.createTextNode(newItems);
    lists.appendChild(textNode);

    // add button
    let deleteBtn = document.createElement("button");
    deleteBtn.className ="btn btn-danger btn-sm float-right";
    deleteBtn.appendChild(document.createTextNode("X"))
    lists.appendChild(deleteBtn);

    itemList.appendChild(lists)

}

// Remove Item
const removeItem=(e)=>{
    e.preventDefault();
    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure?")){
            let list = e.target.parentElement;
            itemList.removeChild(list)
        }
    }
}

// filter items

const filterItem=(e)=>{
    let text = e.target.value.toLowerCase()
    
    // get list
    let items = itemList.getElementsByTagName("li")
    // console.log(items);

    // convert to an array
    Array.from(items).forEach((item)=>{
        let itemName = item.firstChild.textContent;
        itemName.toLocaleLowerCase().indexOf(text) != -1 ?
            item.style.display = "block"
        :
            item.style.display = "none"
    })
}


// event listeners
form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem)
filter.addEventListener("keyup", filterItem)