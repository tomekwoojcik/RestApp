class API {
  constructor(name) {
    this.apiName : string = name;
  }

  // eslint-disable-next-line class-methods-use-this
  async loginApi(userEmail, userPassword) {
    try {
      const res = await fetch(' http://localhost:3000/login', {
        method: 'post', /* or POST/PUT/PATCH/DELETE */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

          email: `${userEmail}`,
          password: `${userPassword}`,
          // expiresInMins: 60, // optional
        }),
      }).then((response) => response.json());

      const { accessToken, user } = res;
      const resUser = await fetch(` http://localhost:3000/600/users/${user.id}`, {
        method: 'get', /* or POST/PUT/PATCH/DELETE */
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` },
      }).then((response) => response.json());
      return resUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default API;
