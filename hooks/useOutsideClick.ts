import React, { useEffect } from "react";

const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  exceptionId: string,
  handler: (value: React.SetStateAction<boolean>) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        !ref.current ||
        ref.current.contains(event?.target as Node) ||
        (event.target as HTMLElement)?.id === exceptionId
      ) {
        return;
      }
      handler(false);
    };

    document.addEventListener("mousedown", listener);
    // document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      //   document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, exceptionId]);
};

export default useOutsideClick;
