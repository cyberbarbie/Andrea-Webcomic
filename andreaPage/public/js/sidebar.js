$(document).ready(function(){
    $('#openSidebar').click(function(){
        $('.wrapper').toggleClass('toggled');
    });

    $('#closeSidebar').click(function(e){
        e.preventDefault();
        $('.wrapper').toggleClass('toggled');
    });

   
});
