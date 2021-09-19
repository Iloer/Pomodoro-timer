import React from "react";
import { hot } from "react-hot-loader/root";
import './main.global.css';
import { Layout } from "./shared/Layout";

function AppComponent(){
  return(
    <Layout>
    </Layout>    
  )    
}

export const App = hot( () => <AppComponent />);