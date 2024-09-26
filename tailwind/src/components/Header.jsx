
function Header() {
  return (
    <div className="flex justify-center gap-3 ">
<div className="carousel w-2/5 shadow-md ">
  <div id="slide1" className="carousel-item relative w-full">
    <img
    src="https://img.freepik.com/free-photo/blue-t-shirt_125540-727.jpg"
    className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
    src="https://img.freepik.com/free-photo/blue-t-shirt_125540-727.jpg"
    className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
    src="https://img.freepik.com/free-photo/blue-t-shirt_125540-727.jpg"
    className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
    src="https://img.freepik.com/free-photo/blue-t-shirt_125540-727.jpg"
    className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
<div className="card w-96 shadow-xl bg-[#f8f8f8]">
 
  <div className="card-body">
    <h2 className="card-title">Glordano</h2>
    <h1 className="card-title">PACK 5 T-SHIRTS FOR SUMMER</h1>

    <p>Starting at <span className="text-red">$99</span></p>

  </div>
  <figure>
    <img
    src="https://png.pngtree.com/png-clipart/20231001/original/pngtree-pack-of-color-t-shirts-png-image_13029681.png"
      alt="Shoes" />
  </figure>
</div>

    </div>
  )
}

export default Header