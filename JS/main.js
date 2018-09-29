document.addEventListener('DOMContentLoaded', function () {

    //DROPDOWN MENU
    const li = document.querySelectorAll('.navbar > ul > li');
    li.forEach( function (el) {
         el.addEventListener('mouseover', function () {
             const dropdownMenu = el.querySelector('li > .dropdown-menu');
             if(dropdownMenu !== null) {
                 dropdownMenu.style.display = "block";
             }
         });

        el.addEventListener('mouseout', function () {
            const dropdownMenu = el.querySelector('li >.dropdown-menu');
            if(dropdownMenu !== null) {
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
    const visibleElement = document.querySelector('li.visible');
    visibleElement.style.opacity = "1";

    nextButton.addEventListener('click', function () {
        sliderElements[imgIndex].classList.remove('visible');

        if (imgIndex == 1) {
            imgIndex = 0;
        } else {
            imgIndex++;
        }
        sliderElements[imgIndex].classList.add('visible');
    })

    prevButton.addEventListener('click', function () {
        sliderElements[imgIndex].classList.remove('visible');
        if (imgIndex == 0) {
            imgIndex = 1;
        } else {
            imgIndex--;
        }
        sliderElements[imgIndex].classList.add('visible');
    })

    /* FORM FUNCTIONS*/

    const formDropdown = document.querySelectorAll('.drop_down_list');
    const firstDropdown = formDropdown[0];
    const secondDropdown = formDropdown[1];
    const thirdDropdown = formDropdown[2];
    //const dropButton = document.querySelectorAll('.list_arrow');
    //console.log(dropButton);

    formDropdown.forEach( function (el) {
        let dropButton = el.querySelector('.list_arrow');
        dropButton.addEventListener('click', function () {
            var dropList = dropButton.parentElement.querySelector('.list_panel');
            dropList.style.display = "block";
            const optionItem = dropList.querySelectorAll('li');
            optionItem.forEach( function (x) {
                x.addEventListener('click', function () {
                    const choosenItem = dropList.parentElement.firstElementChild;
                    choosenItem.innerText = x.innerHTML;
                    choosenItem.style.color = "#C2C2C2";
                    if (choosenItem.innerText = x.innerHTML) {
                        dropList.style.display = "none";
                    }
                })
            })
        })
    })
});


