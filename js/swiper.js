// swiper
// let swiper1 = new Swiper('.top-wrapper-swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
//
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
//
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//
//     direction: 'horizontal',
//
//     slidesPerView: 5
//
//   });


let swiper2 = new Swiper('.home-swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    direction: 'horizontal',
    
  });

const mySwiperTop = new Swiper(".mySwiperTop", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    slidesPerGroup: 1,
    clickable: true,
    breakpoints: {
        1000: {
            slidesPerView: 8
        },
        600: {
            slidesPerView: 5
        }
    },
    // reverse: true,
    // loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },

});
