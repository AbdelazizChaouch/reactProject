import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Judy vaisselle"
          price="30"
          color="Green yellow"
          badge={true}
          des="Judy vaisselle 3L, meilleur emballage 2016"
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Judy Vitres"
          price="7.5"
          color="blue"
          badge={false}
          des="Judy Vitres Triple Action : élu produit de l’année 2018"
        />
        <Product
          _id="1013"
          img={"https://www.judy.tn/wp-content/uploads/2015/11/actu2015.jpg"}
          productName="Judy toujours au top des marques tunisiennes"
          price="25.00"
          color="Mixed"
          badge={true}
          des=""
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Judy Vaisselle"
          price="15.00"
          color="yellow"
          badge={false}
          des="Lancement de Judy Vaisselle 1.25l"
        />
      </div>
    </div>
  );
};

export default BestSellers;
