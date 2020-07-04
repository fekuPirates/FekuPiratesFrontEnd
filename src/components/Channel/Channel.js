import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import { fetchPlayLists, fetchPlayListVideos } from "../../helper/ApiHelper";
import { Link } from "react-router-dom";
const Channel = (props) => {
  const [playLists, setPlayLists] = useState([]);
  const [playListId, setPlayListId] = useState(
    "PLaKpMIfnhCxsRPDmaD1mesU_Zx1xii2u3"
  );
  const [videos, setVideos] = useState([]);

  const onGetPlayListVideos = async (id) => {
    try {
      const response = await fetchPlayListVideos(id);

      setVideos([...response.result]);
    } catch (error) {}
  };
  const onGetAllPlayList = async () => {
    try {
      const response = await fetchPlayLists();
      setPlayLists([...response.result]);
      // onGetPlayListVideos(
      //   response.result[Math.floor(Math.random() * Math.floor(9))]
      //     .playListitemId
      // );
      onGetPlayListVideos(playListId);
    } catch (error) {
      //TODO: handle the error
    }
  };

  useEffect(() => {
    onGetAllPlayList();
  }, []);

  return (
    <>
      <Menu
        {...props}
        playLists={playLists}
        onSetPlayListId={(id) => {
          setPlayListId(id);
          onGetPlayListVideos(id);
        }}
        leftMenu={true}
      />
      <br />
      <br />
      <br />
      <div>
        <div className="channel-body">
          <div className="channel-container-c">
            {/* <a href="./SingleVideoPlayer.html" className="box">
              <div className="card">
                <img
                  src={require("../../assets/blog-img.jpeg")}
                  className="card-img-top"
                  alt="..."
                />
                <div className="text-center channel-container-box-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cumque, similique?
                  </p>
                </div>
              </div>
            </a> */}
            {videos.map((video, index) => {
              return (
                <Link
                  to={{
                    pathname: `/channel/video/${playListId}/${video.videoId}`,
                  }}
                  key={index}
                  className="channel-container-box"
                >
                  <div className="card">
                    <img
                      src={video.thumbNail[1].high}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="text-center channel-container-box-content">
                      <p>{video.title}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Channel;
