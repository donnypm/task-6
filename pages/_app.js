import "../styles/globals.scss";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "../redux/store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

export default MyApp;
