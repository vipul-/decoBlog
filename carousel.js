const carousel = document.querySelector('#carousel');

const carouselArray = [
    'images/carousel-01.png',
    'images/carousel-02.png',
    'images/carousel-03.png',
    'images/carousel-04.png'
];

const countDown = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 4000);
    });
};

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

const start = async () => {
    while (true) {
        await asyncForEach(carouselArray, async (image) => {
            await countDown();
            carousel.setAttribute('src', image);
            if (image !== 'images/carousel-04.png') {
                carousel.style.right = '257px';
            } else {
                carousel.style.right = 'initial';
            }
        });
    }
}   

start();