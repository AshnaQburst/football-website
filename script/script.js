var data = {
    "items": [
        {
            "url": "images/1.jpeg",
        }, 
        {
            "url": "images/2.jpeg",
        }, 
        {
            "url": "images/3.jpeg",
        }, 
        {
            "url": "images/4.jpeg",
        },
        {
            "url": "images/5.jpeg",
        },
        {
            "url": "images/6.jpeg",
        },
        {
            "url": "images/7.jpeg",
        },
        {
            "url": "images/8.jpeg",
        },
        {
            "url": "images/9.jpeg",
        },
        {
            "url": "images/10.jpeg",
        },
        {
            "url": "images/1.jpeg",
        },
        {
            "url": "images/2.jpeg",
        },
        {
            "url": "images/3.jpeg",
        },
        {
            "url": "images/4.jpeg",
        },
        {
            "url": "images/5.jpeg",
        },
        {
            "url": "images/6.jpeg",
        },
        {
            "url": "images/7.jpeg",
        },
        {
            "url": "images/8.jpeg",
        },
        {
            "url": "images/9.jpeg",
        },
        {
            "url": "images/10.jpeg",
        },
        {
            "url": "images/1.jpeg",
        },
        {
            "url": "images/2.jpeg",
        },
        {
            "url": "images/3.jpeg",
        },
        {
            "url": "images/4.jpeg",
        },
        {
            "url": "images/5.jpeg",
        },
        {
            "url": "images/6.jpeg",
        }
    ]
};
$(document).ready(function(){
    $.each(data.items, function (i, f) {
        $("ul").append("<li><a href=''><img src='" + f.url +  " '</a></li>");
    });
});
