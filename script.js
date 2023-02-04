let navbarDiv = document.querySelector('.navbar')

        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
                navbarDiv.classList.add('navbar-cng');
            }
            else {
                navbarDiv.classList.remove('navbar-cng')
            }
        })


let closeBtn = document.querySelector('#navbar-close-btn');
let openMenu = document.querySelector("#navbar-show-btn");
let boxMenu = document.querySelector(".box__menu");

openMenu.addEventListener('click', () => {
    boxMenu.style.display = "flex";
})
closeBtn.addEventListener( 'click', () => {
    boxMenu.style.display = "none";
})



        var counter = 1;
        setInterval(function() {
            document.getElementById('radio'+ counter).checked = true;
            counter++;
            if (counter > 4) {
                counter = 1;
            }
        } , 5000)