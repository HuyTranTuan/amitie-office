import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
// import { Provider as ReduxProvider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

import App from "./App.jsx";
// import { store, persistor } from "./store/stores";
import i18n from "@/i18n/i18n";
import Loading from "@/components/Loading";
// import ThemeProvider from "@/components/ThemeProvider";
import ErrorBoundary from "@/components/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <ErrorBoundary>
      {/* <ReduxProvider store={store}> */}
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <Suspense fallback={<Loading />}>
            {/* <ThemeProvider /> */}
            <App />
          </Suspense>
        {/* </PersistGate> */}
      {/* </ReduxProvider> */}
    </ErrorBoundary>
  // </StrictMode>,
);
