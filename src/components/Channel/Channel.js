import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import { fetchPlayLists } from "../../helper/ApiHelper";
import { Link } from "react-router-dom";
import ChannelSuspense from "../Suspense/ChannelSuspense";
const Channel = (props) => {
  const [playLists, setPlayLists] = useState([]);
  const [isLoading, setIsLaoding] = useState(false);

  const onGetAllPlayList = async () => {
    try {
      setIsLaoding(true);
      const response = await fetchPlayLists();
      setIsLaoding(false);
      setPlayLists([...response.result]);
    } catch (error) {
      setIsLaoding(false);
      //TODO: handle the error
    }
  };

  useEffect(() => {
    onGetAllPlayList();
  }, []);

  return (
    <>
      <Menu {...props} leftMenu={false} />
      {isLoading ? (
        <ChannelSuspense />
      ) : (
        <div>
          <br />
          <br />
          <br />
          <div className="text-center my-3">
            <h3>
              <b>PlayLists</b>
            </h3>
          </div>
          <div className="channel-body">
            <div className="channel-container-c">
              {playLists.map((playList, index) => {
                return (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={{
                      pathname: `/channel/videos/${playList.playListitemId}`,
                    }}
                    key={index}
                    className="channel-container-box"
                  >
                    <div className="card">
                      <img
                        src={playList.thumbNail[1].high}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="text-center channel-container-box-content">
                        <p className="my-3">
                          <b>{playList.title.toUpperCase()}</b>
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Channel;
