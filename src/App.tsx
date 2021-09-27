import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import './main.global.css';
import { Layout } from "./shared/Layout";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Provider } from "react-redux";
import { store } from "./shared/Store/store";

function AppComponent(){
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, [])

  return(
    <Provider store={store}>
      { isMounted && (
      <Layout>
        <Header />
        <Content />
      </Layout> )} 
    </Provider>  
  )    
}

export const App = hot( () => <AppComponent />);