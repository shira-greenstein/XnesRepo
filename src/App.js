//React
import * as React from "react";
// import { useEffect } from "react";

//Redux
// import { useDispatch } from "react-redux";

//Route
// import { Route, Routes } from "react-router-dom";

//Component

//Style
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Registration from "./component/registration/Registration";
// import { useNavigate } from "react-router-dom";

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  // const navigate = useNavigate();

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl">
          <Registration />
          {/* <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes> */}
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
