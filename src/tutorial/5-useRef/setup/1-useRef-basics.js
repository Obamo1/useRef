import React, { useEffect, useRef } from "react";

function UseRefBasics () {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  useEffect (() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });
  return (
    <>
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input type="text" ref={refContainer} />
      </div>
      <button type="button" className="btn">submit</button>
    </form>
    </>
  );
};
export default UseRefBasics;