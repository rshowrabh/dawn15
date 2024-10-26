// hero slider 
$(document).ready(function(){
  hero_slider();
  product_slider();
  upsell_slider();
  collection_item_slider();
  review_slider(); 
  instagram_slider(); 

  // product tab 
  $('.product-tab-item').on('click', function(){
      var id = $(this).data('id');
      $(this).addClass('active').siblings().removeClass('active');
      $('#tab_'+id).addClass('show').siblings().removeClass('show');
      $('.product-contents-slider').slick('setPosition');
      product_slider();
  })

  // size guide 
  $('span.size-quide-btn').on('click', function(){
      $('.size-quide').fadeIn();
  })

  $('.size-guide-close, .size-guide-overly').on('click', function(){
      $('.size-quide').fadeOut();
  })

  // cart dreawer 
  $('.header_cart').on('click', function(e){
      e.preventDefault();
      $('body').addClass('cartshown');
  })
  $('.cart-drawer-close, .cart-drawer-overly').on('click', function(){
      $('body').removeClass('cartshown');
  })
  // image modal  
  $('.gallery-item-img').on('click', function(e){
      var src = $(this).attr('src');
      $('.gallery-modal-img').attr('src', src);
      $('.gallery-modal').addClass('show');

  })
  $('.modal-close, .modal-overly').on('click', function(){
    $('.gallery-modal').removeClass('show');
  })
  // mobile menu 
  $('.header-drawer-icon').on('click', function(e){
      $(this).toggleClass('active');
      $('.mobile-menu').toggleClass('show');
  })
  $('.mobile-menu-item-top, .sub-item-top').on('click', function(e){
      $(this).toggleClass('active').next().slideToggle();
  })
})

document.addEventListener("shopify:section:load", function() {
  hero_slider(); 
})

document.addEventListener("shopify:section:load", function() {
  product_slider(); 
  upsell_slider(); 
  collection_item_slider(); 
  review_slider(); 
  instagram_slider(); 
})

function hero_slider() {
  $('.slider-items').slick({ 
      speed:800,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows:true,
      dots:true,
      prevArrow:"<span type='button' class='arrow-prev'><img src='"+ arrow +"' alt='arrow'></span>",
      nextArrow:"<span type='button' class='arrow-next'><img src='"+ arrow +"' alt='arrow'></span>"
  }); 
}
// upsell slider 
function upsell_slider() {
  $('.drawer-upsell-items').slick({ 
      speed:300,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      arrows:true,
      dots:false,
      prevArrow:"<span type='button' class='arrow-prev'><img src='"+ arrow +"' alt='arrow'></span>",
      nextArrow:"<span type='button' class='arrow-next'><img src='"+ arrow +"' alt='arrow'></span>"
  }); 
}
// upsell slider 
function collection_item_slider() {
  $('.collection-item-slider').slick({ 
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow:"<span type='button' class='product-arrow-prev'><img src='"+ arrow +"' alt='arrow'></span>",
      nextArrow:"<span type='button' class='product-arrow-next'><img src='"+ arrow +"' alt='arrow'></span>",
      dots:false,
      responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          }
      ]
  }); 
}

// product tab with slider 
function product_slider() {
  $('.product-contents-slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow:"<span type='button' class='product-arrow-prev'><img src='"+ arrow +"' alt='arrow'></span>",
      nextArrow:"<span type='button' class='product-arrow-next'><img src='"+ arrow +"' alt='arrow'></span>",
      dots:false,
      responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
  })
  // .on('setPosition', function (event, slick) {
  //     slick.$slides.css('height', slick.$slideTrack.height() + 'px');
  // });
}

function review_slider() {
$('.slide_section').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    arrows:true, 
    autoplay:true,
    centerPadding: '0', 
    prevArrow: $('.arrow_prev'),
    nextArrow: $('.arrow_next'),
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true,
          dots: true 
        }
      }
    ]
});
}

function instagram_slider() {
  $('.instagram_slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows:false,
      autoplay:true,
      autoplaySpeed:4000,
      prevArrow:"<span type='button' class='review-arrow-prev'><img src='"+ arrow +"' alt='arrow'></span>",
      nextArrow:"<span type='button' class='review-arrow-next'><img src='"+ arrow +"' alt='arrow'></span>",
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false
          }
        }
      ]
  });
}


// product tab in single page 
var el = document.querySelectorAll('ul.info-tab-items li');
var contents = document.querySelectorAll('.product-info-tab-contents .info-tab-content');
for (let i = 0; i < el.length; i++) {
el[i].onclick = function() {
  var c = 0;
  while (c < el.length) {
    el[c++].className = 'info-tab-item';
  }
  el[i].className = 'info-tab-item active';
  var id = this.getAttribute('data-id');
  var d = 0;
  while (d < contents.length) {
      contents[d++].className = 'info-tab-content';
      if(id == d) {
          contents[i].className = 'info-tab-content show';
      }
  }
};
}

// $('.slides').slick({
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   arrows:true,
//   dots:false,
//   prevArrow:"<span type='button' class='arrow-prev'><img src='"+ arrow +"' alt='arrow'></span>",
//   nextArrow:"<span type='button' class='arrow-next'><img src='"+ arrow +"' alt='arrow'></span>"
// }); 

$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  arrow:false,
  fade: true
});
$('.slider-for').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  spped:1000,
  slidesToScroll: 1,
  asNavFor: '.slider-nav',
  arrow:true,
  prevArrow:"<span type='button' class='arrow-prev'><img src='"+ arrow +"' alt='arrow'></span>",
  nextArrow:"<span type='button' class='arrow-next'><img src='"+ arrow +"' alt='arrow'></span>",
  vertical: true,
  verticalSwiping: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: true,
        arrow:false,
        vertical: false,
        verticalSwiping: false,
      }
    },
  ]
});

// Footer
window.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(min-width: 750px)').matches) {
    return
  }

  const handleCollapse = (heading) => {
    if (heading.classList.contains('block-collapsed')) {
      heading.classList.remove('block-collapsed')
      heading.setAttribute('aria-expanded', 'true')
    } else {
      heading.classList.add('block-collapsed')
      heading.setAttribute('aria-expanded', 'false')
    }
  }
  
  document.querySelectorAll('.grid .footer-block__heading').forEach((heading, index) => {
    heading.classList.add('block-collapsed')
    heading.classList.add('block-collapsed_new')
    heading.setAttribute('role', 'button')
    heading.setAttribute('aria-expanded', 'false')
    heading.setAttribute('tabindex', '1')

    heading.nextElementSibling.setAttribute('id', `footer-block-index-${index}`)
    heading.setAttribute('aria-controls', `footer-block-index-${index}`)

    heading.addEventListener('click', () => { handleCollapse(heading) })
    heading.addEventListener('keypress',  () => { handleCollapse(heading) })
  })
})

// Read More Less Function
$(document).on("click tap touchstart", ".readmore", function(){
  $(this).parent().parent().find('.product-description-full').css("display","block");
  $(this).parent().parent().find('.product-description-short').css("display","none");
});
$(document).on("click tap touchstart", ".readless", function(){
  event.preventDefault();
  $(this).parent().parent().find('.product-description-full').css("display","none");
  $(this).parent().parent().find('.product-description-short').css("display","block");
});