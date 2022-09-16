export const environment = {
  production: true,
  withCredentials: true,
 // baseUrl: "http://consolebank2-env.eba-qkrs9mmh.us-east-1.elasticbeanstalk.com",
    baseUrl: "http://localhost:8080",
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Auth': ""
    },
};