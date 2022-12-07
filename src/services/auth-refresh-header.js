export default function authRefreshHeader() {
    const tokens = JSON.parse(localStorage.getItem("user"));
  
    if (tokens && tokens.refresh_token) {
      return { Authorization: 'Bearer ' + tokens.refresh_token };
      //   return { "x-auth-token": user.accessToken };
    } else {
      return {};
    }
  }