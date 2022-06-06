import { ComponentType } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";
import { RootStore } from "../Store";

interface Props extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

export const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}: Props) => {
  const accessToken = useSelector((state: RootStore): any => state.token.token);

  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!accessToken ? (
          <Component />
        ) : isPrivate ? (
          <Redirect to={"/"} />
        ) : (
          <Component />
        )
      }
    />
  );
};
