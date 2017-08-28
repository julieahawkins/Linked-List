var websiteTitleInput = $('.website-title-input');
var websiteUrlInput = $('.website-url-input');
var enterButton = $('.enter-button');

$('.main-content').bind('click', function(e) {
	e.preventDefault();
	if(event.target.className === 'read-button') {
		e.target.closest('article').classList.toggle('read');
	}

	if(e.target.className === 'delete-button') {
		e.target.closest('article').remove();
	}

});

enterButton.bind('click', function() {
	var title = websiteTitleInput.val(); 
	var link = websiteUrlInput.val();

	var newArticle = createBookmark(title, link);

	// append.newBookmark
	$('.main-content').prepend(newArticle);
});

function createBookmark(title, link) {
	var newArticle = document.createElement('article');
	newArticle.innerHTML = `<h2>${title}</h2>
						<p><a href="">${link}</a></p>
						<button class="read-button">Read</button>
						<button class="delete-button">Delete</button>`;
	return newArticle;
}



