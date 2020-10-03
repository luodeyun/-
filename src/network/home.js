import { request } from "./request";
export function getSwiper() {
  return request({
    url: "/banner"
  });
}
export function getMusicList() {
  return request({
    url: "/top/playlist",
    params: {
      offset: (Math.random() * 1297).toFixed(0) - 12,
      limit: 12
    }
  });
}
export function getOnlyList() {
  return request({
    url: "/personalized/privatecontent"
  });
}
export function getNewList() {
  return request({
    url: "personalized/newsong"
  });
}
export function getMusicUrl(musicId) {
  return request({
    url: "song/url",
    params: {
      id: musicId
    }
  });
}
export function getMusicMenu(musicId) {
  return request({
    url: "song/detail",
    params: {
      ids: musicId
    }
  });
}
