$(document).ready(function() {
   // Handler for .ready() called.
    $("#logofoot").hover(function(){
            $("#logofoot span").stop(true,true).fadeIn("slow");
        },
        function(){
            $("#logofoot span").stop(true,true).fadeOut("slow");
        }
    );
    
    // SLIDER 
    $('#slider_right').nivoSlider({
        effect: 'slideInLeft', // For box animations
        animSpeed: 300
    });

   // We'll target all AREA elements with alt tags (Don't target the map element!!!)
   $('area[alt]').qtip(
   {
      content: {
         attr: 'alt' // Use the ALT attribute of the area map for the content
      },
	   position: {
         my: 'top left',
         target: 'mouse',
         viewport: $(window), // Keep it on-screen at all times if possible
         adjust: {
            x: 10,  y: 10
         }
      },
      hide: {
         fixed: true // Helps to prevent the tooltip from hiding ocassionally when tracking!
      },
      style: {
         classes: 'ui-tooltip-tipsy ui-tooltip-shadow'
      }
   });
  
    $('.zedx_map').maphilight({
            fade: true,
            fillColor:"f3c22e",
            fillOpacity:1,
            strokeColor:"ff0000",
            strokeOpacity:0,
            strokeWidth:1 
    });
    
    //    Video PLUGIN
    $("ul.demo2").ytplaylist({addThumbs:true, autoPlay: false, holderId: 'ytvideo2'});
    // JCAROUSSEL
    $('#jcarous').jcarousel();
    // Superfish
    $('ul.sf-menu').superfish();
    //Text Animation home
    // $('.info_anime').airport(['1000 offres en cours !','14 000 CV en ligne !']);
    // colorbox
//    $.fn.colorbox({inline:true, href:"#pub_home",width:"450px",height:"651px"});
    
    swfobject.registerObject("FlashID");

    function runIt() {
      $(".tel_pub").show("slow").delay(4000);
      $(".tel_pub").hide("slow",runIt).delay(4000);
    }
    runIt();
    function runIt2() {
      $(".contact_pub").hide("slow").delay(4000);
      $(".contact_pub").show("slow",runIt2).delay(4000);
    }
    runIt2();
    
    // Menu accordion connecté
    $(".menu_sous_sec_candid").hide();
    $(".activeLink").show();
    
    $(".menu_sous_sec").hide();
    $(".activeLink").show(); 

    $(".menu_sec_candid").click(function(){
        /* $(".menu_sous_sec_candid").slideUp("slow"); */
        $(this).next().find('li').parent().slideToggle("slow");
    });
    
    $(".menu_sec").click(function(){
        /* $(".menu_sous_sec").slideUp("slow"); */
        $(this).next().find('li').parent().slideToggle("slow");
    });
});