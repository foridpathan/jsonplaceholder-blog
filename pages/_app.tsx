import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux-handler/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/assets/fontawesome/css/all.min.css";
import "../styles/globals.css";
import FetchData from "../components/fetchData";
import Header from "../components/header";
import Search from "../components/search";
import Footer from "../components/footer";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <FetchData>
        <Header />
        <div className="container-fluid">
          <main className="tm-main">
            <Search />
            <Component {...pageProps} />
            <Footer />
          </main>
        </div>
      </FetchData>
    </Provider>
  );
}
export default App;
