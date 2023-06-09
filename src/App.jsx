import 'antd/dist/reset.css';
import './App.css';
import { Provider } from "react-redux";
import { useEffect, useState } from 'react';
import Router from './Router';
import MoonLoader from "react-spinners/MoonLoader";
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();
import { feedProducts } from './api';
feedProducts();


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => { setLoading(false) }, 2000)
  }, [])
  return (
    <div className='all-container'>
      {/* {
        loading ?
          <div className='loading'>
            <MoonLoader
              color={'#4fadff'}
              loading={loading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
          :
          <Provider store={store}>
            <PersistGate  persistor={persistor}>
              <Router />
            </PersistGate>
          </Provider>
      } */}
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Router />
          </PersistGate>
        </Provider>
      </QueryClientProvider>


    </div>

  );
}

export default App;
