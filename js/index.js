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
}