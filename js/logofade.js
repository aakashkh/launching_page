$(document).ready( function() {
	$('#letter').hide();
	$('#letter').fadeIn(10000);
	for(var i=1;i<1000;i++)
	{
    $('#fimage').fadeOut(500);
	$('#fimage').fadeIn(500);
	$('#fimage').attr('src','images/red.png');
	$('#fimage').fadeTo('slow', 0.3, function()
	{
    $(this).css('background-image', 'url(images/red.png)');
	}).fadeTo('slow', 1);
	$('#fimage').fadeOut(500);
	$('#fimage').fadeIn(500);
	$('#fimage').attr('src','images/green.png');
	$('#fimage').fadeTo('slow', 0.3, function()
	{
    $(this).css('background-image', 'url(images/green.png)');
	}).fadeTo('slow', 1);
	$('#fimage').fadeOut(500);
	$('#fimage').fadeIn(500);
	$('#fimage').attr('src','images/yellow.png');
	$('#fimage').fadeTo('slow', 0.3, function()
	{
    $(this).css('background-image', 'url(images/yellow.png)');
	}).fadeTo('slow', 1);
	}
	
});