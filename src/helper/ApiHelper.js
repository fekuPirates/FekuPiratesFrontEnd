import Url from "./Url";

export const fetchChannelDetails = async () => {
  try {
    let result = await fetch(Url._channelDetails, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return result.json();
  } catch (error) {
    throw new Error(error);
  }
};
export const fetchPlayLists = async () => {
  try {
    let result = await fetch(Url._getPlayLists, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return result.json();
  } catch (error) {
    throw new Error(error);
  }
};
export const fetchPlayListVideos = async (playListId) => {
  try {
    let result = await fetch(`${Url._getPlayListsVideos}${playListId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return result.json();
  } catch (error) {
    throw new Error(error);
  }
};
export const fetchSingleVideo = async (videoId) => {
  try {
    let result = await fetch(`${Url._getSingleVideo}${videoId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return result.json();
  } catch (error) {
    throw new Error(error);
  }
};
