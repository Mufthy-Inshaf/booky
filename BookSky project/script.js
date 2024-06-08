//popup with botton

var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpop = document.getElementById("add-pop")


addpop.addEventListener("click",function(){
	popupoverlay.style.display="block"
	popupbox.style.display = "block"
})

//cancel button
var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
	event.preventDefault()
	popupoverlay.style.display="none"
	popupbox.style.display = "none"

})

//publish button container,book-title-input,book-author-input,book-discription-input

var container = document.querySelector(".container")
var Publishbook = document.getElementById("Publish-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdiscriptioninput = document.getElementById("book-discription-input")

Publishbook.addEventListener("click",function(event){
	event.preventDefault()
	var div = document.createElement("div") 
	div.setAttribute("class","book-container")
	div.innerHTML = `<h2>${booktitleinput.value}</h2>
	<h5> ${bookauthorinput.value}</h5><br>
    		<p>${bookdiscriptioninput.value}</p>
    		<button onclick="deletebook(event)"> Delete</button>`
	container.append(div)
	popupoverlay.style.display="none"
	popupbox.style.display = "none"

})

function deletebook(event)
{
	event.target.parentElement.remove()
}



