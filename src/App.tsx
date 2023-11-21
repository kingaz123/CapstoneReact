import { GlobalStyle } from "./components/global-style/global-style";
import { RouterProvider } from "react-router-dom";
import { router } from "./route";

function App() {
  return (
    <>
      <GlobalStyle>
        <RouterProvider router={router} />
      </GlobalStyle>
    </>
  );
}

export default App;
