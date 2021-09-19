import React from "react";
import { hot } from "react-hot-loader/root";
import './main.global.css';
import { Layout } from "./shared/Layout";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";

function AppComponent(){
  return(
    <Layout>
      <Header />
      <Content />
    </Layout>    
  )    
}

export const App = hot( () => <AppComponent />);