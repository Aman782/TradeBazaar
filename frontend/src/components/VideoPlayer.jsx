import React, { useState, useEffect } from "react";

const VideoPlayer = ({ videoId }) => {
  const [YouTube, setYouTube] = useState(null);

  useEffect(() => {
    import("react-youtube")
      .then((module) => {
        setYouTube(() => module.default);
      })
      .catch((error) => console.error("Error loading YouTube module:", error));
  }, []);

  if (!YouTube) return <div>Loading...</div>;

  const opts = {
    height: "400",
    width: "700",
    playerVars: {
      autoplay: 1,
      controls: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <div className="container-fluid fontstyle p-5 bg-light" style={{
      background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
      borderRadius: '10px',
    }}>
      <div className="row">
        <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
          <h2 className="fs-2 fw-bold text-center mb-4 text-primary">
            Learn How to Invest or Buy Stocks
          </h2>
          <YouTube videoId={videoId} opts={opts} />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
