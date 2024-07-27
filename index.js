class CarouselController {
    constructor() {
        this.currentImg = ["img-1.jpg", "img-2.jpg", "img-3.jpg"];
        this.counter = 0;
        this.controllerInit();
        this.buttonInit();
        this.circleNavInit();
        this.updateBtnBackground(0);
    }

    controllerInit() {
        const carouselImage = document.querySelector(".carousel-image");

        // Change Image after 5 section
        setInterval(() => {
            const img = document.createElement("img");
            img.src = `assets/${this.currentImg[this.counter]}`;
            img.alt = "Image of Singapore";

            carouselImage.innerHTML = "";
            carouselImage.appendChild(img);

            this.updateBtnBackground(this.counter);

            this.counter++;

            if (this.counter === 3) {
                this.counter = 0;
            }
        }, 2000);
    }

    buttonInit() {
        const carouselImage = document.querySelector(".carousel-image");
        const leftBtn = document.querySelector(".carousel-left-btn");

        leftBtn.addEventListener("click", () => {
            // Loop back if to the end of the list if needed
            if (this.counter === 0) {
                this.counter = this.currentImg.length - 1;
            } else {
                this.counter -= 1;
            }

            const img = document.createElement("img");
            img.src = `assets/${this.currentImg[this.counter]}`;
            img.alt = "Image of Singapore";

            carouselImage.innerHTML = "";
            carouselImage.appendChild(img);

            this.updateBtnBackground(this.counter);
        });

        const rightBtn = document.querySelector(".carousel-right-btn");

        rightBtn.addEventListener("click", () => {
            // Loop back to the first image if at the end
            this.counter = (this.counter + 1) % this.currentImg.length;

            const img = document.createElement("img");
            img.src = `assets/${this.currentImg[this.counter]}`;
            img.alt = "Image of Singapore";

            carouselImage.innerHTML = "";
            carouselImage.appendChild(img);

            this.updateBtnBackground(this.counter);
        });
    }

    circleNavInit() {
        const carouselNav = document.querySelector(".carousel-nav");

        const len = this.currentImg.length;

        for (let index = 0; index < len; index++) {
            const btn = document.createElement("button");
            btn.id = this.currentImg[index];
            carouselNav.appendChild(btn);

            btn.addEventListener("click", () => {
                const img = document.createElement("img");
                img.src = `assets/${this.currentImg[index]}`;
                img.alt = "Image of Singapore";

                const carouselImage = document.querySelector(".carousel-image");
                carouselImage.innerHTML = "";
                carouselImage.appendChild(img);

                this.counter = index;

                this.updateBtnBackground(index);
            });
        }
    }

    updateBtnBackground(index) {
        // Reset the colors of all buttons
        const len = this.currentImg.length;
        for (let i = 0; i < len; i++) {
            const btn = document.getElementById(`${this.currentImg[i]}`);
            btn.style.backgroundColor = "white";
        }

        // Change the color of the current selected button
        const btn = document.getElementById(`${this.currentImg[index]}`);
        btn.style.backgroundColor = "gray";
    }
}

const carouselController = new CarouselController();
