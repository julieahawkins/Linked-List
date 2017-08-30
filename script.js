//set focus on page load
$('.website-title-input').focus();


//event listeners
$('.enter-button').bind('click', enterClick);
$('.clear-all').bind('click', clearRead);

$('.website-title-input, .website-url-input').keyup(function(e) {
	e.preventDefault();
	$('.enter-button').removeClass('error-message');
	$('.enter-button').prop('disabled', false);
	$('.enter-button').text('Enter');

	if ($('.website-url-input').val() === '' || $('.website-title-input').val() === '') {
		$('.enter-button').prop('disabled', true);
	} else if (e.keyCode === 13) {
		enterClick();
	}
});

$('.main-content').bind('click', function(e) {
	e.preventDefault();
	if(e.target.className === 'read-button') {
		e.target.closest('article').classList.toggle('read');
		countBookmarks();
	}

	if(e.target.className === 'delete-button') {
		var articleDelete = e.target.closest('article');
		$(articleDelete).slideUp('slow', function() {
			$(articleDelete).remove();
			countBookmarks();
		});
	}
});


//when Enter button is clicked or Enter key is pressed
function enterClick() {
	var title = $('.website-title-input').val(); 
	var link = $('.website-url-input').val();
	var validate = validateUrl(link);
	if(/^(http[s]?:\/\/)/.test(link) === false) {
		link = 'https://' + link;
	}
	
	//check for errors and display if needed
	if (title === '' || link === '') {
		displayErrorMessage('YOU MUST INCLUDE A TITLE AND A LINK.');
	} else if(!validate){
		displayErrorMessage('INVALID URL - PLEASE TRY AGAIN.');

	//no errors --> create and append new article bookmark	
	} else {	
		var newArticle = createBookmark(title, link);
		$(newArticle).prependTo('.main-content').hide().slideDown('slow');
		countBookmarks();
		defaultInputs();
	}
};


//reset inputs to default
function defaultInputs() {
	$('.website-title-input').val('');
	$('.website-url-input').val('');
	$('.enter-button').prop('disabled', true);
	$('.website-title-input').focus();
};


//counts number of total and read bookmarks and displays the counts
function countBookmarks() {
	var count = $('article').length;
	var readCount = $('.read').length;
	$('.total-count').text(count);
	$('.read-count').text(readCount);
	if (readCount > 0) {
		$('.clear-all').prop('disabled', false);
		$('.read-count').css('color', '#F05A28');
	} else {
		$('.clear-all').prop('disabled', true);
		$('.read-count').css('color', '#455A64');
	}
};


//creates new article element for new bookmark
function createBookmark(title, link) {
	var newArticle = document.createElement('article');
	newArticle.innerHTML = `
						<h2>${title}</h2>
						<p><a href="${link}" onclick="window.open('${link}','_blank')">${link}</a></p>
						<button class="read-button">Read</button>
						<button class="delete-button">Delete</button>`;
	return newArticle;
};


//removes all read bookmarks
function clearRead() {
	$('.read').slideUp('slow', function() {
		$('.read').remove();
		countBookmarks();
	});
};


//returns true if valid URL, returns false if not valid URL
function validateUrl(link) {
	var regEx = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
	return regEx.test(link);
};


//displays error message 
function displayErrorMessage(message) {
	$('.enter-button').addClass('error-message');
	$('.enter-button').text(message);
};










