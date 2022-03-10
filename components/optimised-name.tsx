import { ReactElement } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { nameSelector } from "../store/user-slice";

const OptimisedName = (): ReactElement => {
  console.log("OptimisedName rendering");
  const name = useTypedSelector(nameSelector);
  return (
    <div>
      <h1>Optimised Name Reader</h1>
      <div>Value: {name}</div>
    </div>
  );
};

export default OptimisedName;
