$(".addUserChoice").click(function(){
	$(".userChoice").val(function(i, origText){
		$(".food").html(origText);
	});
});