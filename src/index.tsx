import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "app/providers/ThemeProvider";
import { i18n } from "shared/config";
import App from "./app/App";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
