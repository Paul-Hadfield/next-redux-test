import { ReactElement } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { likesSelector } from "../store/user-slice";

const Likes = (): ReactElement => {
  console.log("OptimisedLikes rendering");
  const likes = useTypedSelector(likesSelector);
  return (
    <div>
      <h1>Optimised Likes</h1>
      <div>Value: {likes}</div>
    </div>
  );
};

export default Likes;
