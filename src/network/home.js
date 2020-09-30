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
export function getNewList() {
  return request({
    url: "personalized/newsong"
  });
}
