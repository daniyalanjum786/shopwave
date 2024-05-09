function Carousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/images/carousel/banner1.png"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/carousel/banner2.png"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/carousel/banner3.png"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
