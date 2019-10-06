
/**
	* Donde inicia la aplicacion
	* Comprueba la autenticacion y adiciona la configuracion del store
	*
	*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';

import Setup from './Setup';
import './theme';

const store = configureStore();
const Init = () => (
	<Provider store={ store }>
		<Setup history=""/>
	</Provider>
);

ReactDOM.render(<Init />, document.getElementById('root'));
serviceWorker.unregister();
