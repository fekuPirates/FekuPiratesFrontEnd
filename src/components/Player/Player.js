import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";
import { fetchSingleVideo, fetchPlayListVideos } from "../../helper/ApiHelper";
import Footer from "../Footer/Footer";
const Player = (props) => {
  const [videoId, setVideoId] = useState("");
  const [playListVideos, setPlayListVideos] = useState([]);
  const [videoData, setVideoData] = useState(undefined);
  const [showDescription, setShowDescription] = useState(true);
  const [isLoading, setIsLaoding] = useState(false);

  const onGetSingleVideo = async (id) => {
    try {
      setIsLaoding(true);
      const response = await fetchSingleVideo(id);
      setIsLaoding(false);
      setVideoData({ ...response.result });
      setVideoId(response.result.videoId);
    } catch (error) {
      setIsLaoding(false);
      console.log(error);
    }
  };

  const onGetPlayListVideos = async (id) => {
    try {
      setIsLaoding(true);
      const response = await fetchPlayListVideos(id);
      setIsLaoding(false);
      setPlayListVideos(response.result);
      onGetSingleVideo(response.result[0].videoId);
    } catch (error) {
      setIsLaoding(false);
    }
  };

  useEffect(() => {
    onGetPlayListVideos(props.match.params.playListId);
  }, [props.match.params]);

  return (
    <>
      <Menu {...props} leftMenu={false} />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12 ">
            {isLoading && !videoId ? (
              <div className="text-center my-5">
                <br />
                <br />
                <div className="lds-dual-ring"></div>
              </div>
            ) : (
              <>
                <div className="video-player-c">
                  {videoId ? (
                    <iframe
                      width="100%"
                      height="100%"
                      style={{ borderRadius: "10px" }}
                      frameborder="0"
                      allow="autoplay"
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    ></iframe>
                  ) : null}
                </div>
                <div className="my-2">
                  <h4>
                    <span>{videoData ? videoData.title : null}</span>
                  </h4>
                </div>
                <div className="my-1">
                  <span className="mx-2">
                    {videoData ? videoData.likeCount : null}{" "}
                    <i className="far fa-thumbs-up"></i>
                  </span>
                  <span className="mx-2">
                    {videoData ? videoData.dislikeCount : null}{" "}
                    <i className="far fa-thumbs-down"></i>
                  </span>
                  <span className="mx-2">
                    {videoData ? videoData.viewCount : null}{" "}
                    <i className="far fa-eye"></i>
                  </span>
                  <br />
                  <span className="mx-2 my-1">
                    {videoData
                      ? `${new Date(
                          videoData.publishedAt
                        ).getDate()}/${new Date(
                          videoData.publishedAt
                        ).getMonth()}/${new Date(
                          videoData.publishedAt
                        ).getFullYear()}`
                      : null}
                  </span>
                </div>
                {/* <div
              onClick={() => {
                setShowDescription(!showDescription);
              }}
              className="expand-c expand-c-toggle"
            >
              <span className="expand-text">Expand</span>
              <span className="expand-icon mx-2">
                <i className="fas fa-chevron-down"></i>
              </span>
            </div> */}

                <div
                  className={
                    showDescription
                      ? "selected-video-detail-c expand-show"
                      : "selected-video-detail-c expand-hide"
                  }
                >
                  <div>
                    <span>{videoData ? videoData.description : null}</span>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="col-md-4 text-center">
            <div className="category-video-list-c">
              {playListVideos.map((video, index) => {
                return (
                  <div
                    key={index}
                    className="card category-video"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      console.log(video);
                      onGetSingleVideo(video.videoId);
                    }}
                  >
                    <div className="card-body p-0">
                      <div className="row">
                        <div className="col-sm-4 p-0">
                          <img
                            className="img-fluid"
                            src={video.thumbNail[1].high}
                          />
                        </div>
                        <div className="col-sm-8">
                          <p className="card-text">
                            <b>{video.title}</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Player;
