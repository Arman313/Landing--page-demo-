$('#my-form').on('submit', function (e) {

    $(this).find('p').text('');
    $('#submit').attr('disabled',true);
    var userData = {
        name: $('#name').val().trim(),
        email: $('#email').val().trim(),
        phone: $('#phone').val().trim(),        
    };
    // console.log(userData);
    
    var valid = true;
    var emailRegExp = /^(?!.*\.\.)[\w.\-#!$%&'*+\/=?^_`{}|~]{1,35}@[\w.\-]+\.[a-zA-Z]{2,15}$/
    var phoneRegExp = /^0[2-9]\d{7,8}$/;
    if (userData.name.length < 2 || userData.name.length > 35) {
        valid = false;
        $('#name').val('').next().text("* please enter a valid name");
    }
    if (!emailRegExp.test(userData.email)) {
        valid = false;
        $('#email').val('').next().text("* please enter a valid Email");
    }
    if (!phoneRegExp.test(userData.phone)) {
        valid=false;
        $('#phone').val('').next().text('* please enter a valid phone number');
    }

    if(!valid){
        $('#submit').attr('disabled',false);
    } else {
       $.ajax({

        url:'save_data.php',
        type:'POST',
        dataType: 'html',
        data: userData,
        success: function(res){
            if(res) window.location = 'tnx.html';
        }


       })
    }
    e.preventDefault();
})