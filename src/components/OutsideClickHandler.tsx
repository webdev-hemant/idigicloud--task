import { useRef, useEffect } from "react";

function OutsideClickHandler({
  children,
  onOutsideClick,
}: {
  children: JSX.Element;
  onOutsideClick: () => void;
}) {
  const wrapperRef = useRef<any>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onOutsideClick();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick]);

  return <div ref={wrapperRef}>{children}</div>;
}

export default OutsideClickHandler;
