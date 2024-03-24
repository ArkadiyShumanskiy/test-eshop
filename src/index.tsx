import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import { store, persistor } from "store/store";
import { theme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles
      styles={() => ({
        html: { height: "100%" },
        body: {
          backgroundColor: "#EAEAEA",
          height: "100%",
          "&>div#root": { height: "100%" },
        },
      })}
    />
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </StyledEngineProvider>
  </ThemeProvider>
);
