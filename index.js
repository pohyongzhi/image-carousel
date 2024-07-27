class CarouselController {
    constructor() {
        this.currentImg = ["img-1.jpg", "img-2.jpg", "img-3.jpg"];
        this.controllerInit();
    }

    controllerInit() {
        let counter = 0;
        const len = this.currentImg.length;

        // Initialize first picture
        const img = document.createElement("img");
        img.src = `assets/${this.currentImg[counter++ % len]}`;
        img.alt = "Image of Singapore";

        const carouselImage = document.querySelector(".carousel-image");
        carouselImage.appendChild(img);

        // Change Image after 5 section
        setInterval(() => {
            const img = document.createElement("img");
            img.src = `assets/${this.currentImg[counter++ % len]}`;
            img.alt = "Image of Singapore";

            carouselImage.innerHTML = "";
            carouselImage.appendChild(img);
        }, 5000);
    }
}

const carouselController = new CarouselController();
