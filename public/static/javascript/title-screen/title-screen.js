$(document).ready(function(){

    sessionStorage.clear();

    $('#play-game').on('click', function(event) {
        document.location = '/game/';
    });

    $('#play-fb a').on('click', function(event) {
        event.preventDefault();
        if (fbLoggedIn()) {
            fbGetProfile(function(){
                document.location = '/controller/';
            });
        } else {
            fbLogin(function(status){
                if (status) {
                    fbGetProfile(function(){
                        document.location = '/controller/';
                    });
                } else {
                    alert('Could not connect to Facebook');
                }
            });
        }
    });

    $('#play-anon a').on('click', function(event) {
        event.preventDefault();
        document.location = '/controller/';
    });

});