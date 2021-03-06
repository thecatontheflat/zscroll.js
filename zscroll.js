!function () {
    var Z = {};
    Z.scroll = {
        registerScrollEvents: function () {
            window.onscroll = this.getOnscrollClosure();
        },

        // TODO: isolate calculations as much as possible
        getOnscrollClosure: function () {
            var self = this;
            var lastPositionY = 0;
            var lastPositionX = 0;

            return function () {
                var currentPositionY = window.pageYOffset || document.documentElement.scrollTop;
                var currentPositionX = window.pageXOffset || document.documentElement.scrollLeft;

                if (currentPositionY < lastPositionY) {
                    self.fireEvent('zscroll', {direction: 'up'});
                }

                if (currentPositionY > lastPositionY) {
                    self.fireEvent('zscroll', {direction: 'down'});
                }

                if (currentPositionX < lastPositionX) {
                    self.fireEvent('zscroll', {direction: 'left'});
                }

                if (currentPositionX > lastPositionX) {
                    self.fireEvent('zscroll', {direction: 'right'});
                }

                lastPositionY = currentPositionY;
                lastPositionX = currentPositionX;
            }
        },

        fireEvent: function (name, data) {
            var event = new CustomEvent(name, {'detail': data});
            document.dispatchEvent(event);
        }
    };

    Z.scroll.registerScrollEvents();

}();
