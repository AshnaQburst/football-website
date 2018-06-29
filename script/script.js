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
  $.each(data.items, function(i, f) {
    $("ul").append(
      "<li class='gallery-item'><a href=''><img  src='" +
        f.url +
        "' id = '" +
        i +
        " '</a></li>"
    );
  });
});

$(".gallery-item").on("click", function() {
  console.log("Clicked.");
});

// modal popup
// var modal = document.getElementById("myModal");

// var btn = document.getElementsByClassName("gallery-item");

// var close = document.getElementsByClassName("close");

// btn.onclick = function() {
//   console.log("inside click fn");
//   modal.style.display = "block";
// };

// close.onclick = function() {
//   modal.style.display = "none";
// };

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
