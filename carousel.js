const carousel = document.querySelector('#carousel');
const sliderRight = document.querySelectorAll('.slider-arrows');
const sliderUnknown = document.querySelector('#slider-unknown');
const previousPost = document.querySelector('#previous-post');
const nextPost = document.querySelector('#next-post');
const post = document.querySelector('#post-bgcolor');
const arrowup = document.querySelector('#arrow-up');
const arrowdown = document.querySelector('#arrow-down');
const jumbotronbg = document.querySelector('#jumbotron-bg');
const latestNews = document.querySelector('#latest-news');
const dots = document.querySelectorAll('#dots img');
const recommendedPostSlider = document.querySelectorAll('#recmmendedPosts-slider');
const recommendedPostContainer = document.querySelector('#postContainer');

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
        await countDown(15);
        carousel.style.opacity = String(i/100);
    }
}

const startCarousel = async () => {
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

startCarousel();

sliderRight.forEach(slider => {
    slider.addEventListener('click', event => {
        sliderUnknown.style.opacity = '0';
        transition(sliderUnknown);
    });
});

const postTransition = (event) => {
    post.style.opacity = '0';
    transition(post);
} 

previousPost.addEventListener('click', postTransition);

nextPost.addEventListener('click', postTransition);

const jumbotronTransition = (arrow) => {
    dotsUpdater(arrow);
    jumbotronbg.style.opacity = '0';
    latestNews.style.opacity = '0';
    transition(jumbotronbg);
    transition(latestNews);
}

arrowup.addEventListener('click', () => {
    jumbotronTransition('arrowup');
});

arrowdown.addEventListener('click', () => {
    jumbotronTransition('arrowdown');
});

let dotsIndex = dots.length-1;

const dotsUpdater = (arrow) => {
    dots[dotsIndex].setAttribute('src', 'images/jumbotron-dot-dark.png');
    if (arrow === 'arrowup') {
        dotsIndex--;
        dotsIndex = dotsIndex===-1 ? 2 : dotsIndex;
        dots[dotsIndex].setAttribute('src', 'images/jumbotron-dot-gray.png');
    } else {
        dotsIndex++;
        dotsIndex = dotsIndex === 3 ? 0 : dotsIndex;
        dots[dotsIndex].setAttribute('src', 'images/jumbotron-dot-gray.png');
    }
};

const startJumbotron = async () => {
    while (true) {
        await countDown(4000);
        jumbotronTransition('arrowup');
    }
}

startJumbotron();

recommendedPostSlider.forEach(slider => {
    slider.addEventListener('click', event => {
        recommendedPostContainer.style.opacity = '0';
        transition(recommendedPostContainer);
    });
});