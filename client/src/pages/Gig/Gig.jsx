import toast from "react-hot-toast";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { axiosFetch } from "../../utils";
import { Link, useParams } from "react-router-dom";
import { Loader, NextArrow, PrevArrow, Reviews } from "../../components";
import "./Gig.scss";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const Gig = () => {
  const { _id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      axiosFetch
        .get(`/gigs/single/${_id}`)
        .then(({ data }) => {
          data.images.unshift(data.cover);
          return data;
        })
        .catch(({ response }) => {
          toast.error(response.data.message);
        }),
  });

  const country = data?.userID.country;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gig">
      {isLoading ? (
        <div className="loader">
          {" "}
          <Loader />{" "}
        </div>
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="container">
          <div className="left">
            <h1>{data?.title}</h1>
            <div className="user">
              <img
                className="pp"
                src={data?.userID?.image || "/media/noavatar.png"}
                alt=""
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span>{data?.userID.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {new Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img src="/media/star.png" key={i} />
                      ))}
                    <span>
                      {(data.totalStars / data.starNumber).toFixed(1)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <CarouselProvider
              naturalSlideHeight={40}
              naturalSlideWidth={80}
              totalSlides={data?.images.length}
              infinite
              className="slider"
            >
              <Slider>
                {data.images.map((img) => (
                  <Slide key={img}>
                    <Image key={img} src={img} alt="" />
                  </Slide>
                ))}
              </Slider>

              <ButtonBack>
                <PrevArrow />
              </ButtonBack>

              <ButtonNext>
                <NextArrow />
              </ButtonNext>
            </CarouselProvider>
            <h2>About This Gig</h2>
            <p>{data.description}</p>
            <div className="seller">
              <h2>About The Seller</h2>
              <div className="user">
                <img
                  src={data?.userID?.image || "/media/noavatar.png"}
                  alt=""
                />
                <div className="info">
                  <span style={{ fontSize: "16px" }}>
                    {data?.userID.username}
                  </span>
                  <div className="stars">
                    <img src="/media/star.png" alt="" />
                    <img src="/media/star.png" alt="" />
                    <img src="/media/star.png" alt="" />
                    <img src="/media/star.png" alt="" />
                    <img src="/media/star.png" alt="" />
                    <span>5</span>
                  </div>
                  <button>Contact Me</button>
                </div>
              </div>
              <div className="box">
                <div className="items">
                  <div className="item">
                    <span className="title">From</span>
                    <span className="desc">
                      {data?.userID.country}
                      <span className="flag">
                        <img src={country} alt="" />
                      </span>
                    </span>
                  </div>
                  <div className="item">
                    <span className="title">Member since</span>
                    <span className="desc">
                      {MONTHS[new Date(data?.userID.createdAt).getMonth()] +
                        " " +
                        new Date(data?.userID.createdAt).getFullYear()}
                    </span>
                  </div>
                  <div className="item">
                    <span className="title">Avg. response time</span>
                    <span className="desc">4 hours</span>
                  </div>
                  <div className="item">
                    <span className="title">Last delivery</span>
                    <span className="desc">1 day</span>
                  </div>
                  <div className="item">
                    <span className="title">Languages</span>
                    <span className="desc">English</span>
                  </div>
                </div>
                <hr />
                <p>{data.userID.description}</p>
              </div>
            </div>
            <Reviews gigID={_id} />
          </div>
          <div className="right">
            <div className="price">
              <h3>{data?.shortTitle}</h3>
              <h2>
                {data?.price.toLocaleString("en-IN", {
                  maximumFractionDigits: 0,
                  style: "currency",
                  currency: "USD",
                })}
              </h2>
            </div>
            <p>{data?.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img
                  src="https://img.icons8.com/?size=100&id=82767&format=png&color=000000"
                  alt=""
                />
                <span>{data.deliveryTime} days Delivery</span>
              </div>
              <div className="item">
                <img
                  src="https://img.icons8.com/?size=100&id=mMjGo4bmA7Kr&format=png&color=000000"
                  alt=""
                />
                <span>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="features">
              {data?.features.map((feature) => (
                <div key={feature} className="item">
                  <img
                    src="https://www.freeiconspng.com/uploads/pink-tick-icon-37.png"
                    alt=""
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link to={`/pay/${_id}`}>
              <button>Continue</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gig;
