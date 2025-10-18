/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

/* window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});  */

//имхо это теорема эскобара - при безальтернативном выборе из двух равных сущностей, обе будут из себя являть исключительно ерунду. А верхнее еще и сложнее, т.к. ее никто не разбирал.

document.addEventListener('DOMContentLoaded', function () {
    const navInit = () => {
        //изменение цвета меню
        const navbarCollapsible = document.body.querySelector('#mainNav');
        //if (navbarCollapsible) console.log('cool');
        if (window.scrollY == 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }



        const links = document.querySelectorAll('.nav-link') //ищем все навигационные ссылки
        const sections = document.querySelectorAll('section')//ищем все сецкии 

        sections.forEach(section => {
            if (window.scrollY >= (section.offsetTop - 100)) {
                //отладка
                //console.log(window.scrollY + " >= " + section.offsetTop + " " + section.id);
                //для каждой ссылки
                links.forEach(link => {
                    //удаляем активный класс( дабы обнулялось значение при переходе)
                    link.classList.remove('active')
                    //проверяем, если href ссылки без # == id секции
                    if (link.href.split('#').pop() == section.id) {
                        link.classList.add('active') //добавляем ссылке активный класс
                    }
                })
            }
        })
    }

    function offset(el){
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = Window.scrollY || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
    }


    //начало блока для анимации
    const animItems = document.querySelectorAll('.animate');
    if (animItems.length > 0) {
        //console.log('Here!');
        function onEntry() {
            animItems.forEach(item => {
                const itemHeight = item.offsetHeight; // высота анимирующего объекта
                const itemOffset = offset(item).top;//позиция объекта от верхнего края
                const startPos = 2; //параметр регулирования старта анимации
                //не window.innerWidth/innerHeight
                const animPoint = document.documentElement.clientHeight - itemHeight / startPos;

                if (itemHeight > document.documentElement.clientHeight) {
                    const animPoint = document.documentElement.clientHeight - document.documentElement.clientHeight / startPos;
                }
                if ((scrollY > itemOffset - animPoint) && scrollY < itemOffset + itemHeight) {
                    item.classList.add('show');
                } else {
                    if (!item.classList.contains('no-hide')) {
                        item.classList.remove('show');
                    }
                }

            })
        }
    }
    //конец блока анимации
    //onEntry();
    navInit();
    window.addEventListener('scroll', () => {
        navInit(); // запуск функции при скролле страницы
        onEntry();

    })
    window.addEventListener('resize', () => {
        navInit(); //запуск функции при ресайзе страницы
    })
})
//ДА ПОМОЖЕТ ВАМ БОГ...