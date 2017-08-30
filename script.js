var websiteTitleInput = $('.website-title-input');
var websiteUrlInput = $('.website-url-input');
var enterButton = $('.enter-button');
var clearButton =$('.clear-all');


$('.website-title-input, .website-url-input').keyup(function(e) {
	e.preventDefault();
	$('.enter-button').prop('disabled', false);

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
		/////////////////////////////jquery animation
		$(articleDelete).slideUp('slow', function() {
		$(articleDelete).remove();
		countBookmarks();
		//////////////////////////////////////////
	});
		
	}
});


enterButton.bind('click', enterClick);
clearButton.bind('click', clearRead);


function enterClick() {
	var title = websiteTitleInput.val(); 
	var link = websiteUrlInput.val();
	if (title === '' || link === '') {
		//we know alerts are terrible, you should never see this one!
		alert('YOU NEED BOTH A TITLE AND A URL!')
	} else {
	var newArticle = createBookmark(title, link);

	///////////////////////////////////////////////////////////
	$(newArticle).prependTo('.main-content').hide().slideDown('slow');

	//old version below... this just makes the bookmark appear
	//$('.main-content').prepend(newArticle);


	countBookmarks();
	$('.website-title-input').val('');
	$('.website-url-input').val('');
	$('.enter-button').prop('disabled', true);
	$('.website-title-input').focus();
	};
};


function countBookmarks() {
	var count = $('article').length;
	var readCount = $('.read').length;
	$('.total-count').text(count);
	$('.read-count').text(readCount);
	if (readCount > 0) {
		$('.clear-all').prop('disabled', false)
	} else {
		$('.clear-all').prop('disabled', true)
	}
};
//we have bookmark total
//total read
//total unread

function createBookmark(title, link) {
	var newArticle = document.createElement('article');
	newArticle.innerHTML = `<h2>${title}</h2>
						<p><a href="${link}" onclick="window.open('${link}','_blank')">${link}</a></p>
						<button class="read-button">Read</button>
						<button class="delete-button">Delete</button>`;
	return newArticle;
};


function clearRead() {
	// $('.read').remove();
	console.log('clearRead');
	////////////////////////////////jquery animation
	$('.read').slideUp('slow', function() {
		$('.read').remove();
		countBookmarks();
	});
	///////////////////////////////////////////////
	
};








