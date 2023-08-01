/**
 * changes the carousel display content
 * @param {'left' | 'right'} direction
 */
const carouselClicked = (direction) => {
    const carouselElement = document.querySelector('.carousel[data-page-index]');
    const carouselContentWrapperElement = carouselElement.querySelector('.content-wrapper');

    const lastPageIndex = carouselContentWrapperElement.childElementCount - 1;
    let currentPageIndex = Number(carouselElement.getAttribute('data-page-index'));

    if (direction === 'left') {
        if (currentPageIndex === 0) {
            currentPageIndex = lastPageIndex;
        } else {
            currentPageIndex--;
        }
    } else {
        if (currentPageIndex === lastPageIndex) {
            currentPageIndex = 0;
        } else {
            currentPageIndex++;
        }
    }

    carouselElement.setAttribute('data-page-index', currentPageIndex);
};

document.querySelector('#carousel-left-btn').addEventListener('click', () => {
    carouselClicked('left');
    console.log('left clicked');
});
document.querySelector('#carousel-right-btn').addEventListener('click', () => {
    carouselClicked('right');
    console.log('right clicked');
});
