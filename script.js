$(document).ready(function(){
	function addlist(content){
		// alert(content);
		var newListItem = $('<button></button>');
		// console.log(newListItem);
		$(newListItem).addClass('list-group-item').text(content).append('<span class="badge">x</span>');
		$('#todoList').append(newListItem);
	}
	$('#todoTxt').bind('enterKey', function(){
		// alert("hi");
		var content = $(this).val();
		addlist(content);
	});
	$('#todoTxt').keyup(function(e){
		if (e.keyCode==13) {

			$(this).trigger('enterKey');
		}
	});
	$('#todoSub').click(function(e){
		console.log(e);
		var content = $('#todoTxt').val();
		// alert(content);
		addlist(content);
		// $('#todoTxt').val()='';
		// $(this).trigger('enterKey');
	});
	$('#todoList button').click(function(){
		$(this).toggleClass('done');
	});
	$('#todoList button span').click(function(e){
		e.stopPropagation();
		$(this).parent().remove();
	});
});