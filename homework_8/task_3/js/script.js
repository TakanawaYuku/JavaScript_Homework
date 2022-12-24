function checkStatus(el, pTag, elTag, classStatus, colArr) {

    let wrap = document.querySelector(`.${pTag}`)
    let tag =  Array.from(wrap.querySelectorAll(`.${elTag}`))
    let atrTag = el.getAttribute(`${elTag}`)
    let colors = colArr

    if (el) {
        tag.forEach((item)=> item.classList.remove(`${classStatus}`))
        el.classList.add(`${classStatus}`)
    };
};


window.addEventListener('DOMContentLoaded', ()=> {

    let fontControl = document.querySelector('.book__control_font-size')
    let colorControl = document.querySelector('.book__control_color')
    let bgControl = document.querySelector('.book__control_background')
    let book = document.querySelector('.book')

    bgControl.addEventListener('click', (e)=> {

        e.preventDefault()
        let target = e.target
        let targetAtr = target.getAttribute('data-bg-color')


        if (targetAtr == 'black') {

            checkStatus(
                target,'book__control_background', 'color', 'color_active',
                ['book_bg-black', 'book_bg-gray', 'book_bg-white']
            )

            book.classList.add('book_bg-black')
            book.classList.remove('book_bg-gray', 'book_bg-white')
        }
        else if (targetAtr == 'gray') {

            checkStatus(
                target,'book__control_background', 'color', 'color_active',
                ['book_bg-black', 'book_bg-gray', 'book_bg-white']
            )

            book.classList.add('book_bg-gray')
            book.classList.remove('book_bg-black', 'book_bg-white')
        }
        else {

            checkStatus(
                target,'book__control_background', 'color', 'color_active',
                ['book_bg-black', 'book_bg-gray', 'book_bg-white']
            )

            book.classList.add('book_bg-white')
            book.classList.remove('book_bg-black','book_bg-gray')
        };
    });


    colorControl.addEventListener('click', (e)=> {

        e.preventDefault()
        let target = e.target
        let targetAtr = target.getAttribute('data-text-color')


        if (targetAtr == 'black') {

            checkStatus(
                target,'book__control_color', 'color', 'color_active',
                ['text_color_black', 'text_color_gray', 'text_color_whitesmoke']
            )

            book.classList.add('book_color-black')
            book.classList.remove('book_color-gray', 'book_color-whitesmoke')
        }
        else if (targetAtr == 'gray') {

            checkStatus(
                target,'book__control_color', 'color', 'color_active',
                ['text_color_black', 'text_color_gray', 'text_color_whitesmoke']
            )

            book.classList.add('book_color-gray')
            book.classList.remove('book_color-black', 'book_color-whitesmoke')
        }
        else {

            checkStatus(
                target,'book__control_color', 'color', 'color_active',
                ['text_color_black', 'text_color_gray', 'text_color_whitesmoke']
            )

            book.classList.add('book_color-whitesmoke')
            book.classList.remove('book_color-black','book_color-gray')
        };
    });

    fontControl.addEventListener('click', (e)=>{

        e.preventDefault()
        let target = e.target

        if (target && target.classList.contains('font-size_big')) {

            checkStatus(
                target,'book__control_font-size', 'font-size', 'font-size_active',
                ['font-size_small', 'font-size_big']
            )

            book.classList.add('book_fs-big')
            book.classList.remove('book_fs-small')
        }
        else if (target && target.classList.contains('font-size_small')) {

            checkStatus(
                target,'book__control_font-size', 'font-size', 'font-size_active',
                ['font-size_small', 'font-size_big']
            )

            book.classList.add('book_fs-small')
            book.classList.remove('book_fs-big')
        }
        else {

            checkStatus(
                target,'book__control_font-size', 'font-size', 'font-size_active',
                ['font-size_small', 'font-size_big']
            )

            book.classList.remove('book_fs-big','book_fs-small')
        };
    });


});
