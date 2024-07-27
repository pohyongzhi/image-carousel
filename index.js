class CarouselController {
    constructor() {
        this.currentImg = ["img-1.jpg", "img-2.jpg", "img-3.jpg"];
        this.counter = 0;
        this.controllerInit();
        this.buttonInit();
    }

    controllerInit() {
        const len = this.currentImg.length;

        // Initialize first picture
        const img = document.createElement("img");
        img.src = `assets/${this.currentImg[this.counter++ % len]}`;
        img.alt = "Image of Singapore";

        const carouselImage = document.querySelector(".carousel-image");
        carouselImage.appendChild(img);

        // Change Image after 5 section
        setInterval(() => {
            const img = document.createElement("img");
            img.src = `assets/${this.currentImg[this.counter++ % len]}`;
            img.alt = "Image of Singapore";

            carouselImage.innerHTML = "";
            carouselImage.appendChild(img);
        }, 5000);
    }

    buttonInit() {
        const carouselImage = document.querySelector(".carousel-image");
        const leftBtn = document.querySelector(".carousel-left-btn");

        leftBtn.addEventListener("click", () => {
            // Loop back if to the end of the list if needed
            if (this.counter === 0) {
                this.counter = this.currentImg.length - 1;
            } else {
                this.counter = this.counter - 1;
            }

            const img = document.createElement("img");
            img.src = `assets/${this.currentImg[this.counter]}`;
            img.alt = "Image of Singapore";

            carouselImage.innerHTML = "";
            carouselImage.appendChild(img);
        });

        const len = this.currentImg.length;
        const rightBtn = document.querySelector(".carousel-right-btn");

        rightBtn.addEventListener("click", () => {
            const img = document.createElement("img");
            img.src = `assets/${this.currentImg[this.counter++ % len]}`;
            img.alt = "Image of Singapore";

            carouselImage.innerHTML = "";
            carouselImage.appendChild(img);
        });
    }
}

const carouselController = new CarouselController();
