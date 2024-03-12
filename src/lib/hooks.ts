import { useEffect, useState } from "react";
import cerbos from "./cerbos-browser";

export function useCerbos(user, resource, action) {
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const checkAuthz = async () => {
      const decision = await cerbos.checkResource({
        principal: user,
        resource: {
          id: resource.id,
          kind: "expense",
          attr: resource,
        },
        actions: [action],
      });

      setIsAllowed(decision.isAllowed(action)!);
    };

    checkAuthz();
  }, [user, resource, action]);

  return isAllowed;
}
