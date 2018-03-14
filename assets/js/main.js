$(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("negro");
    } else {
      $("#mainNav").removeClass("negro");
    }
  });

  $(document).ready(function(){
   $('#send').click(function() {
     event.preventDefault();
     var validaciones = true;
    if ($('#name').val() == "") {
          $('#name').next().show();
          validaciones =  validaciones && false;
    } else {
          $('#name').next().hide();
          validaciones = validaciones && true;
    }

      if ($('#email').val() == "") {
          $('#email').next().show();
          validaciones = validaciones && false;
      } else if(!(/\S+@\S+\.\S+/.test($('#email').val()))) { //valida si tiene los caracteres de un email
          $('#email').next().hide();
          $('#email').next().next().show();
          validaciones = validaciones && false;
      } else {
          $('#email').next().hide();
          $('#email').next().next().hide();
          validaciones = validaciones && true;
      }

      if ($('#phone').val() === "") {
          $('#phone').next().show();
          validaciones = validaciones && false;
      } else if(isNaN($('#phone').val())) { //valida si es un numero
          $('#phone').next().hide();
          $('#phone').next().next().show();
          validaciones = validaciones && false;
      } else {
          $('#phone').next().hide();
          $('#phone').next().next().hide();
          validaciones = validaciones && true;
      }

      if ($('#message').val() === "") {
          $('#message').next().show();
          validaciones = validaciones && false;
      } else {
          $('#message').next().hide();
          validaciones = validaciones && true;
      }

      if (validaciones) { //cuando todo es 'valido' se borra los inputs
          console.log($(".form-control").each().val());
          $(".error").hide();
   }
  })
    });
