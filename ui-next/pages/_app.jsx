import NextApp from 'next/app';
import store from '../redux/store';
import { ThemeProvider, createTheme, } from '@mui/material/styles';
import { Provider } from 'react-redux';

const theme = createTheme();
class App extends NextApp {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps: pageProps, };
    };

    render() {
        const { Component, pageProps, } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </ThemeProvider>
        );
    };
}; //end of the class 'App'
export default App;