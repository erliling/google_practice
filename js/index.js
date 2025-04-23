
window.onload = function (event) {
    let navdom = document.getElementsByClassName("nav")[0];

    document.onmousewheel = function (event) {
        if (event.wheelDelta < 0 || event.detail > 0) {
            if (!hasClass(navdom, 'fixednav')) {
                addClass(navdom, "fixednav");
            }
        } else {
            const scrollTop = window.pageYOffset 
            || document.documentElement.scrollTop;
            // let topvalue = parseInt(getStyle(navdom, "top"));
            if (hasClass(navdom, 'fixednav') && (scrollTop == 0)) {
                removeClass(navdom, "fixednav");
            }
        }

    }

    let hlistdom = document.getElementsByClassName("hlist_adjust")[0];
    let carousel1leftbtn = document.getElementsByClassName("left_button_position")[0]
    let carousel1rightbtn = document.getElementsByClassName("right_button_position")[0]
    hlistdom.addEventListener('scroll', function(event) {
        
        // if (hlistdom.timer != null || undefined) {
        //     clearInterval(hlistdom.timer);
        //   }

        if (hlistdom.scrollLeft == 0) {
            // very left side
            // console.log("very left");
            if (!hasClass(carousel1leftbtn, "carousel1_left_button_hide")) {
                addClass(carousel1leftbtn, "carousel1_left_button_hide")
            } 
        } else if (hlistdom.scrollLeft + hlistdom.clientWidth >= hlistdom.scrollWidth) {
            // very right side
            // console.log("very right");
            if (!hasClass(carousel1rightbtn, "carousel1_right_button_hide")) {
                addClass(carousel1rightbtn, "carousel1_right_button_hide")
            }
        } else {
            // console.log("middle");
            if (hasClass(carousel1leftbtn, "carousel1_left_button_hide")) {
                removeClass(carousel1leftbtn, "carousel1_left_button_hide")
            } 
            if (hasClass(carousel1rightbtn, "carousel1_right_button_hide")) {
                removeClass(carousel1rightbtn, "carousel1_right_button_hide")
            }
        }
    })

    carousel1leftbtn.addEventListener('click', function(event) {
        // console.log("left")

        let target = hlistdom.scrollLeft - 212+24;
        move(hlistdom, "scrollLeft", target, 10);

        // hlistdom.scrollLeft -= 212+24;

        
    })

    carousel1rightbtn.addEventListener('click', function(event) {
        // console.log("right")

        // hlistdom.scrollLeft += 212+24;

        let target = hlistdom.scrollLeft + 212+24;
        move(hlistdom, "scrollLeft", target, 10);
    })

}