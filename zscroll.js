var Z = Z || {};

Z.scroll = {
    init: function () {
        var lastPositionY = 0;
        var lastPositionX = 0;
        window.onscroll = function () {
            var currentPositionY = window.pageYOffset || document.documentElement.scrollTop;
            var currentPositionX = window.pageXOffset || document.documentElement.scrollLeft;

            if (currentPositionY < lastPositionY) {
                console.log('scrolling top');
            }

            if (currentPositionY > lastPositionY) {
                console.log('scrolling bottom');
            }

            if (currentPositionX < lastPositionX) {
                console.log('scrolling left');
            }

            if (currentPositionX > lastPositionX) {
                console.log('scrolling right');
            }

            lastPositionY = currentPositionY;
            lastPositionX = currentPositionX;
        };
    }
};
