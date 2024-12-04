import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Typography } from "@mui/material";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Stack spacing={2} direction={"column"}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Count: {count}
        </Typography>
        <Stack spacing={2} direction={"row"}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green",
              fontSize: "1rem",
              fontWeight: "600",
            }}
            onClick={() => setCount(count + 1)}
          >
            +
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              fontSize: "1rem",
              fontWeight: "600",
            }}
            onClick={() => setCount(count - 1)}
          >
            -
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "blue",
              fontSize: "1rem",
              fontWeight: "600",
            }}
            onClick={() => setCount(0)}
            disabled={count == 0}
          >
            Reset
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}

export default Counter;
