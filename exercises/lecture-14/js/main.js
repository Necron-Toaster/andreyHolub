'use strict';

/* лекция 4 презент */
var btnPrimary = document.querySelector('.btn-primary');
btnPrimary.addEventListener('click', function () {
        const alertElement = document.querySelector('.alert');
        alertElement.classList.add('.alert-primary');
        alertElement.textContent = 'A simple primary alert—check it out!';
    }
);


var btnSecondary = document.querySelector('.btn-secondary');
btnSecondary.addEventListener('click', function () {
        const alertElement = document.querySelector('.alert');
        alertElement.classList.add('.alert-primary');
        alertElement.textContent = 'A simple secondary alert—check it out!';
    }
);


var btnSuccess = document.querySelector('.btn-success');
 btnSuccess.addEventListener('mouseover', function () {
        const alertElement = document.querySelector('.alert');
        alertElement.classList.add('.alert-success');
        alertElement.textContent = '';
    }
);


var btnDanger = document.querySelector('.btn-danger');
btnDanger.addEventListener('focus', function () {
        const alertElement = document.querySelector('.alert');
        alertElement.classList.add('.alert-danger');
        alertElement.textContent = 'A simple danger alert—check it out!';
    }
);

btnDanger.addEventListener('focusout', function () {
        const alertElement = document.querySelector('.alert');
        alertElement.classList.remove('.alert-danger');
        alertElement.textContent = '';
    }
);


var btnDark = document.querySelector('.btn-dark');
var btnLight = document.querySelector('.btn-light');

function toggleMode() {

    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        btnDark.style.display = 'none';
        btnLight.style.display = 'block';
    } else {

        btnDark.style.display = 'block';
        btnLight.style.display = 'none';
    }
}

btnDark.addEventListener('click', toggleMode);
btnLight.addEventListener('click', toggleMode);


var btnInfo = document.querySelector('.btn-info');
var alertElement = document.querySelector('.alert');

if (btnInfo) {
    btnInfo.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' || event.keyCode === 13) {
            event.preventDefault();

            alertElement.classList.add('.alert-info');

            alertElement.textContent = "A simple info alert—check it out!";
        }
    });
}


var cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    var cardTitle = cards[i].querySelector('.card-title');
    console.log(cardTitle.textContent);
}

var cards1 = document.querySelectorAll('.card');

for (let i = 0; i < cards1.length; i++) {
    var addToCartButton = cards1[i].querySelector('.add-to-cart');

    if (addToCartButton) {
        addToCartButton.addEventListener('click', function () {
            const cardTitle = cards1[i].querySelector('.card-title');
            console.log(cardTitle.textContent);
        });
    }
}