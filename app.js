var span = document.querySelectorAll('span');

span.addEventListener('touchmove', function(event) {
    event.preventDefault();
    
    alert('touched')
    // var borderLeft = 0,
    // borderRight = 300 - 70,
    // borderTop = 0,
    // borderBottom = 300 - 70;

    // // wylaczamy scrollowanie itp.
    // event.preventDefault();

    // // tylko dla pojedynczego palca
    // if (event.targetTouches.length == 1) {
    //     var touch = event.targetTouches[0];

    //     // ustawiamy odpowiednie style
    //     if (touch.pageX > borderLeft && touch.pageX < borderRight) { this.style.left = touch.pageX + 'px'; } if (touch.pageY > borderTop && touch.pageY < borderBottom) {
    //         this.style.top = touch.pageY + 'px';
    //     }
    // }
}, false);