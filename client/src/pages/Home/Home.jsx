import { useEffect } from "react";
import { Featured, Slide } from "../../components";
import { CategoryCard, ProjectCard } from "../../components";
import { cards, projects } from "../../data";

import "./Home.scss";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <Featured />
      <Slide slidesToShow={5}>
        {cards.map((card) => (
          <CategoryCard key={card.id} data={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./media/tick2.png" alt="check" />
              <h6>The best for every budget</h6>
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./media/tick2.png" alt="check" />
              <h6>Quality work done quickly</h6>
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./media/tick2.png" alt="check" />
              <h6>Protected payments, every time</h6>
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./media/tick2.png" alt="check" />
              <h6>24/7 support</h6>
            </div>
            <p>
              Questions? Our round-the-clock support team is available to help
              anytime, anywhere.
            </p>
          </div>
          <div className="item">
            <video
              style={{ borderRadius: "5%" }}
              src="./media/video_marketplace.mp4"
              controls
            ></video>
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h2>Marketplace business</h2>
            <h1>
              A business solution designed for <span>teams</span>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./media/tick2.png" alt="check" />
              <h6>Connect to freelancers with proven business experience</h6>
            </div>
            <div className="title">
              <img src="./media/tick2.png" alt="check" />
              <h6>
                Get matched with the perfect talent by a customer success
                manager
              </h6>
            </div>
            <div className="title">
              <img src="./media/tick2.png" alt="check" />
              <h6>
                Manage teamwork and boost productivity with one powerful
                workspace
              </h6>
            </div>
            <button>Explore Business</button>
          </div>
          <div className="item">
            <img src="./media/banner2.png" alt="" />
          </div>
        </div>
      </div>

      <Slide slidesToShow={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} data={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
