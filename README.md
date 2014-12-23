# zscroll.js

`zscroll.js` is a lightweight JavaScript library for one single purpose - fire `zscroll` events with the scrolling direction once a page is scrolled

# Usage

You can get this script either from this repository or by running 

    bower install zscroll-js

To activate events with the scrolling directions in your page, simply include the library file - it will register all events automatically.

    <script src="zscroll.min.js"></script>

Then, start listening for the events:

    document.addEventListener('zscroll', function (e) {
        console.log(e.detail.direction);
    }, false);

The `e.detail` object contains the following attributes:

    {
        direction: string // One of those: up, down, left, right
    }
