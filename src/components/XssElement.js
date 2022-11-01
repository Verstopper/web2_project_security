import { React, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const XssElement = () => {
  const { isAuthenticated } = useAuth0();
  const [text, setText] = useState("");
  const [danger, setDanger] = useState(false);
  return (
    <>
      {isAuthenticated && (
        <div>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Safe</Typography>
            <Switch
              onClick={() => setDanger(!danger)}
              defaultChecked={false}
              inputProps={{ "aria-label": "ant design" }}
            />
            <Typography>Dangerous</Typography>
          </Stack>
          <textarea
            rows={8}
            cols={50}
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          {danger ? (
            <div dangerouslySetInnerHTML={{ __html: text }}></div>
          ) : (
            <div>{text}</div>
          )}
        </div>
      )}
    </>
  );
};

export default XssElement;
