import Cookie from "cookie-universal";

export default function getCookie(name) {
  const cookies = Cookie();
  return cookies.get(name);
}
