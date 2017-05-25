$(function() {

$.ajax({url:'https://www.codeschool.com/users/motorresweb',
	dataType: 'jsonp',
	success: function(response){
		$('courses.completed').html(response);
}
$('#badges').addClass('.course');
$('.course').css('<h3> + 'title' + </h3>');
});
