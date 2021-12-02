
function closeModal(modalSelector) {
      const modal = document.querySelector(modalSelector);
    modal.classList.remove('show');
    modal.classList.add('hide'); //////можно использовать toggle - переключать
    document.body.style.overflow = ''; ///возобновили скрол при закрытом модальном окне
}
function openModal(modalSelector) {
    modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden'; ////overflow делает невозможным прокручивать страницу при модальном окне
    clearInterval(modalTimerId);
};

function modal(triggerSelector, modalSelector){
    

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal(modalSelector));
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        } //////закрытие модального окна кнопкой на клавиатуре
    });
    const modalTimerId = setTimeout(openModal, 50000);
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll); ///////модальное окно открывается единажды припрокручивании скрола до конца страницы
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}
export default modal;
export {openModal};
export {closeModal};