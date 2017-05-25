$(function() {

$.ajax({
	url:'https://www.codeschool.com/users/motorresweb.json',
	dataType: 'jsonp',
	success: function(response){
		console.log('response', response);
}
$('#badges').addClass('.course');
$('.course').css('<h3> + 'title' + </h3>');
});
