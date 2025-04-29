
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

        if (hlistdom.scrollLeft == 0) {
            // very left side
            // console.log("very left");
            if (!hasClass(carousel1leftbtn, "carousel1_left_button_hide")) {
                addClass(carousel1leftbtn, "carousel1_left_button_hide")

                // stop timer set by click
                // if (hlistdom.timer != null || undefined) {
                //     // clearInterval(hlistdom.timer);
                //   }
            } 
        } else if (hlistdom.scrollLeft + hlistdom.clientWidth >= hlistdom.scrollWidth) {
            // very right side
            // console.log("very right");
            if (!hasClass(carousel1rightbtn, "carousel1_right_button_hide")) {
                addClass(carousel1rightbtn, "carousel1_right_button_hide")

                // stop timer set by click
                // if (hlistdom.timer != null || undefined) {
                //     // clearInterval(hlistdom.timer);
                //   }
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

        let target = parseInt(hlistdom.scrollLeft - 212+24);
        // target doesn't exceed the very left
        if (target <= 0) {
            target = 0;
        }
        move(hlistdom, "scrollLeft", target, 10);

        // hlistdom.scrollLeft -= 212+24;

        
    })

    carousel1rightbtn.addEventListener('click', function(event) {
        // console.log("right")

        let target = parseInt(hlistdom.scrollLeft + 212+24);
        // target doesn't exceed the very right
        if (target >= (hlistdom.scrollWidth - hlistdom.clientWidth)) {
            target = hlistdom.scrollWidth - hlistdom.clientWidth;
        }
        move(hlistdom, "scrollLeft", target, 10);
    })


    let carousel2hlistdom = document.querySelectorAll(".carousel2 .hlist")[0];
    let carousel2leftbtn = document.getElementsByClassName("carouselbutton_leftadjust")[0]
    let carousel2rightbtn = document.getElementsByClassName("carouselbutton_rightadjust")[0]
    let previousScrollLeft = carousel2hlistdom.scrollLeft;

    carousel2leftbtn.addEventListener('click', function(event) {
        carousel2hlistdom.scrollBy({
            top: 0,
            left: -3*(370+24),
            behavior: "smooth"
        })
    })

    carousel2rightbtn.addEventListener('click', function(event) {
        carousel2hlistdom.scrollBy({
            top: 0,
            left: 3*(370+24),
            behavior: "smooth"
        })
    })

    // carousel2hlistdom.addEventListener('wheel', function(event) {
    //     event.preventDefault();
        
    //     let currentScrollLeft = carousel2hlistdom.scrollLeft;
    //     let distance = 3 * (370 + 24);

    //     carousel2hlistdom.scrollBy({
    //         top: 0,
    //         left: -distance,
    //         behavior: "smooth"
    //     })

    //     // if(currentScrollLeft > previousScrollLeft) {
    //     if(event.deltaX > 0) {
    //         console.log("scroll right1");
            
    //     } else if(event.deltaX < 0) {
    //         console.log("scroll left1");

    //         // target = parseInt(currentScrollLeft - distance);

    //         // carousel2hlistdom.scrollBy({
    //         //     top: 0,
    //         //     left: -distance,
    //         //     behavior: "smooth"
    //         // })
    //     }

    // })

    let roundnavs = Array.from(document.getElementsByClassName("round"));
    

    carousel2hlistdom.addEventListener('scrollend', function(event) {
        let currentScrollLeft = carousel2hlistdom.scrollLeft;

        let activeroundnav = document.querySelectorAll(".roundnav .active")[0];
        let activeindex = roundnavs.indexOf(activeroundnav)

        if(currentScrollLeft > previousScrollLeft) {
            console.log("scroll right2");
            let newindex = ((activeindex + 1) < roundnavs.length-1) ? (activeindex + 1) : (roundnavs.length - 1);
            changeActiveRoundnav(activeroundnav, newindex);

        } else if(currentScrollLeft < previousScrollLeft) {
            console.log("scroll left2");
            let newindex = ((activeindex - 1) > 0) ? (activeindex - 1) : 0;
            changeActiveRoundnav(activeroundnav, newindex);
        }

        previousScrollLeft = currentScrollLeft;
    })

    function changeActiveRoundnav (activeroundnav, newindex) {
        removeClass(activeroundnav, "active");
        let newactiveroundnav = roundnavs[newindex];
        addClass(newactiveroundnav, "active");
    }

}