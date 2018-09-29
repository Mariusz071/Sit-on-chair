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
    console.log(prevButton);
    const nextButton = document.querySelector('.arrow-right');
    console.log(nextButton);
    const sliderElements = document.querySelectorAll('.slider > li');
    console.log(sliderElements);
    let imgIndex = 0;

    sliderElements[imgIndex].classList.add('visible');
    const visibleElement = document.querySelector('li.visible');
    visibleElement.style.opacity = "1";


    console.log(visibleElement);


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
});



//     li[imgIndex].classList.add('visible');
//
//
//     nextButton.addEventListener('click', function () {
//         li[imgIndex].classList.remove('visible');
//         if ( imgIndex == 5) {
//             imgIndex = 0;
//         } else {
//             imgIndex++;
//         }
//         li[imgIndex].classList.add('visible');
//     });
//
//
//     prevButton.addEventListener('click', function () {
//         li[imgIndex].classList.remove('visible');
//         if ( imgIndex == 0) {
//             imgIndex = 5;
//         } else {
//             imgIndex--;
//         }
//         li[imgIndex].classList.add('visible');
//     })
//
// })