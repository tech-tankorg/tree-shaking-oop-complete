import { init_app, message } from "./tree-shake.js";

const config = {
  token: "a33d55ce3a59c35a4328b1b8289b54c4",
  signingSecret: "5bffdbe7799fd9ec550f2a026212da3f",
  socketMode: false,
  appToken: "a16e35fec3157-6fce9d8-a94d32c0_d6b182e44",
  port: 8000,
};

const app = init_app(config);

const print_message = message(app);

console.log(print_message);
