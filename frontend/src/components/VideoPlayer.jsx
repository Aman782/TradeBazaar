import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId }) => {
  const [player, setPlayer] = useState(null);

  const opts = {
    height: "400",
    width: "700",
    playerVars: {
      autoplay: 1,
      controls: 1,
      modestbranding: 1, // Hides the YouTube logo
      rel: 0, // Prevents showing related videos
    },
  };

  // Event handlers
  const onReady = (event) => {
    setPlayer(event.target);
  };

  const replayVideo = () => {
    if (player) {
      player.seekTo(0); // Restart the video
      player.playVideo(); // Play from the start
    }
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
          <YouTube videoId={videoId} opts={opts} onReady={onReady} />
          <div className="mt-4">
            <button
              className="btn btn-primary btn-lg me-3"
              onClick={replayVideo}
            >
              Replay Video
            </button>
            <a
              href="#learn-more"
              className="btn btn-outline-secondary btn-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div id="learn-more" className="row mt-5">
        <div className="col-md-8 offset-md-2 text-center">
          <h3 className="fs-3 fw-semibold text-dark">
            Why Learn Stock Investment?
          </h3>
          <p className="text-muted">
            Investing in stocks is one of the best ways to build wealth over
            time. Learn the basics, understand market trends, and discover
            strategies to make informed decisions. This video is the first step
            in your journey to financial freedom!
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
