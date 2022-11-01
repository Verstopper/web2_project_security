import { React, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Danger = () => {
  const { isAuthenticated } = useAuth0();
  const [text, setText] = useState("");
  return (
    <>
      {isAuthenticated && (
        <div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div dangerouslySetInnerHTML={{ __html: text }}></div>
        </div>
      )}
    </>
  );
};

export default Danger;
