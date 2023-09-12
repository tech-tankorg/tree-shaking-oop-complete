export const init_app = ({
  token = undefined,
  signingSecret = undefined,
  socketMode = undefined,
  appToken = undefined,
  port = undefined,
}) => {
  if (
    token === undefined &&
    signingSecret === undefined &&
    socketMode === undefined &&
    appToken === undefined &&
    port === undefined
  ) {
    return false;
  }

  return true;
};

export const message = (app_init) => {
  if (!app_init)
    throw new Error(
      "You must initialize the app before you can call this function"
    );
  return "A new member has joined the team! Welcome";
};

export const member_exit = (app_init, msg) => {
  if (!app_init)
    throw new Error(
      "You must initialize the app before you can call this function"
    );
  return msg;
};
