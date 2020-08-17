import { dataAction } from "../actions";
import { COMMENTS } from "../constants";

export type CommentType = {
  postId: number;
  id: number;
  name: string;
  body: string;
  email: string;
  isCard: boolean;
};

export type dataStateType = {
  comments: { [key: string]: CommentType };
}

const initialState: dataStateType = {
  comments: {}
}

export const dataReducer = (state: dataStateType = initialState, { type, payload }: dataAction) => {

  switch (type) {
    case COMMENTS.set:
      return { ...state, comments: { ...state.comments, ...payload } }
    case COMMENTS.get:
    default:
      return state;
  }

}