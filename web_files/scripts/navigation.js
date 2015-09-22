//VARIABLES
var modPageCount = new Array (1, 9, 10, 11, 16, 13);

var url;
var index;
var filename;
var pageNum;
var pageNumStr;
var prevPageNum;
var prevPageName;
var nextPageNum;
var nextPageName;
var modNum;
var modNumStr;
var prevModNum;
var prevModName;
var nextModNum;
var nextModName;
var activeLeftNav;
var activePage;

//FUNCTIONS - BEFORE LOAD
function parseURL() {
	url = $(location).attr('href');
	index = url.lastIndexOf('/') + 1;
	filename = url.substr(index);
	index = filename.lastIndexOf('mod') + 3;
	modNum = parseInt(filename.substr(index,2),10);
	index = filename.lastIndexOf('pg') + 2;
	pageNum = parseInt(filename.substr(index,2),10);
	modNumStr = modNum.toString();
	if (modNumStr.length < 2) {
			modNumStr = '0' + modNumStr;
		}
	pageNumStr = pageNum.toString();
	if (pageNumStr.length < 2) {
			pageNumStr = '0' + pageNumStr;
		}
}

function loadExternalCSS() {
	activeCSS = 'styles/module' + modNumStr + '.css';
	if (document.createStyleSheet) {
    	document.createStyleSheet(activeCSS);
	}
	else {
    	$('head').append('<link href="' + activeCSS + '" rel="stylesheet" type="text/css" />');
	}
}

//FUNCTIONS - AFTER LOAD
function setPageNum() {
		$('#pagenum').html(pageNum + ' of ' + modPageCount[modNum]);
}

function loadLeftNav() {
	activeLeftNav = 'science_mod' + modNumStr + '_leftnav.html';
	activePageLink = pageNum - 1;
	$('#leftnav').load(activeLeftNav, function(){
		$('#leftnav a:eq(' + activePageLink + ')').addClass('active');
	});

}

function setNext() {
	if (pageNum < modPageCount[modNum]) {
		nextPageNum = pageNum + 1;
		nextPageNum = nextPageNum.toString();
		if (nextPageNum.length < 2) {
			nextPageNum = '0' + nextPageNum;
		}
		nextPageName = 'science_mod' + modNumStr + 'pg' + nextPageNum + '.html';
		$('#next_img').attr('src', 'styles/next_mod' + modNumStr + '_off.jpg');
		$('#next_url').attr('href',nextPageName);
	}
	else if (modNum < modPageCount.length - 1) {
		nextPageNum = '01';
		nextModNum = modNum + 1;
		nextModNum = nextModNum.toString();
		if (nextModNum.length < 2) {
			nextModNum = '0' + nextModNum;
		}
		$('#next_img').attr({
			src: 'styles/next_mod' + nextModNum + '_off.jpg',
			alt: 'Go to Next Module'
		});
		nextPageName = 'science_mod' + nextModNum + 'pg' + nextPageNum + '.html';
		$('#next_url').attr({
			href: nextPageName,
			title: 'Go to Next Module'
		});
	}
	else {
		nextPageNum = modPageCount[modNum];
		$('#next_img').attr({
			src: 'styles/next_inactive.jpg',
			alt: 'End of Tutorial'
		});
		nextPageName = 'science_mod' + modNumStr + 'pg' + nextPageNum + '.html';
		$('#next_url').attr({
			href: '#',
			title: 'End of Tutorial'
		});
	}
}

function setPrev() {
	if (pageNum > 1) {
		prevPageNum = pageNum - 1;
		prevPageNum = prevPageNum.toString();
		if (prevPageNum.length < 2) {
			prevPageNum = '0' + prevPageNum;
		}
		prevPageName = 'science_mod' + modNumStr + 'pg' + prevPageNum + '.html';
		$('#prev_img').attr('src', 'styles/prev_mod' + modNumStr + '_off.jpg');
		$('#prev_url').attr('href',prevPageName);
	}
	else if (modNum > 1) {
		prevModNum = modNum - 1;
		prevPageNum = modPageCount[prevModNum];
		prevModNum = prevModNum.toString();
		if (prevModNum.length < 2) {
			prevModNum = '0' + prevModNum;
		}
		prevPageNum = prevPageNum.toString();
		if (prevPageNum.length < 2) {
			prevPageNum = '0' + prevPageNum;
		}
		$('#prev_img').attr({
			src: 'styles/prev_mod' + modNumStr + '_off.jpg',
			alt: 'Go to Previous Module'
		});
		prevPageName = 'science_mod' + prevModNum + 'pg' + prevPageNum + '.html';
		$('#prev_url').attr({
			href: prevPageName,
			title: 'Go to Previous Module'
		});
	}
	else {
		$('#prev_img').attr({
			src: 'styles/prev_mod' + modNumStr + '_off.jpg',
			alt: 'Go to Home Page'
		});
		$('#prev_url').attr({
			href: 'index.html',
			title: 'Go to Home Page'
		});
	}
}

function setRollover() {
	$('#prev_img').hover(
		function() {
			this.src = this.src.replace('_off', '_over');
		},
		function() {
			this.src = this.src.replace('_over', '_off');
		}
	)
	$('#next_img').hover(
		function() {
			this.src = this.src.replace('_off', '_over');
		},
		function() {
			this.src = this.src.replace('_over', '_off');
		}
	)
}

//FUNCTION CALLS
parseURL();
loadExternalCSS();
$(document).ready(function() {
		setPageNum();
		loadLeftNav();
		setNext();
		setPrev();
		setRollover();
});