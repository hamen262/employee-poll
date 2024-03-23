import { applyMiddleware } from "redux";
import checkAuthedUser from "./checkAuthedUser";
import thunk from "redux-thunk";
import logger from "./logger";

export default applyMiddleware(checkAuthedUser, thunk, logger);
