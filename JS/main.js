document.addEventListener('DOMContentLoaded', function () {

    //DROPDOWN MENU
    const li = document.querySelectorAll('.navbar > ul > li');
    li.forEach(function (el) {
        el.addEventListener('mouseover', function () {
            const dropdownMenu = el.querySelector('li > .dropdown-menu');
            dropdownMenu.style.transition = "all 1s ease 3s";
            if (dropdownMenu !== null) {
                dropdownMenu.style.display = "block";
                dropdownMenu.style.animation = ".2s fadeIn forwards";
            }
        });

        el.addEventListener('mouseout', function () {
            const dropdownMenu = el.querySelector('li >.dropdown-menu');
            if (dropdownMenu !== null) {
                dropdownMenu.style.display = "none";
            }
        });
    });

    //SLIDER
    const prevButton = document.querySelector('.arrow-left');
    const nextButton = document.querySelector('.arrow-right');
    const sliderElements = document.querySelectorAll('.slider > li');
    let imgIndex = 0;

    sliderElements[imgIndex].classList.add('visible');
    const visibleElement = document.querySelector('.visible');

    nextButton.addEventListener('click', function () {
        sliderElements[imgIndex].classList.remove('visible');

        if (imgIndex == 1) {
            imgIndex = 0;
        } else {
            imgIndex++;
        }
        sliderElements[imgIndex].classList.add('visible');

        sliderElements.forEach(function (el) {
            el.style.animation = "1s imgFadeIn";
        })
    });

    prevButton.addEventListener('click', function () {
        sliderElements[imgIndex].classList.remove('visible');
        if (imgIndex == 0) {
            imgIndex = 1;
        } else {
            imgIndex--;
        }
        sliderElements[imgIndex].classList.add('visible');
    });


    /*SLIDER-CAROUSEL*/
    visibleElement.style.animation = ".5s fadeIn";
    setInterval(function () {
        sliderElements[imgIndex].classList.remove('visible');
        if (imgIndex == 1) {
            imgIndex = 0;
        } else {
            imgIndex++;
        }
        sliderElements[imgIndex].classList.add('visible')
        sliderElements.forEach(function (el) {
            el.style.animation = ".5s fadeIn";
        });
    }, 6000);


    /* FORM FUNCTIONS*/
    const formDropdown = document.querySelectorAll('.drop_down_list');

    const firstDropdown = formDropdown[0];
    const secondDropdown = formDropdown[1];
    const thirdDropdown = formDropdown[2];

    const dropButtons = document.querySelectorAll('.list_arrow');
    const dropdownList = document.querySelectorAll('.list_panel');
    const calcTitle = document.querySelector('h4.title');
    const chairPrice = document.querySelector('h4.value');
    const chairColor = document.querySelector('.color');
    const colorPrice = document.querySelector('span.color.value');
    const chairMaterial = document.querySelector('.pattern');
    const materialPrice = document.querySelector('span.pattern.value');

    const transportCheckbox = document.querySelector('#checkbox-transport');
    const transportPrice = document.querySelector('span.transport.value');

    const totalSum = document.querySelector('.sum strong');
    console.log(totalSum);

    var firstItems = firstDropdown.querySelectorAll('li');
    firstItems.forEach(function (el) {
        dropButtons[0].addEventListener('click', function () {
            dropdownList[0].style.display = "block";

            el.addEventListener('click', function () {
                const choosenItem = dropdownList[0].parentElement.firstElementChild;
                choosenItem.innerText = el.innerHTML;
                choosenItem.style.color = "#C2C2C2";
                if (choosenItem.innerText = el.innerHTML) {
                    dropdownList[0].style.display = "none";
                }
                calcTitle.innerText = choosenItem.innerText;
                chairPrice.innerHTML = el.dataset.price;
                totalSum.innerText = parseInt(chairPrice.textContent);
            });
        })
    });

    const secondItems = secondDropdown.querySelectorAll('li');
    secondItems.forEach(function (el) {
        dropButtons[1].addEventListener('click', function () {
            dropdownList[1].style.display = "block";

            el.addEventListener('click', function () {
                const choosenItem = dropdownList[1].parentElement.firstElementChild;
                choosenItem.innerText = el.innerHTML;
                choosenItem.style.color = "#C2C2C2";
                if (choosenItem.innerText = el.innerHTML) {
                    dropdownList[1].style.display = "none";
                }
                chairColor.innerText = el.innerText;
                colorPrice.innerHTML = "Gratis";
            })
        });
    });

    var thirdItems = thirdDropdown.querySelectorAll('li');
    thirdItems.forEach(function (el) {
        dropButtons[2].addEventListener('click', function () {
            dropdownList[2].style.display = "block";
            el.addEventListener('click', function () {
                const choosenItem = dropdownList[2].parentElement.firstElementChild;
                choosenItem.innerText = el.innerHTML;
                choosenItem.style.color = "#C2C2C2";
                if (choosenItem.innerText = el.innerHTML) {
                    dropdownList[2].style.display = "none";
                }
                chairMaterial.innerText = choosenItem.innerText;
                materialPrice.innerText = el.dataset.priceMaterial;
                totalSum.innerText = parseInt(chairPrice.textContent) + parseInt(materialPrice.textContent);
            })
        });
        parseInt(materialPrice.textContent);
    });
    transportCheckbox.addEventListener('change', function () {
        if (transportCheckbox.checked) {
            transportPrice.innerText = transportCheckbox.dataset.transportPrice;
            totalSum.innerText = parseInt(chairPrice.textContent) + parseInt(materialPrice.textContent) + parseInt(transportPrice.innerText);
        } else {
            transportPrice.innerText = 0;
            totalSum.innerText = parseInt(chairPrice.textContent) + parseInt(materialPrice.textContent) - parseInt(transportPrice.innerText);
        }
    });
});
