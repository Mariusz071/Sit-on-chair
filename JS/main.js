document.addEventListener('DOMContentLoaded', function () {
    var li = document.querySelectorAll('.navbar > ul > li');
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
});