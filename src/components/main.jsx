import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <div>
            <img
              className="card-img img-fluid opacity-75"
              src="./assets/hero-img.jpg"
              alt="Card"
              height="50vh"
            />
          </div>
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1  fw-bold">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block  fw-bold">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
