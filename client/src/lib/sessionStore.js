import { writable } from "svelte/store";

export const user = writable(false);
export const blogDraft = writable({
  title: "",
  short_title: "",
  author: "",
  body: "",
  display_photo: "",
});
export const fileUpload = writable();
export const blogArticle = writable({
  title: "",
  display_photo: "",
  short_title: "",
  body: "",
});
