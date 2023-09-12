const { App } = require("./oop-class");

// The initializer takes in an object of the following shape
// ----------------
/*
{
    token:string;
    signingSecret:string;
    socketMode:boolean;
    appToken:string;
    port:number;
}

*/

const config = {
  token: "a33d55ce3a59c35a4328b1b8289b54c4",
  signingSecret: "5bffdbe7799fd9ec550f2a026212da3f",
  socketMode: false,
  appToken: "a16e35fec3157-6fce9d8-a94d32c0_d6b182e44",
  port: 8000,
};

const app = new App(config);

console.log(app.team_join());
