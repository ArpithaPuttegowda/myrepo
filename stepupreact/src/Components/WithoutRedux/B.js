import React, {useRef} from "react";

export const B = ({f2}) => {
  const locRef = useRef();
  const handleLoc = () => {
    let loc = locRef.current.value;
    f2(loc);
  };
  return (
    <div>
      <input ref={locRef} />
      <button onClick={handleLoc}>Loc</button>
    </div>
  );
};
