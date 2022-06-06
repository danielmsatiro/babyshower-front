import {
  TOKEN_FAIL,
  TOKEN_LOADING,
  TOKEN_SUCCESS,
  TokenDispatchTypes,
} from "./actionTypes";
import jwt_decode, { JwtPayload } from "jwt-decode";

interface DecodedTokenI {
  token: string | undefined;
  id: number | undefined;
}

interface DefaultStateI extends DecodedTokenI {
  loading: boolean;
}

const decodedToken = (): DecodedTokenI => {
  const token = localStorage.getItem("@Babyshower: token");
  if (token) {
    const decoded = jwt_decode<JwtPayload>(token);
    console.log(decoded);
    return {
      id: (decoded.sub as any)?.id,
      token,
    };
  }
  return { token: undefined, id: undefined };
};

const defaultState: DefaultStateI = {
  ...decodedToken(),
  loading: false,
};

console.log(defaultState);

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
        id: action.payload.id,
      };
    default:
      return state;
  }
};

export default tokenReducer;
