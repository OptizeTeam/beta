$(function () {
	var data = JSON.parse(window.localStorage.getItem('data'));
	var points = data.points;

	var i = data.points.length - 1;

	var point = JSON.parse(points[i]);

	$('h2').html(point.title);
	$('p').html(point.description);
});