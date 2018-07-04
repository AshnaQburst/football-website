
$(document).ready(function() {


  $.getJSON( "script/gallery.json", function( data ) {
    $.each(data.items, function(i, f) {
      $("ul").append(
      "<li class='gallery-item cp' id='" +(i + 1) +"'><a><img  src='" +f.url +" '</a></li>"
      );
      });
      var modal = document.getElementById("myModal");
      $(".gallery-item").on("click", function() {
        $(".modal").addClass("block");
        var pos = $(this).attr("id");
        var index = data.items[pos - 1];
        function slideSwitch(slidepos){
          var $active = $('.my-slides.fade.block');
          var $slides = $('.my-slides'); 
          if (slidepos == 'next') {
            var $next = $active.data('attr') === "last" ? $slides.first() : $active.next();
            $next.addClass('block');            
          }
          else{
            var $prev = $active.data('attr') === "first" ? $slides.last() : $active.prev(); 
            $prev.addClass('block');
          }
          $active.removeClass('block');
        }
        // appending the modal content
        $(".modal-content").append(
          "<i class='fa fa-close close cp'></i>"+
          "<div class='col-50 main'>"+
          " <div class='slideshow-container'>"+
          " <img class='my-slides fade block' data-attr='first' src='" +index.related[0].url1 +"' style='width:100%'>" +
          " <img class='my-slides fade ' src='" +index.related[0].url2 +"' style='width:100%'>" +
          " <img class='my-slides fade ' data-attr='last' src='" +index.related[0].url3 +"' style='width:100%'>"+
          " <a class='prev'> &#10094; </a>"+
          " <a class='next'>&#10095;</a>"+
          "</div></div>" +
          "<div class='col-50 related'>"+
          "<img src='" +index.related[0].url2 +"'>"+
          "<img src='" +index.related[0].url3 +"'>"+
          "<img src='" +index.related[0].url4 +"'>"+
          "</div>"
        );
        // invoking previous slide function
        $(".prev").click(function(){
          slideSwitch('prev');
        });
        // invoking next slide function
        $(".next").click(function(){
          slideSwitch('next');
        });
        $(".close").click(function(){
          $(".modal").removeClass("block");
          $(".modal-content").empty();
        });
    
      });
      // exiting from modal while clicking outside the modal
      window.onclick = function(event) {
        if (event.target == modal) {
          $(".modal").removeClass("block");
          $(".modal-content").empty();
        }
      };
  });
});

