import React, { useCallback, useState } from "react";

const Div = ({ cb, children }) => {
  return (
    <div
      style={{
        marginTop: "33px",
        padding: "15px",
        background: '#eee'
      }}
    >
      {children}
      <button onClick={cb}>click</button>
    </div>
  );
};

const MemoizedDiv = React.memo(Div);

export const App = () => {
  const [state, setState] = useState(1);
  const someCallback = () => {
    console.log("callback invoked");
  };

  const memoizedCallback = useCallback(() => {
    console.log("callback invoked");
  }, []);

  return (
    <main style={{ paddingBlock: '50px' }}>
      <div>
        this change state
        <button onClick={() => setState(state + 1)}>change {state} + 1</button>
      </div>

      <Div cb={someCallback}>simple with default callback</Div>
      <Div cb={memoizedCallback}>simple with useCallback</Div>
      <MemoizedDiv cb={memoizedCallback}>memo with useCallback</MemoizedDiv>
    </main>
  );
};
  