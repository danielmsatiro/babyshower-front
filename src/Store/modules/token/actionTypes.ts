export const TOKEN_SUCCESS = "TOKEN_SUCCESS";
export const TOKEN_LOADING = "TOKEN_LOADING";
export const TOKEN_FAIL = "TOKEN_FAIL";

export type TokenType = {
  access_token: string | undefined;
  access_token_node: string | undefined
  id: number | undefined;
};

export interface TokenSuccess {
  type: typeof TOKEN_SUCCESS;
  payload: TokenType;
}
export interface TokenLoading {
  type: typeof TOKEN_LOADING;
}

export interface TokenFail {
  type: typeof TOKEN_FAIL;
}

export type TokenDispatchTypes = TokenLoading | TokenSuccess | TokenFail;
