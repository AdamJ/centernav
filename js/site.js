// $("#center-nav--dropdown").click(function() {
//   $("#centerNav").toggleClass("hide", function() {
//     // toggle the center menu
//   });
// });

// $(function() {
//   var animations = {
//     animation: 'animationend',
//     OAnimation: 'oAnimationEnd',
//     MozAnimation: 'mozAnimationEnd',
//     WebkitAnimation: 'webkitAnimationEnd',
//   };
//   $("a").on("click", function() {
//     $(".center-nav--user-dropdown_list").addClass("fadeInDown").one("animationend, oAnimationEnd, mozAnimationEnd",
//     function() {
//       $(this).removeClass("fadeInDown");
//     });
//   });
//   $("a.search-button").on("click", function() {
//     $(".site-search").removeClass("hide");
//     $(".site-search").addClass("fadeInRight").one("animationend, oAnimationEnd, mozAnimationEnd",
//     function() {
//       $(this).removeClass("fadeInRight");
//     });
//   });
//   $(".search-button-close").on("click", function() {
//     $(".site-search").addClass("hide");
//     $(".site-search").addClass("fadeOutRight").one("animationend, oAnimationEnd, mozAnimationEnd",
//     function() {
//       $(this).removeClass("fadeOutRight");
//     });
//   });
// });
// $("#center-nav--spaces-dropdown").click(function () {
//   $("#spacesDropdown").toggleClass("hide", function () {
//     // toggle the Spaces menu
//   });
// });

$(".center-menu").click(function(){
    $(".center-menu-content").slideToggle("normal");
});
$(".space-dropdown").click(function(){
    $(".right-menu-content").slideToggle("normal");
});
$(".search-site").click(function(){
    $(".space-dropdown").toggleClass("search-expanded-space");
    $(".search-site-input").toggleClass("search-site-input-show");
    // $(".center-menu").toggleClass("search-expanded");
    // $(".search-site").toggleClass("search-expanded-centered");
});
