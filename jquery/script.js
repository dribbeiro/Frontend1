$(document).ready(function(){
	function trocar_cores(cor){
		var cores = ['panel-info','panel-danger','panel-success','panel-warning']
		var painel = $('.panel');
		for(x in cores){
			if(painel.hasClass(cores[x])){
				painel.removeClass(cores[x]);
			}
		}
		painel.addClass(cor);
	}
	
	$('#verde').click(function(){
		trocar_cores('panel-success');
	});

	$('#vermelho').click(function(){
		trocar_cores('panel-danger');
	});

	$('#vermelho').click(); //Simula Acao(click)

	$('#amarelo').click(function(){
		trocar_cores('panel-warning');
	});

	$('.link').each(function(index){
		var htmlAtual = $(this).html();
		$(this).html(htmlAtual+' '+(index+1));
	});

	$('#menu').children().each(function(index){
		$(this).children().css("color","orange");
	});

	$("a[href='#home']").parent().parent().css('background-color','red');

	$('#toogle-panel').click(function(){
		$(this).parents('.panel-heading').next().slideToggle('slow');
		if($(this).hasClass('glyphicon-chevron-up')){
			$(this).removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
		}else{
			$(this).removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
		}
	});

});