import { atom } from "recoil";

export const UserPost = atom({
  key: "UserPost",
  default: [],
});

export const UserCommentPost = atom({
  key: "UserCommentPost",
  default: [],
});
