export const environment = {
  production: false,
  withCredentials: true,
  baseUrl: "http://ec2-34-234-73-192.compute-1.amazonaws.com:8080",
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Auth': "",
  },
};