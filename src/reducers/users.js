import { GET_USERS, SAVE_ANSWER } from '../actions/users';
export default function users(state={}, action) {
  switch(action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users
      }
    case SAVE_ANSWER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
    default:
      return state;
  }
}