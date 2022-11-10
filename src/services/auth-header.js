export default function authHeader() {
  const tokens = JSON.parse(localStorage.getItem("user"));

  if (tokens && tokens.access_token) {
    return { Authorization: 'Bearer ' + tokens.access_token };
    //   return { "x-auth-token": user.accessToken };
  } else {
    return {};
  }
}