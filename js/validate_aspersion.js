 $('#cycle_duration').keyup(function(e) {
    
    var strongRegex = new RegExp("(([0-1]?[0-9])|(2[0-3])):[0-5][0-9]:[0-5][0-9]");
    var mediumRegex = new RegExp("^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]?$");
    var enoughRegex = new RegExp("(([0-1]?[0-9])|(2[0-3])):[0-5][0-9]:[0-5][0-9]");
    //si se cumple la condicion correspondiente muetra lo siguiente segun sea el caso  
    if (false == enoughRegex.test($(this).val())) {
      $('#passstrength').html('el formato no es correcto').css("color","red");
       $('#cycle_duration').css("color","red");
    } else if (strongRegex.test($(this).val())) {
      $('#passstrength').className = 'ok';
      $('#passstrength').html('el fomato es correcto').css("color","green");

      $('#cycle_duration').css("color","green");
    } else if (mediumRegex.test($(this).val())) {
      $('#passstrength').className = 'alert';
      $('#passstrength').html('el formato es el correcto!').css("color","green");

      $('#cycle_duration').css("color","green");
    } else {
      $('#passstrength').className = 'error';
      $('#passstrength').html('el formato no es correcto').css("color","red");

      //$('#passstrength').addClass('negacion');
      $('#cycle_duration').css("color","red");
      
    }
    return true;
  });




  $('#standby_time').keyup(function(e) {
    
    var strongRegex = new RegExp("(([0-1]?[0-9])|(2[0-3])):[0-5][0-9]:[0-5][0-9]");
    var mediumRegex = new RegExp("^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]?$");
    var enoughRegex = new RegExp("(([0-1]?[0-9])|(2[0-3])):[0-5][0-9]:[0-5][0-9]");
    //si se cumple la condicion correspondiente muetra lo siguiente segun sea el caso  
    if (false == enoughRegex.test($(this).val())) {
      $('#t').html('El formato no es correcto').css("color","red");
       $('#standby_time').css("color","red");
    } else if (strongRegex.test($(this).val())) {
      $('#t').className = 'ok';
      $('#t').html('El fomato es correcto').css("color","green");
  $('#standby_time').css("color","green");

    } else if (mediumRegex.test($(this).val())) {
      $('#t').className = 'alert';
      $('#t').html('El formato es el correcto!').css("color","green");
$('#standby_time').css("color","green");
    } else {
      $('#t').className = 'error';
      $('#t').html('El formato no es correcto').css("color","red");
       $('#standby_time').html('El formato no es correcto').css("color","red");
      //$('#passstrength').addClass('negacion');
    }
    return true;
  });
  