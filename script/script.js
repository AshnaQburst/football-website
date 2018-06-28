var data = {
    "items": [
        {
            "url": "../images/1.jpeg",
        }, 
        {
            "url": "../images/2.jpeg",
        }, 
        {
            "url": "../images/3.jpeg",
        }, 
        {
            "url": "../images/4.jpeg",
        },
        {
            "url": "../images/5.jpeg",
        },
        {
            "url": "../images/6.jpeg",
        }
    ]
};
$.each(data.items, function (i, f) {
    $("ul").append("<li><img src='" + f.url +  " </li>");
});