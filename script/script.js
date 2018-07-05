
$(document).ready(function() {
  $.getJSON( "script/gallery.json", function( data ) {
  
    // invoking previous slide function
  $("#myModal .slideshow-container .prev").click(function(){
    slideSwitch('prev');
  });
  
  // invoking next slide function
  $("#myModal .slideshow-container .next").click(function(){
    slideSwitch('next');
  });

  //close modal on click of close button
  $("#myModal .close").click(function(){
    $("#myModal").removeClass("block");
    $("#myModal .slideshow-container .slide-images").empty();
    $("#myModal .related").empty();
  });

  // exiting from modal while clicking outside the modal
   window.onclick = function(event) {
    if (event.target == $('#myModal')[0]) {
        $("#myModal").removeClass("block");
        $("#myModal .slideshow-container .slide-images").empty();
        $("#myModal .related").empty();
    }
  };

  // function for switching slide
  function slideSwitch(slidepos){
    var active = $('#myModal .my-slides.fade.block');
    var slides = $('#myModal .my-slides'); 
    if (slidepos == 'next') {
      var next = active.data('attr') === "last" ? slides.first() : active.next();
      next.addClass('block');            
    }
    else{
      var prev = active.data('attr') === "first" ? slides.last() : active.prev(); 
      prev.addClass('block');
    }
    active.removeClass('block');
  }
    // appending gallery items
    $.each(data.items, function(i, f) {
      $('.gallery-list').append(
      "<li class='gallery-item cp' id='" +(i + 1) +"'><a><img  src='" +f.url +" '</a></li>"
      );
    });   

    // appending related items on the click of a gallery item
    $(".gallery-item").on("click", function() {
        $(".modal").addClass("block");
        var pos = $(this).attr("id");
        var index = data.items[pos - 1];
        // appending the modal content
        $("#myModal .slideshow-container .slide-images").append(
          " <img class='my-slides fade block' data-attr='first' src='" +index.related[0].url1 +"' style='width:100%'>" +
          " <img class='my-slides fade ' src='" +index.related[0].url2 +"' style='width:100%'>" +
          " <img class='my-slides fade ' data-attr='last' src='" +index.related[0].url3 +"' style='width:100%'>"
        );
        $("#myModal .related").append(
          "<img src='" +index.related[0].url2 +"'>"+
          "<img src='" +index.related[0].url3 +"'>"+
          "<img src='" +index.related[0].url4 +"'>"
        );    
      });
  });
});

