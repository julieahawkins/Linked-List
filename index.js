// input title and url
//enterbutton event listener
//read button event listener >>adds class .read
//delete button event listener >>deletes

var websiteTitleInput = document.querySelector('.website-title-input');
var websiteUrlInput = document.querySelector('.website-url-input');
var enterButton = document.querySelector('.enter-button');
var bookmark = document.querySelector('article');
var readButton = document.querySelector('.read-button');
var deleteButton = document.querySelector('.delete-button');



enterButton.addEventListener('click', addLink);
readButton.addEventListener('click', toggleRead);
deleteButton.addEventListener('click', deleteLink);


function addLink() {
	//  first article title = websiteTitleInput.innerText 
	//  first article url = websiteUrlInput.innerText 
};


function toggleRead() {
	bookmark.classList.toggle('read');
	// toggles .read class on and off the article tags
};


function deleteLink() {
	// deletes the bookmark
};