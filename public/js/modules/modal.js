
function closeModal(modalSelector) {
      const modal = document.querySelector(modalSelector);
    modal.classList.remove('show');
    modal.classList.add('hide'); //////можно использовать toggle - переключать
    document.body.style.overflow = ''; ///возобновили скрол при закрытом модальном окне
}
function openModal(modalSelector, modalTimerId) {
    modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden'; ////overflow делает невозможным прокручивать страницу при модальном окне
    console.log(modalTimerId);

    if(modalTimerId){
        clearInterval(modalTimerId);
    }  
}

function modal(triggerSelector, modalSelector, modalTimerId){

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        } //////закрытие модального окна кнопкой на клавиатуре
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll); ///////модальное окно открывается единажды припрокручивании скрола до конца страницы
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}
export default modal;
export {openModal};
export {closeModal}; 