import { ReactElement } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { rootStateSelector } from "../store/posts-slice";

const RootStatePosts = (): ReactElement => {
  console.log("RootStatePosts rendering");
  const {
    posts: { numberOf },
  } = useTypedSelector(rootStateSelector);
  return (
    <div>
      <h1>Root State Posts</h1>
      <div>Value: {numberOf}</div>
    </div>
  );
};

export default RootStatePosts;
