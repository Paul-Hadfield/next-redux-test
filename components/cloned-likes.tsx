import { ReactElement } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { clonedLikesSelector } from "../store/user-slice";

const ClonedLikes = (): ReactElement => {
  console.log("ClonedLikes rendering");
  const likes = useTypedSelector(clonedLikesSelector);
  return (
    <div>
      <h1>Cloned Likes</h1>
      <div>Value: {likes}</div>
    </div>
  );
};

export default ClonedLikes;
