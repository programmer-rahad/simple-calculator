! function () {
    "use strict";

    var buttons = document.querySelectorAll('.btn');
    var display = document.querySelector('.d-output');
    var equal = document.querySelector('.equal');
    var clear = document.querySelector('.clear');
    var back = document.querySelector('.back');
    var operators = document.querySelectorAll('.operator');
    var condition;

    function ifEmpty() {
        if (display.innerHTML === '') {
            return false;
        }
    }

    buttons.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            if (condition) {
                display.innerHTML = '';
                condition = false;
            }
            if (this.classList.contains('operator') && display.innerHTML === '') {
                return;
            }

            display.innerHTML += this.innerHTML;
        });
    });
    equal.addEventListener('click', function () {
        if (display.innerHTML === '') {
            return;
        }
        display.innerHTML = eval(display.innerHTML);
        condition = true;
    });
    clear.addEventListener('click', function () {
        display.innerHTML = '';
    });
    back.addEventListener('click', function () {
        if (condition) {
            display.innerHTML = '';
            condition = false;
        }
        display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
    });
    document.body.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            equal.click();
        }
        if (e.key === 'Backspace') {
            back.click();
        }
        if (e.key === 'Delete') {
            clear.click();
        }
        if (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/' || e.key == '9' || e.key == '8' ||
            e.key == '7' || e.key == '6' || e.key == '5' || e.key == '4' || e.key == '3' || e.key == '2' ||
            e.key == '1' || e.key == '0' || e.key == '.') {
            if ((e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/') && display.innerHTML == '') {
                return;
            }
            if (condition) {
                display.innerHTML = '';
                condition = false;
            }
            display.innerHTML += e.key;
        }
    });
}();