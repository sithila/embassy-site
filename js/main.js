

(function(){
    $('.sidebar .sidebar-menu li a').on('click', function () {
        alert('dfdfdf');
      const $this = $(this);
  
      if ($this.parent().hasClass('open')) {
        $this
          .parent()
          .children('.dropdown-menu')
          .slideUp(200, () => {
            $this.parent().removeClass('open');
          });
      } else {
        $this
          .parent()
          .parent()
          .children('li.open')
          .children('.dropdown-menu')
          .slideUp(200);
  
        $this
          .parent()
          .parent()
          .children('li.open')
          .children('a')
          .removeClass('open');
  
        $this
          .parent()
          .parent()
          .children('li.open')
          .removeClass('open');
  
        $this
          .parent()
          .children('.dropdown-menu')
          .slideDown(200, () => {
            $this.parent().addClass('open');
          });
      }
    });
  
    // Sidebar Activity Class
    const sidebarLinks = $('.sidebar').find('.sidebar-link');
  
    sidebarLinks
      .each((index, el) => {
        $(el).removeClass('active');
      })
      .filter(function () {
        const href = $(this).attr('href');
        const pattern = href[0] === '/' ? href.substr(1) : href;
        return pattern === (window.location.pathname).substr(1);
      })
      .addClass('active');
  
    // ٍSidebar Toggle
    $('.sidebar-toggle').on('click', e => {
      $('.app').toggleClass('is-collapsed');
      e.preventDefault();
    });
  
    /**
     * Wait untill sidebar fully toggled (animated in/out)
     * then trigger window resize event in order to recalculate
     * masonry layout widths and gutters.
     */
    $('#sidebar-toggle').click(e => {
      e.preventDefault();
      setTimeout(() => {
        window.dispatchEvent(window.EVENT);
      }, 300);
    });

    $("#owl-events").owlCarousel({
      rtl:false,
      nav:true,
      
      dots : false,
      loop:true,
      slideSpeed : 300,
 
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
 
  });

  $("#owl-storyslide").owlCarousel({
 
    navigation : true, // Show next and prev buttons
    loop:true,
    slideSpeed : 300,
    paginationSpeed : 400,

    items : 1, 
    itemsDesktop : false,
    itemsDesktopSmall : false,
    itemsTablet: false,
    itemsMobile : false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,

});

  $("#owl-newsslide").owlCarousel({
 
    navigation : true, // Show next and prev buttons
    loop:true,
    slideSpeed : 300,
    paginationSpeed : 400,

    items : 1, 
    itemsDesktop : false,
    itemsDesktopSmall : false,
    itemsTablet: false,
    itemsMobile : false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,

});

$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

$(window).resize(function(e) {
if($(window).width()<=768){
  $("#wrapper").removeClass("toggled");
}else{
  $("#wrapper").addClass("toggled");
}
});

})();


