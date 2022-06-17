import {
  TOKEN_FAIL,
  TOKEN_LOADING,
  TOKEN_SUCCESS,
  TokenDispatchTypes,
} from "./actionTypes";
import jwt_decode, { JwtPayload } from "jwt-decode";

interface DecodedTokenI {
  tokenNode: string | undefined
  token: string | undefined;
  id: number | undefined;
}

interface DefaultStateI extends DecodedTokenI {
  loading: boolean;
}

const decodedToken = (): DecodedTokenI => {
  const token = localStorage.getItem("@Babyshower: token");
  const tokenNode = localStorage.getItem("@Babyshowe: tokenNode")
  if (token && tokenNode) {
    const decoded = jwt_decode<JwtPayload>(token);

    return {
      id: (decoded.sub as any)?.id,
      token,
      tokenNode
    };
  }
  return { token: undefined, id: undefined, tokenNode: undefined };
};

const defaultState: DefaultStateI = {
  ...decodedToken(),
  loading: false,
};

const tokenReducer = (state = defaultState, action: TokenDispatchTypes) => {
  switch (action.type) {
    case TOKEN_FAIL:
      return { ...defaultState, loading: false };
    case TOKEN_LOADING:
      return { ...defaultState, loading: true };
    case TOKEN_SUCCESS:
      return {
        loading: false,
        token: action.payload.access_token,
        tokenNode: action.payload.access_token_node,
        id: action.payload.id,
      };
    default:
      return state;
  }
};

export default tokenReducer;
