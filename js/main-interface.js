var update = function() {
  $('#insertTime').text(moment().format('MMMM Do YYYY, h:mm:ss a'));		
};

$(document).ready(function() {

  setInterval(update, 1000);

  $('#time').bootstrapMaterialDatePicker({format : 'dddd DD MMMM YYYY - HH:mm'});

  $('#time').click(function(){
	console.log($("#time").val());
  });

});