import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
export default function StarRating() {
  const [value, setValue] = React.useState(5);
  return (
    <Box
      sx={{
        "& > legend": { mt: 1 },
      }}
    >
      <Typography component="legend"></Typography>
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
}