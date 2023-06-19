import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

function CustomPagination({ setPage, totalPage = 10 }) {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Stack spacing={2}>
          <CssBaseline />
          <Pagination
            count={totalPage}
            shape="rounded"
            onChange={(e) => handlePageChange(e.target.textContent)}
            color="secondary"
            hideNextButton
            hidePrevButton
          />
        </Stack>
      </ThemeProvider>
    </div>
  );
}

export default CustomPagination;
