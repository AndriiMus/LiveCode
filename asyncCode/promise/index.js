const saveUser = userData => {
  const httpPromise = fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(userData),
  });
  httpPromise
    .then(response => {
        // console.log(response.json());
      return response.json();
    })
    .then(response => {
      console.log(response);
    });
};

const user = {
  email: 'test@e.com',
  userName: 'us11',
  password: 'password',
};

saveUser(user);
