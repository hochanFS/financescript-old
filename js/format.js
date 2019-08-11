$(function(){
		var $a1 = $('#a1');
		var $a2 = $('#a2');
		var $a3 = $('#a3');
		var $a4 = $('#a4');
		var $a5 = $('#a5');
		var $a6 = $('#a6');
		var $b1 = $('#b1');
		var $b2 = $('#b2');
		var $b3 = $('#b3');
		var $b4 = $('#b4');
		var $b5 = $('#b5');
		var $b6 = $('#b6');
		var $c1 = $('#c1');
		var $c2 = $('#c2');
		var $c3 = $('#c3');
		var $c4 = $('#c4');
		var $c5 = $('#c5');
		var $c6 = $('#c6');
		
		$b1.show();
		$b2.hide();
		$b3.hide();
		$b4.hide();
		$b5.hide();
		$b6.hide();
	
		$a1.on('click', function(){
		$b1.show();
		$b2.hide();
		$b3.hide();
		$b4.hide();
		$b5.hide();
		$b6.hide();
		$c1.attr('class', 'clicked');
		$c2.attr('class', 'notclicked');
		$c3.attr('class', 'notclicked');
		$c4.attr('class', 'notclicked');
		$c5.attr('class', 'notclicked');
		$c6.attr('class', 'notclicked');
		});
		
		$a2.on('click', function(){
		$b2.show();
		$b1.hide();
		$b3.hide();
		$b4.hide();
		$b5.hide();
		$b6.hide();
		$c2.attr('class', 'clicked');
		$c1.attr('class', 'notclicked');
		$c3.attr('class', 'notclicked');
		$c4.attr('class', 'notclicked');
		$c5.attr('class', 'notclicked');
		$c6.attr('class', 'notclicked');
		});
		
		$a3.on('click', function(){
		$b3.show();
		$b1.hide();
		$b2.hide();
		$b4.hide();
		$b5.hide();
		$b6.hide();
		$c3.attr('class', 'clicked');
		$c1.attr('class', 'notclicked');
		$c2.attr('class', 'notclicked');
		$c4.attr('class', 'notclicked');
		$c5.attr('class', 'notclicked');
		$c6.attr('class', 'notclicked');
		});
		
		$a4.on('click', function(){
		$b4.show();
		$b1.hide();
		$b2.hide();
		$b3.hide();
		$b5.hide();
		$b6.hide();
		$c4.attr('class', 'clicked');
		$c1.attr('class', 'notclicked');
		$c2.attr('class', 'notclicked');
		$c3.attr('class', 'notclicked');
		$c5.attr('class', 'notclicked');
		$c6.attr('class', 'notclicked');
		});
		
		$a5.on('click', function(){
		$b5.show();
		$b1.hide();
		$b2.hide();
		$b3.hide();
		$b4.hide();
		$b6.hide();
		$c5.attr('class', 'clicked');
		$c1.attr('class', 'notclicked');
		$c2.attr('class', 'notclicked');
		$c3.attr('class', 'notclicked');
		$c4.attr('class', 'notclicked');
		$c6.attr('class', 'notclicked');
		});
		
		$a6.on('click', function(){
		$b6.show();
		$b1.hide();
		$b3.hide();
		$b4.hide();
		$b5.hide();
		$b2.hide();
		$c6.attr('class', 'clicked');
		$c2.attr('class', 'notclicked');
		$c3.attr('class', 'notclicked');
		$c4.attr('class', 'notclicked');
		$c5.attr('class', 'notclicked');
		$c1.attr('class', 'notclicked');
		});
	});
	
	function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
	}