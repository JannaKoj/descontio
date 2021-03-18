import React from "react";
import "./style.scss";
import Header from "../../components/Header";
import Categories from "../../components/Categories";
import Banner from "../../components/Banner";
import Supermarkets from "../../components/Supermarkets";
import TipsandRecepies from "../../components/TipsandRecepies";
import Flyers from "../../components/Flyers";
import Menu from "../../components/Menu";
import {Link} from "react-router-dom";

class HomeScreen extends React.Component{
  render(){
    return(
      <div className="homewrapper">
        <Header/>
        <Categories />
        <Banner />
        <Supermarkets/>
        <TipsandRecepies />
        <Flyers />
        <Menu />
      </div>
    )
  }
}
export default HomeScreen;
