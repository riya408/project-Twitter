import React, { useState } from "react";

export default function FollowBtn({ id, style }) {
  const [isfollow, setIsFollow] = useState(false);
  function handleClick() {
    setIsFollow(!isfollow);
  }

  return (
    <button onClick={handleClick} style={style}>
      {isfollow ? "Following" : "Follow"}
    </button>
  );
}
