import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'fontsource-roboto';
import App from './App';
import theme from './theme';


ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={ theme }>
			<CssBaseline/>
			<App/>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
