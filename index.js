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




//adds event listener to read buttons when Add List runs and bookmarkArray is populated
function readButtonListener(index) {
	readButton[index].addEventListener('click', 
		function(clickEvent) {
			bookmarkArray[index].toggleRead();
		});
}

function deleteButtonListener(index) {
	deleteButton[index].addEventListener('click',
		function(clickEvent) {
			bookmarkArray.splice(index, 1)
			console.log(bookmarkArray)
			displayArray(); 
		});
}

// deleteButton[1].addEventListener('click', deleteLink);


function addLink() {
	var title = websiteTitleInput.val(); 
	var link = websiteUrlInput.val(); 
	if (title === '' || link === '') {
		alert('You must include a website title and a website URL!')
	} else {

	var bookmark = new Bookmark(title, link);
	bookmarkArray.push(bookmark);

	//console.log(bookmarkArray);
	readButtonListener(bookmarkArray.length - 1);
	deleteButtonListener(bookmarkArray.length - 1);
	displayArray();



	console.log(bookmarkArray);
	//displayArray[0].toggleRead();

	// var bookmark = new Bookmark('title', 'link')
	// sticks it in the first article
	}
};


function displayArray() {
	for (var i = 0; i < $('article').length; i++) {
		if (bookmarkArray[i]) {
			$('.title' + i).text(bookmarkArray[i].title);
			$('.link' + i).html('<a href="' + bookmarkArray[i].link + '">' + bookmarkArray[i].link + '</a>');
		} else {
			$('.title' + i).text('The Website Title');
			$('.link' + i).html('www.thewebsiteurl.com');
		}
	}


}

// function toggleRead(articleClass) {
// 	// bookmark.classList.toggle('read');
// 	console.log("in function toggleRead, this is " + this);
// 	$(articleClass).toggleClass('read');
// 		// toggles .read class on and off the article tags
// };


/////////////

function Bookmark(title, link) {
	this.title = title;
	this.link = link;
	this.read = 'unread';
}

Bookmark.prototype.toggleRead = function() {
	var articleClass = '.article' + bookmarkArray.indexOf(this);
	$(articleClass).toggleClass('read');

};


// Bookmark.prototype.deleteLink =
//make a bookmark(object), give it a title(name)
// give it a URL(link? function?).

// make new bookmarks(objects) with name and url as arguments
//figure out how to stick that object in each article


//add each new object to the beginning of the array using unshift

//error message for

//object(Bookmark) default unread, .read class toggles 





