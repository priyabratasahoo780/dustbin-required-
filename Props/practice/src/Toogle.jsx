import { useState } from "react";
export default function Toogle() {
  const [see, setSee] = useState(true);
  return (
    <div>
      <button onClick = {() => setSee(!see)}>
        {see ? "Hide":"Show"}
      </button>
      {see && <h1>Hello</h1>}
    </div>
  )
}
