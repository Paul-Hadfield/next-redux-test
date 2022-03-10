import { ReactElement } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { userSelector } from "../store/user-slice";

const UnoptimisedName = (): ReactElement => {
  console.log("UnoptimisedName rendering");
  const { name } = useTypedSelector(userSelector);
  return (
    <div>
      <h1>Unoptimised Name Reader</h1>
      <div>Value: {name}</div>
    </div>
  );
};

export default UnoptimisedName;
