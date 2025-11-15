import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Featured.scss";

const Featured = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search) {
      navigate(`/gigs?search=${search}`);
    }
  };

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span style={{ color: "Orange" }}>freelance</span>{" "}
            services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./media/search.png" alt="search" />
              <input
                type="search"
                placeholder='Try "website"'
                onChange={({ target: { value } }) => setSearch(value)}
              />
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Website Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>

        <div className="right">
          <img
            style={{
              height: "550px",
              objectFit: "cover",
            }}
            src="./media/banner.jpg"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
