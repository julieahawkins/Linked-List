//event listeners
$('.website-title-input').focus();
$('.enter-button').bind('click', enterClick);
$('.clear-all').bind('click', clearRead);


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
	if (title === '' || link === '') {
		//we know alerts are terrible, you should never see this one!
		alert('YOU NEED BOTH A TITLE AND A URL!')
	} else {
	var newArticle = createBookmark(title, link);
	$(newArticle).prependTo('.main-content').hide().slideDown('slow');
	countBookmarks();
	defaultInputs();
		
	};
};


//reset inputs to default
function defaultInputs() {
	$('.website-title-input').val('');
	$('.website-url-input').val('');
	$('.enter-button').prop('disabled', true);
	$('.website-title-input').focus();
};


//counts number of total and read bookmarks
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
	newArticle.innerHTML = `<h2>${title}</h2>
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










