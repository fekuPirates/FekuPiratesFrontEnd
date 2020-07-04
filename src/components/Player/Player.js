import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";
import { fetchSingleVideo, fetchPlayListVideos } from "../../helper/ApiHelper";
const Player = (props) => {
  const [videoId, setVideoId] = useState("");
  const [playListVideos, setPlayListVideos] = useState([]);
  const [videoData, setVideoData] = useState(undefined);
  const [showDescription, setShowDescription] = useState(true);
  const [playListId, setPlayListId] = useState("");
  const onGetSingleVideo = async (id) => {
    try {
      const response = await fetchSingleVideo(id);

      setVideoData({ ...response.result });
    } catch (error) {
      console.log(error);
    }
  };

  const onGetPlayListVideos = async (id) => {
    try {
      const response = await fetchPlayListVideos(id);
      console.log(response.result);
      setPlayListVideos(response.result);
    } catch (error) {}
  };

  useEffect(() => {
    setPlayListId(props.match.params.playListId);
    setVideoId(props.match.params.videoId);
    onGetSingleVideo(props.match.params.videoId);
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
            <div className="video-player-c">
              <iframe
                width="100%"
                height="100%"
                style={{ borderRadius: "10px" }}
                src={`https://www.youtube.com/embed/${videoId}`}
              ></iframe>
            </div>
            <div className="my-1">
              <h3>
                <span>{videoData ? videoData.title : null}</span>
              </h3>
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
              <span className="my-1">
                {videoData ? videoData.publishedAt : null}
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
          </div>

          <div className="col-md-4 text-center">
            <div className="category-video-list-c">
              {playListVideos.map((video, index) => {
                return (
                  <div key={index} className="card category-video">
                    <div className="card-body">
                      {/* <img
                        // height="100"
                        // width="100"
                        // className="img-fluid"
                        src={video.thumbNail[1].high}
                        alt=""
                      /> */}
                      <p className="card-text">
                        <b>{video.title}</b>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
