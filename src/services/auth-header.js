export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    console.log(user.access_token)
  
    if (user && user.access_token) {
      return { Authorization: 'Bearer ' + user.access_token };
    //   return { "x-auth-token": user.accessToken };
    } else {
      return {};
    }
  }