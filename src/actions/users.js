export const GET_USERS = "GET_USERS";

export function getUser(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function saveQuestionAnswer({ authedUser, qid, answer }) {
  return {
    type: "SAVE_ANSWER",
    authedUser,
    qid,
    answer,
  };
}