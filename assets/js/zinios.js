 $(document).ready(function() {
            //  $('.customer-logos').slick({
            //      slidesToShow: 6,
            //      slidesToScroll: 1,
            //      autoplay: true,
            //      autoplaySpeed: 1000,
            //      arrows: false,
            //      dots: false,
            //      pauseOnHover: false,
            //      responsive: [{
            //          breakpoint: 768,
            //          settings: {
            //              slidesToShow: 4
            //          }
            //      }, {
            //          breakpoint: 520,
            //          settings: {
            //              slidesToShow: 3
            //          }
            //      }]
            //  });

             $('.customer-logos').slick({
                centerMode: true,
  centerPadding: '10px',
  slidesToShow: 5,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
              });

              $('.slide-offerings').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: $('#case-study-nav-b .prev-btn'),
                nextArrow: $('#case-study-nav-b .next-btn'),
                responsive: [
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    centerPadding: '40px',
                    slidesToShow: 1
                  }
                }
                ]
                          });
           
             $('.home-banner').slick({
                 speed: 1500,
                 dots: true,
                 arrows: false,
                 autoplay: false,
                 autoplaySpeed: 10000,
                 appendDots: $('#home-banner-nav'),
                 cssEase: "cubic-bezier(0.075, 0.82, 0.165, 1)",
              responsive: [
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 1,
                  dots: true
                }
              },
              {
                breakpoint: 480,
                settings: {
                  centerPadding: '40px',
                  slidesToShow: 1,
                  dots: true,
                }
              }
            ]
            });

             $('.case-study_in').slick({
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 prevArrow: $('#case-study-nav .prev-btn'),
                 nextArrow: $('#case-study-nav .next-btn'),
                 dots: false,
                
             });
             
         });
         $('.slide-competencies').slick({
slidesToShow: 3,
slidesToScroll: 1,
prevArrow: $('#case-study-nav-a .prev-btn'),
nextArrow: $('#case-study-nav-a .next-btn'),
responsive: [
{
  breakpoint: 800,
  settings: {
    slidesToShow: 1
  }
},
{
  breakpoint: 480,
  settings: {
    centerPadding: '40px',
    slidesToShow: 1
  }
}
]
          });


          $(document).ready(function() {
            // slick carousel
            $('.vertical-Ar-vr-slider').slick({
              vertical: true,
              slidesToShow: 1,
              autoplay: true,
              slidesToScroll: 1,
              arrows: false,
              autoplaySpeed: 5000,
              dots: true,
              verticalSwiping: true,
            });
            
          });
          var windowWidth = $(window).width();

          // 2- For all devices under or at 768px, use horizontal orientation
          if(windowWidth <= 480) {
            $('.vertical-Ar-vr-slider').slick({
              vertical: false,
              dots: true,
              arrows: false,
              autoplay: true,
              autoplaySpeed: 5000,
            });
          } 
          // 3- For all devices over 768px, use vertical orientation
          else {
            $('.vertical-Ar-vr-slider').slick({
              vertical: true,
              dots: true,
              arrows: false,
              autoplay: true,
              autoplaySpeed: 5000,
            });
          }
       

          $("span.go-to-top").click(function() {
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
		});
		var $$ = jQuery;
		$$(window).scroll(function() {    
			$$("span.go-to-top").removeClass("active");
			var scroll = $$(window).scrollTop();
			if (scroll >=100) {
				$$("span.go-to-top").addClass("active");
			}
		});
          
         //Hamburger
         $(document).ready(function() {
             // Hide/show animation hamburger function
             $('.navbar-toggler').on('click', function() {
                 // Take this line to first hamburger animations
                 $('.animated-hamburger').toggleClass('open');
             });
             $('.menu li a').on('click', function() {
                 // Take this line to first hamburger animations
                 $('.animated-hamburger').toggleClass('open');
                 $('.navbar-toggler').toggleClass('collapsed');
                 $('.navbar-collapse').toggleClass('show');
                 
             });
         });
         
         
        //  window.onload = function() {
        //     setTimeout (  () {
        //      scrollTo(0,0);
        //     }, 100); //100ms for example
        //    }
         // 
         // remove scrollify from mobile |||||||
         // 
         if (!(/Android|webOS|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|ipad/i.test(navigator.userAgent))) { //if not these devices(userAgents)
             $(function() {
                 $.scrollify({
                     section: ".panel",
                     scrollbars: true,
                     interstitialSection: ".navbar, .footer",
                     setHeights: false,
                     updateHash: false,
                     scrollSpeed: 1100,
                     offset : 0,
                     scrollbars: true,
                     standardScrollElements: "",
                     setHeights: true,
                     overflowScroll: true,
                     updateHash: true,
                    touchScroll:true,
                     before:function() {},
                     after:function() {},
                    afterResize:function() {},
                    afterRender:function() {},
                     before: function(i, panels) {
                         var ref = panels[i].attr("data-section-name");
                         $(".pagination .active").removeClass("active");
                         $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
                     }
                 });
             });
         
         }
         
         
         
         // 
         // browser check ||||||||
         // 
         var BrowserDetect = {
             init: function() {
                 this.browser = this.searchString(this.dataBrowser) || "Other";
                 this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
             },
             searchString: function(data) {
                 for (var i = 0; i < data.length; i++) {
                     var dataString = data[i].string;
                     this.versionSearchString = data[i].subString;
         
                     if (dataString.indexOf(data[i].subString) !== -1) {
                         return data[i].identity;
                     }
                 }
             },
             searchVersion: function(dataString) {
                 var index = dataString.indexOf(this.versionSearchString);
                 if (index === -1) {
                     return;
                 }
         
                 var rv = dataString.indexOf("rv:");
                 if (this.versionSearchString === "Trident" && rv !== -1) {
                     return parseFloat(dataString.substring(rv + 3));
                 } else {
                     return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
                 }
             },
         
             dataBrowser: [{
                     string: navigator.userAgent,
                     subString: "Edge",
                     identity: "MS Edge"
                 }, {
                     string: navigator.userAgent,
                     subString: "MSIE",
                     identity: "Explorer"
                 }, {
                     string: navigator.userAgent,
                     subString: "Trident",
                     identity: "Explorer"
                 }, {
                     string: navigator.userAgent,
                     subString: "Firefox",
                     identity: "Firefox"
                 }, {
                     string: navigator.userAgent,
                     subString: "Opera",
                     identity: "Opera"
                 }, {
                     string: navigator.userAgent,
                     subString: "OPR",
                     identity: "Opera"
                 },
         
                 {
                     string: navigator.userAgent,
                     subString: "Chrome",
                     identity: "Chrome"
                 }, {
                     string: navigator.userAgent,
                     subString: "Safari",
                     identity: "Safari"
                 }
             ]
         };
         
         
         BrowserDetect.init();
         
         // logo and animation burger color change after scroll
         $(function () { 
         $(window).scroll(function () {
         if ($(this).scrollTop() > 600) { 
             $('nav .main-logo').attr('src','assets/images/logo.svg');  
             $('.animated-hamburger span').css("background" , "#153a54");
         }
         if ($(this).scrollTop() < 600) { 
             $('nav .main-logo').attr('src','assets/images/logo-w.svg');  
             $('.animated-hamburger span').css("background" , "#fff");
         }
         })
         });

       
        
        $('#contactModal').on('hidden.bs.modal', function () {
          $('body').css("overflow", "auto");
          $('nav .main-logo').attr('src','assets/images/logo-w.svg');
          $('.animated-hamburger span').css("background" , "#fff");  
      });
  
      

      $(".video-360").click(function(){
        $(".player_wrapper1").css("visibility","visible");
        $(".player_wrapper1").css("opacity","1");
      });
      $(".video-cancel").click(function(){
        $(".player_wrapper1").css("visibility","hidden");
        $(".player_wrapper1").css("opacity","0");
      });
       
     
 


        
         $(function (){
            var flag=true;
            $(document).on('click', '.navbar-toggler', function() { 
               console.log($(this).attr('aria-expanded'))
               if($(this).attr('aria-expanded')=='true'){
                  $('body').css("overflow", "hidden");
                  $('.animated-hamburger span').css("background-color" , "#153a54");
                  $('nav .main-logo').attr('src','assets/images/logo.svg');
                  console.log("scrolling")
               }
               else{
                console.log("enabling over flow");
               $('body').css("overflow", "auto");
               $('nav .main-logo').attr('src','assets/images/logo-w.svg');  
               $('.animated-hamburger span').css("background" , "#fff");
               console.log("not scrolling")
               }
            }); 
         });
         

         
         
         var bv = BrowserDetect.browser;
         if (bv == "Chrome") {
             $("body").addClass("chrome");
         } else if (bv == "MS Edge") {
             $("body").addClass("edge");
         } else if (bv == "Explorer") {
             $("body").addClass("ie");
         } else if (bv == "Firefox") {
             $("body").addClass("Firefox");
         }
         
         