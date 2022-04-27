const swiper = new Swiper('.diploms-swiper', {
    // Default parameters
    // slidesPerView: 4,
    // spaceBetween: 25,
    // Optional parameters
    loop: true,
  
    breakpoints: {
        // when window width is >= 320px
        // when window width is >= 480px
      847: {
        slidesPerView: 1,
      },
      848: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
        // when window width is >= 640px
      1300: {
        slidesPerView: 4,
        spaceBetween: 25
      }
    },
    // If we need pagination
    pagination: {
      el: '.diploms-pagin',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.diploms-arrow-right',
      prevEl: '.diploms-arrow-left',
    },
  });

  const swiperSecond = new Swiper('.cases-slider', {
    // Default parameters
    
    // Optional parameters
    breakpoints: {

      // when window width is >= 480px
    960: {
      slidesPerView: 1,
    },
      // when window width is >= 640px
    1216: {
      slidesPerView: 3,
      spaceBetween: 25
    }
  },
      loop: true,
  
    // If we need pagination
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.cases-arrow-right',
      prevEl: '.cases-arrow-left',
    },
  });

  const swiperWho = new Swiper('.who-slider', {
    // Default parameters
    slidesPerView: 1,
    // Optional parameters
    
      loop: true,
  
    // If we need pagination
    pagination: {
      el: '.who-pagin',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.who-arrow-right',
      prevEl: '.who-arrow-left',
    },
  });

  const reviews = new Swiper('.reviews-slider', {
    // Default parameters
    slidesPerView: 4,
    spaceBetween: 25,
    // Optional parameters
    
    loop: true,
    breakpoints: {
      // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
      // when window width is >= 480px
    768: {
      slidesPerView: 1,
    },
      // when window width is >= 640px
    1014: {
      slidesPerView: 3,
      spaceBetween: 25
    },
    1216: {
      slidesPerView: 4,
      spaceBetween: 25
    }
  },
  
    // If we need pagination
    pagination: {
      el: '.review-pagin',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.review-arrow-right',
      prevEl: '.review-arrow-left',
    },
  });

  const aboutSliderMobile = new Swiper('.about-slider-mobile', {
    // Default parameters
    // Optional parameters
    
    loop: true,
    breakpoints: {
      // when window width is >= 320px
    848: {
      slidesPerView: 1,
    },
      // when window width is >= 480px
    960: {
      slidesPerView: 3,
    },
      // when window width is >= 640px
  },
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.mobile-slider-about-right',
      prevEl: '.mobile-slider-about-left',
    },
  });

  