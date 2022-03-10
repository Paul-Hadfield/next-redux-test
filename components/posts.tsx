import { ReactElement } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { numberOfPostsSelector } from "../store/posts-slice";

const Posts = (): ReactElement => {
  console.log("OptimisedPosts rendering");
  const numberOf = useTypedSelector(numberOfPostsSelector);
  return (
    <div>
      <h1>Optimised Posts</h1>
      <div>Value: {numberOf}</div>
    </div>
  );
};

export default Posts;
