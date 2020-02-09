class TovSlider {
  constructor(
    param = {
      containerSelector: undefined,
      nextBtnSelector: undefined,
      prevBtnSelector: undefined
    }
  ) {
    this.container = param.containerSelector
      ? document.querySelector(param.containerSelector)
      : undefined;

    this.slidesItem = this.container.children;
    this.nextBtn = param.nextBtnSelector
      ? document.querySelector(param.nextBtnSelector)
      : undefined;
    this.prevBtn = param.prevBtnSelector
      ? document.querySelector(param.prevBtnSelector)
      : undefined;
    this.currentSlide = 0;

    this.inicial();
  }

  inicial() {
    // Search errors
    if (!this.container) {
      throw new Error("Slider container exception");
    }
    if (!this.slidesItem) {
      throw new Error("No slider slides found");
    }

    // add classes to slider
    this.container.classList.add("tov-slider");
    this.slidesItem[this.currentSlide].classList.add("tov-slide-item--active");
    [...this.slidesItem].forEach(el => el.classList.add("tov-slide-item"));

    // BtnNext listener
    if (this.nextBtn) {
      this.nextBtn.addEventListener("click", () => {
        [...this.slidesItem].forEach(el => {
          el.classList.remove("tov-slide-item--active");
        });

        if (this.currentSlide < this.slidesItem.length - 1) {
          this.currentSlide++;
        } else {
          this.currentSlide = 0;
        }

        this.slidesItem[this.currentSlide].classList.add(
          "tov-slide-item--active"
        );
      });
    }

    // PrevBtn listener

    if (this.prevBtn) {
      this.prevBtn.addEventListener("click", () => {
        [...this.slidesItem].forEach(el => {
          el.classList.remove("tov-slide-item--active");
        });

        if (this.currentSlide <= 0) {
          this.currentSlide = this.slidesItem.length - 1;
        } else {
          this.currentSlide--;
        }

        this.slidesItem[this.currentSlide].classList.add(
          "tov-slide-item--active"
        );
      });
    }
    // PrevBtn Listener
  }
  // Inicial
}
