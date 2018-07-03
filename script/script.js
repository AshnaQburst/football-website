var data = {
  items: [
    {
      url: "images/1.jpeg",
      related: [
        {
          url1: "images/1.jpeg",
          url2: "images/2.jpeg",
          url3: "images/3.jpeg",
          url4: "images/4.jpeg",
          url5: "images/5.jpeg",
          url6: "images/6.jpeg",
          url7: "images/7.jpeg"
        }
      ]
    },
    {
      url: "images/2.jpeg",
      related: [
        {
          url1: "images/2.jpeg",
          url2: "images/1.jpeg",
          url3: "images/7.jpeg",
          url4: "images/6.jpeg",
          url5: "images/4.jpeg",
          url6: "images/5.jpeg",
          url7: "images/2.jpeg"
        }
      ]
    },
    {
      url: "images/3.jpeg",
      related: [
        {
          url1: "images/3.jpeg",
          url2: "images/3.jpeg",
          url3: "images/7.jpeg",
          url4: "images/6.jpeg",
          url5: "images/4.jpeg",
          url6: "images/5.jpeg",
          url7: "images/2.jpeg"
        }
      ]
    },
    {
      url: "images/4.jpeg",
      related: [
        {
          url1: "images/4.jpeg",
          url2: "images/1.jpeg",
          url3: "images/7.jpeg",
          url4: "images/6.jpeg",
          url5: "images/4.jpeg",
          url6: "images/5.jpeg",
          url7: "images/2.jpeg"
        }
      ]
    },
    {
      url: "images/5.jpeg",
      related: [
        {
          url1: "images/5.jpeg",
          url2: "images/1.jpeg",
          url3: "images/7.jpeg",
          url4: "images/6.jpeg",
          url5: "images/4.jpeg",
          url6: "images/5.jpeg",
          url7: "images/2.jpeg"
        }
      ]
    },
    {
      url: "images/6.jpeg",
      related: [
        {
          url1: "images/6.jpeg",
          url2: "images/1.jpeg",
          url3: "images/7.jpeg",
          url4: "images/6.jpeg",
          url5: "images/4.jpeg",
          url6: "images/5.jpeg",
          url7: "images/2.jpeg"
        }
      ]
    },
    {
      url: "images/7.jpeg",
      related: [
        {
          url1: "images/7.jpeg",
          url2: "images/1.jpeg",
          url3: "images/7.jpeg",
          url4: "images/6.jpeg",
          url5: "images/4.jpeg",
          url6: "images/5.jpeg",
          url7: "images/2.jpeg"
        }
      ]
    },
    {
      url: "images/8.jpeg",
      related: [
        {
          url1: "images/8.jpeg",
          url2: "images/1.jpeg",
          url3: "images/7.jpeg",
          url4: "images/6.jpeg",
          url5: "images/4.jpeg",
          url6: "images/5.jpeg",
          url7: "images/2.jpeg"
        }
      ]
    },
    {
      url: "images/9.jpeg",
      related: [
        {
          url1: "images/3.jpeg",
          url2: "images/1.jpeg",
          url3: "images/7.jpeg",
          url4: "images/6.jpeg",
          url5: "images/4.jpeg",
          url6: "images/5.jpeg",
          url7: "images/2.jpeg"
        }
      ]
    },
    {
      url: "images/10.jpeg",
      related: [
        {
          url1: "images/3.jpeg",
          url2: "images/1.jpeg",
          url3: "images/7.jpeg",
          url4: "images/6.jpeg",
          url5: "images/4.jpeg",
          url6: "images/5.jpeg",
          url7: "images/2.jpeg"
        }
      ]
    },
    {
      url: "images/1.jpeg"
    },
    {
      url: "images/2.jpeg"
    },
    {
      url: "images/3.jpeg"
    },
    {
      url: "images/4.jpeg"
    },
    {
      url: "images/5.jpeg"
    },
    {
      url: "images/6.jpeg"
    },
    {
      url: "images/7.jpeg"
    },
    {
      url: "images/8.jpeg"
    },
    {
      url: "images/9.jpeg"
    },
    {
      url: "images/10.jpeg"
    },
    {
      url: "images/1.jpeg"
    },
    {
      url: "images/2.jpeg"
    },
    {
      url: "images/3.jpeg"
    },
    {
      url: "images/4.jpeg"
    },
    {
      url: "images/5.jpeg"
    },
    {
      url: "images/6.jpeg"
    }
  ]
};

$(document).ready(function() {
  // populate the gallery item
  $.each(data.items, function(i, f) {
    $("ul").append(
      "<li class='gallery-item cp' id='" +
        (i + 1) +
        "'><a><img  src='" +
        f.url +
        " '</a></li>"
    );
  });

  var modal = document.getElementById("myModal");

  $(".gallery-item").on("click", function() {
    modal.style.display = "block";
    var pos = $(this).attr("id");
    var index = data.items[pos - 1];

    $(".modal-content").append(
      "<div class='col-50 main'> <div class='slideshow-container'> <img class='mySlides fade' src='" +
        index.related[0].url1 +
        "' style='width:100%'>" +
        " <img class='mySlides fade' src='" +
        index.related[0].url2 +
        "' style='width:100%'>" +
        "  <img class='mySlides fade' src='" +
        index.related[0].url3 +
        "' style='width:100%'> <a class='prev' onclick='" +
        plusDivs(-1) +
        "'> &#10094; </a>  <a class='next' onclick='" +
        plusDivs(+1) +
        "'>&#10095;</a> </div></div>" +
        "<div class='col-50 related'><img src='" +
        index.related[0].url2 +
        "'><img src='" +
        index.related[0].url3 +
        "'><img src='" +
        index.related[0].url4 +
        "'></div>"
    );
  });

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      $(".modal-content").empty();
    }
  };
});
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  console.log(x);
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
