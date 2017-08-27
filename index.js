// input title and url
//enterbutton event listener
//read button event listener >>adds class .read
//delete button event listener >>deletes

var websiteTitleInput = $('.website-title-input');
var websiteUrlInput = $('.website-url-input');
var enterButton = $('.enter-button');
var bookmark = $('article');
var readButton = $('.read-button');
var deleteButton = $('.delete-button');



enterButton.bind('click', addLink);
readButton.bind('click', toggleRead);
deleteButton.bind('click', deleteLink);


function addLink() {
	//  title = websiteTitleInput.innerText 
	//  link = websiteUrlInput.innerText 
	console.log('hello!');
	// var bookmark = new Bookmark('title', 'link')
	// sticks it in the first article
};


function toggleRead() {
	bookmark.classList.toggle('read');
	// toggles .read class on and off the article tags
};


function deleteLink() {
	// deletes the bookmark
};

/////////////

function Bookmark(title, link) {
	this.title = title;
	this.link = link; 
}

// Bookmark.prototype.toggleRead =


// Bookmark.prototype.deleteLink =
//make a bookmark(object), give it a title(name)
// give it a URL(link? function?).

// make new bookmarks(objects) with name and url as arguments
//figure out how to stick that object in each article


//add each new object to the beginning of the array using unshift

//error message for

//object(Bookmark) default unread, .read class toggles 





