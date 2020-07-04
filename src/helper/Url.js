const BASE_URL = "http://localhost:8100";

export default {
  _channelDetails: BASE_URL + "/api/v1/youtube/channel/details",
  _getPlayLists: BASE_URL + "/api/v1/youtube/playList/all",
  _getPlayListsVideos: BASE_URL + "/api/v1/youtube/playList/videos?q=",
  _getSingleVideo: BASE_URL + "/api/v1/youtube/video/",
};
