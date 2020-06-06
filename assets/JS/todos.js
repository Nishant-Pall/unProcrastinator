// Check off specific todos by clicking
$('li').click(function(){
	$(this).toggleClass('completed');
});

// click on X to delete todo
$('span').click(function(event){
	//fadeOut the parent
	$(this).parent().fadeOut(500,function(){ 
		$(this).remove();	//remove parent from HTML
	});
	event.stopPropagation();//to prevent bubbling of events
});