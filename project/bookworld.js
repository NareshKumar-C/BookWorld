var overlay=document.querySelector(".pop-overlay")
var box=document.querySelector(".pop-box")
var plus=document.getElementById("pophifen")

plus.addEventListener("click",function(){
    overlay.style.display="block"
    box.style.display="block"
})


var cancelbutton=document.getElementById("cancel")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    box.style.display="none"
})

var container=document.querySelector(".container")
var addbook=document.getElementById("add")
var book=document.getElementById("inputbook")
var author=document.getElementById("inputauthor")
var description=document.getElementById("bookdescription")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${book.value}</h2>
    <h5>${author.value}</h5>
    <p>${description.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    box.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}