$(document).ready(function(){

    $('.messageRegister').click(function () {

        $('.login-form').hide();
        $('.register-form').show();
    });


    $('.messageLogin').click(function () {

        $('.login-form').show();
        $('.register-form').hide();
    })

});


// https://stackoverflow.com/questions/9376192/add-icon-to-submit-button-in-twitter-bootstrap-2
// $("#myFavoriteFormSubmitButton").bind('click', function(event) {
//     $("#myFavoriteForm").submit();
// });