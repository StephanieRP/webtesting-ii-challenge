import React from "react";

export default function Display(props) {
  const { ballCount, strikeCount } = props;
  return (
    <div>
      <h1>Player 1</h1>
      <h3>Ball Count:{ballCount}</h3>
      <h3>Strike Count:{strikeCount}</h3>
    </div>
  );
}
