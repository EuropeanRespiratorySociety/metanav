$(document).ready(function(){
    var client = new $.RestClient('https://api.ersnet.org/');
    client.add('metanav');
    client.metanav.read().done(function (data){
        $('body').prepend(data.menu);
        (function() {
            var menuEl = document.getElementById('ml-menu'),
                mlmenu = new MLMenu(menuEl, {
                    // breadcrumbsCtrl : true, // show breadcrumbs
                    // initialBreadcrumb : 'all', // initial breadcrumb text
                    backCtrl : false, // show back button
                    // itemsDelayInterval : 60, // delay between each menu item sliding animation
                    //onItemClick: loadPage // callback: item that doesn´t have a submenu gets clicked - onItemClick([event], [inner HTML of the clicked item])
                });
                function loadPage(ev, itemName) {
                    window.location.href = ev.target.href
                } 
        })();  
    });
    var body = $("body");
    var openSidebar = false;
    function oSidebar(){
        body.addClass( 'open-left-sidebar' + " " + 'ers-animate' );
        openSidebar = true;
    }
    function cSidebar(){
        body.removeClass('open-left-sidebar').addClass('ers-animate');
        sidebarDelay();
    }
    function sidebarDelay(){
        openSidebar = true;
        setTimeout(function(){
            openSidebar = false;
        }, 400);
    }    
    $('.ers-toggle-left-sidebar').on("click", function(e){
        if( openSidebar && body.hasClass('open-left-sidebar') ){
            cSidebar();
        }else if( !openSidebar ){
            oSidebar();
        }
        e.stopPropagation();
        e.preventDefault();
    });
});    