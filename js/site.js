// sets the notification drawer to slide right to left
$("#notifications").click(function () {
  var effect = 'slide';
  var options = { direction: 'right' };
  $(".notification-drawer").toggle(effect, options);
});

$(".center-menu").click(function(){
    $(".center-menu-content").slideToggle("normal");
});
$(".space-dropdown").click(function(){
    $(".right-menu-content").slideToggle("normal");
});
$(".search-site").click(function(){
    $(".space-dropdown").toggleClass("search-expanded-space");
    $(".search-site-input").toggleClass("search-site-input-show");
});
