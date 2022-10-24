import React from "react";
import Header from "./Header";
import food from "../../img/1.png"
import foods from '../../img/2.png'
import Data from "../../data/data";
import './Hom.css'
import Footer from "../footer/footer ";


export default function Hom() {
    const dataItem = Data.map((item)=> {
        return(
        
            <div className="col-md-4">
            <div className="box">
            <img src={item.name} title="img"/>
            <h4>{item.title}</h4>
            <h6>{item.time}</h6>
            <p>{item.price } </p>
            <button><a href="#">  order Now </a></button>
            </div>
            </div>
         
        )
        
    })
  return (
    <div>
    <Header/>
    <section className="numbers">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h2> 1287+ </h2>
                    <h6> SAVINGS </h6>
                </div>
                <div className="col-md-3">
                    <h2> 5786+ </h2>
                    <h6> PHOTOS </h6>
                </div>
                <div className="col-md-3">
                    <h2> 1440+</h2>
                    <h6> ROCKETS </h6>
                </div>
                <div className="col-md-3">
                    <h2> 7110+ </h2>
                    <h6> GLOBES </h6>
                </div>
            </div>

        </div>
    </section>
    {/* ###################### */}
    <section className="pried">
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <img src={food} title="img"/>
            </div>
            <div className="col-md-6">
                <h2>We pride ourselves on making real food from the best ingredients.</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                <button> learn more </button>
            </div>
            </div>
        </div>

    </section>
    {/* ###################### */}
    <section className="ingred">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>We make everything by hand with the best possible ingredients.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <ul>
                        <li>Etiam sed dolor ac diam volutpat.</li>
                        <li>Erat volutpat aliquet imperdiet.</li>
                        <li>purus a odio finibus bibendum.</li>

                    </ul>
                    <button> learn more </button>
                </div>
                <div className="col-md-6">
                <img src={foods} title="img"/>
                </div>
            </div>
        </div>

    </section>
    {/* ###################### */}
    <section className="pralex">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <h2>When a man's stomach is full it makes no<br/>
                        difference whether he is rich or poor.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>
                        finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                    <a href="#"> watch our store </a>
                </div>
            </div>
        </div>
    </section>
    {/* ###################### */}
    <section className="text">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="dec">
                    <h2>Explore Our Foods</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Etiam et purus a odio finibus bibendum in sit amet leo. Mauris
                      feugiat erat tellus. Far far away, behind the word mountains, 
                      far from the countries Vokalia and Consonantia, there live the blind 
                      texts. Separated they live in Bookmarksgrove.</p>
                      </div>
                </div>
            </div>
            <div className="row">
                {dataItem}
            </div>
        </div>
    </section>
    {/* ###################### */}
    <Footer/>
     </div> 
  )
}
