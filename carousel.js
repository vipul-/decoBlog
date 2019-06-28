const carousel = document.querySelector('#carousel');

const carouselArray = [
    'images/carousel-01.png',
    'images/carousel-02.png',
    'images/carousel-03.png',
    'images/carousel-04.png'
];

const countDown = (t) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, t);
    });
};

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

const transition = async(carousel) => {
    for (let i = 1; i<=100; i++) {
        await countDown(1);
        carousel.style.opacity = String(i/100);
    }
}

const start = async () => {
    while (true) {
        await asyncForEach(carouselArray, async (image) => {
            await countDown(4000);
            carousel.style.opacity = '0';
            carousel.setAttribute('src', image);
            transition(carousel);
            if (image !== 'images/carousel-04.png') {
                carousel.style.right = '257px';
            } else {
                carousel.style.right = 'initial';
            }
        });
    }
}   

start();