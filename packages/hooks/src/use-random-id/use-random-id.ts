import * as React from "react";
import { getRandomId } from "../Utils/random-id";

export const useRandomId = (staticId?: string) => {
  const [id, setId] = React.useState(staticId);

  React.useEffect(() => {
    setId(getRandomId());
  }, [staticId]);

  return staticId || id;
};
