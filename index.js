// input title and url
//enterbutton event listener
//read button event listener >>adds class .read
//delete button event listener >>deletes

var websiteTitleInput = $('.website-title-input');
var websiteUrlInput = $('.website-url-input');
var enterButton = $('.enter-button');
var articles = $('article');
var readButton = $('.read-button');
var deleteButton = $('.delete-button');

var bookmarkArray = [];

enterButton.bind('click', addLink);
readButton[0].addEventListener('click', 
	function(clickEvent) {
		toggleRead('.article0')});
readButton[1].addEventListener('click', 
	function(clickEvent) {
		toggleRead('.article1')});
readButton[2].addEventListener('click', 
	function(clickEvent) {
		toggleRead('.article2')});
readButton[3].addEventListener('click', 
	function(clickEvent) {
		toggleRead('.article3')});

deleteButton[1].addEventListener('click', deleteLink);


function addLink() {
	var title = websiteTitleInput.val(); 
	var link = websiteUrlInput.val(); 
	var bookmark = new Bookmark(title, link);
	bookmarkArray.push(bookmark);

	//console.log(bookmarkArray);

	displayArray();

	// var bookmark = new Bookmark('title', 'link')
	// sticks it in the first article
}

function displayArray() {
	for (var i = 0; i < bookmarkArray.length; i++) {
		$('.article' + i).html('<h2>' + bookmarkArray[i].title + '</h2><p><a href="' + bookmarkArray[i].link + '">' + bookmarkArray[i].link + '</a></p><button class="read-button">Read</button><button class="delete-button">Delete</button>');
	}
}

function toggleRead(articleClass) {
	// bookmark.classList.toggle('read');
	$(articleClass).toggleClass('read');
		// toggles .read class on and off the article tags
};


function deleteLink() {
	// deletes the bookmark

	$(this).article.html('hello');


};

/////////////

function Bookmark(title, link) {
	this.title = title;
	this.link = link;
	this.read = 'unread';
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





