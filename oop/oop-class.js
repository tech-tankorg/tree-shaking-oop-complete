class SlackApp {
  constructor(initVars) {
    this.token = initVars.token;
    this.signingSecret = initVars.signingSecret;
    this.socketMode = initVars.socketMode;
    this.appToken = initVars.appToken;
    this.port = initVars.port;
  }

  member_join() {
    return "A new member has joined the team! Welcome";
  }

  member_exit(msg) {
    return msg;
  }

  greetNewUser(userId) {
    return `Hello ${userId}! Welcome to the Workspace!`;
  }

  sayHello() {
    return "Hello";
  }

  generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  disconnectApp() {
    return "disconnected";
  }
}

module.exports = { App: SlackApp };
