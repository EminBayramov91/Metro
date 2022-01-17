let swiper3 = new Swiper('.philosophy-swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    spaceBetween: 30,
    effect: "fade",
    
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    direction: 'horizontal',
    
  });



// philosophy-intro
  let swiper6 = new Swiper('.philosophy-intro-swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
      },
  
    spaceBetween: 30,
    effect: "fade",
    
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    direction: 'horizontal',
    
  });

  



// philosophy-expo
  let swiper7 = new Swiper('.philosophy-expo-swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
    spaceBetween: 30,
    effect: "fade",
    
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    direction: 'horizontal',
    
  });






  let elementRotation = 0
     const element = document.querySelector('.philosophy-swiper-next-img')

     const rotateElement = () => {
         elementRotation += 360
         element.style.transform = `rotate(${elementRotation}deg)`
     }