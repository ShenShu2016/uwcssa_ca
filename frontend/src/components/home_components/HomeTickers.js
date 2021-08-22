import React, { useRef, useState, useEffect } from "react";
import NewsTicker, { Directions } from "react-advanced-news-ticker";
import "./HomeTickers.css";

function HomeTickers() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [newsData, setNewsData] = useState({});

  useEffect(() => {
    getNewsWithFetch();
  }, []);
  const getNewsWithFetch = async () => {
    const response = await fetch("http://127.0.0.1:8000/news/article_list/");
    const jsonData = await response.json();
    setNewsData(jsonData[0]);
  };
  return (
    <div className="home-ticker-container-row">
      <div id="nt-example1-container">
        <div className="ticker-title">
          <h3>Last News</h3>
        </div>
        <NewsTicker
          id="nt-example1"
          ref={ref1}
          rowHeight={94}
          maxRows={3}
          duration={4000}
        >
          <div>我这里有新闻{newsData ? newsData.content : "傻逼出错了"}</div>
          <div className="inner-item-row">
            <div className="inner-item-row-img">
              <img
                src="https://pbs.twimg.com/profile_images/3177666565/ca58013984c0142c33c3a8baa75be18b.png"
                alt="Sample image"
              />
            </div>
            <div className="inner-item-row-other">
              <a href="#">Japan's inspirational footballer</a>
              <p>
                CNN's Kyung Lah sits down with Japan's World Cup-winning captain
                to reflect on their win amid tragedy.
              </p>
            </div>
          </div>
          <div className="inner-item-row">
            <div className="inner-item-row-img">
              <img
                src="https://cdn.shopify.com/s/files/1/0419/2749/products/benevo-dog-organic-15kg-1000px-o_256x.gif?v=1563883166"
                alt="Sample image"
              />
            </div>
            <div className="inner-item-row-other">
              <a href="#">Japan's inspirational footballer</a>
              <p>
                CNN's Kyung Lah sits down with Japan's World Cup-winning captain
                to reflect on their win amid tragedy.
              </p>
            </div>
          </div>
          <div>Etiam imperdiet volutpat libero eu tristique.</div>
          <div>Curabitur porttitor ante eget hendrerit adipiscing.</div>
          <div>
            Praesent ornare nisl lorem, ut condimentum lectus gravida ut.
          </div>
          <div>Nunc ultrices tortor eu massa placerat posuere.</div>
          <div className="inner-item-row">
            <div className="inner-item-row-img">
              <img
                src="https://is2-ssl.mzstatic.com/image/thumb/Purple115/v4/25/ca/3d/25ca3d7f-018a-adbe-9d1f-41772dccc60d/source/256x256bb.jpg"
                alt="Sample image"
              />
            </div>
            <div className="inner-item-row-other">
              <a href="#">Japan's inspirational footballer</a>
              <p>
                CNN's Kyung Lah sits down with Japan's World Cup-winning captain
                to reflect on their win amid tragedy.
              </p>
            </div>
          </div>
        </NewsTicker>
        {/* <i
          className="fa fa-arrow-up"
          id="nt-example1-prev"
          onClick={() => {
            ref1.current.movePrev();
            ref1.current.resetInterval();
          }}
        />
        <i
          className="fa fa-arrow-down"
          id="nt-example1-next"
          onClick={() => {
            ref1.current.moveNext();
            ref1.current.resetInterval();
          }}
        /> */}
      </div>
      <div id="nt-example1-container">
        <div className="ticker-title">
          <h3>Hot Forum Topics</h3>
        </div>
        <NewsTicker
          id="nt-example1"
          ref={ref2}
          rowHeight={93}
          maxRows={3}
          duration={3500}
          direction={Directions.DOWN}
        >
          <div>我这里有新闻{newsData ? newsData.content : "傻逼出错了"}</div>
          <div className="inner-item-row">
            <div className="inner-item-row-img">
              <img
                src="https://i.pinimg.com/474x/cf/9e/ac/cf9eace4ae379df9b506a9ec0f0c4cd6--cute-pictures-kittens.jpg"
                alt="Sample image"
              />
            </div>
            <div className="inner-item-row-other">
              <a href="#">Japan's inspirational footballer</a>
              <p>
                CNN's Kyung Lah sits down with Japan's World Cup-winning captain
                to reflect on their win amid tragedy.
              </p>
            </div>
          </div>
          <div className="inner-item-row">
            <div className="inner-item-row-img">
              <img
                src="data:image/jpeg;base64,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"
                alt="Sample image"
              />
            </div>
            <div className="inner-item-row-other">
              <a href="#">Japan's inspirational footballer</a>
              <p>
                CNN's Kyung Lah sits down with Japan's World Cup-winning captain
                to reflect on their win amid tragedy.
              </p>
            </div>
          </div>
          <div>Etiam imperdiet volutpat libero eu tristique.</div>
          <div>Curabitur porttitor ante eget hendrerit adipiscing.</div>
          <div>
            Praesent ornare nisl lorem, ut condimentum lectus gravida ut.
          </div>
          <div>Nunc ultrices tortor eu massa placerat posuere.</div>
          <div className="inner-item-row">
            <div className="inner-item-row-img">
              <img
                src="https://is2-ssl.mzstatic.com/image/thumb/Purple115/v4/25/ca/3d/25ca3d7f-018a-adbe-9d1f-41772dccc60d/source/256x256bb.jpg"
                alt="Sample image"
              />
            </div>
            <div className="inner-item-row-other">
              <a href="#">Japan's inspirational footballer</a>
              <p>
                CNN's Kyung Lah sits down with Japan's World Cup-winning captain
                to reflect on their win amid tragedy.
              </p>
            </div>
          </div>
        </NewsTicker>
        {/* <i
          className="fa fa-arrow-up"
          id="nt-example1-prev"
          onClick={() => {
            ref2.current.movePrev();
            ref2.current.resetInterval();
          }}
        />
        <i
          className="fa fa-arrow-down"
          id="nt-example1-next"
          onClick={() => {
            ref2.current.moveNext();
            ref2.current.resetInterval();
          }}
        /> */}
      </div>
    </div>
  );
}

export default HomeTickers;
