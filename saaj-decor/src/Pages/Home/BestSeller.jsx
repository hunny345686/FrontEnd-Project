import React from "react";
import styled from "styled-components";
import Title from "./Title";

function BestSeller() {
  let data = [
    {
      id: 1,
      img: "https://saajdecor.com/wp-content/uploads/2022/09/resize_8-1.jpg",
      productName: "Original Gond Handmade Painting",
      productPrice: 899.0,
    },

    {
      id: 2,
      img: "https://saajdecor.com/wp-content/uploads/2022/09/resize_8-1.jpg",
      productName: "Grazing Original Gond Handmade Painting",
      productPrice: 844.0,
    },
    {
      id: 3,
      img: "https://saajdecor.com/wp-content/uploads/2022/09/resize_8-1.jpg",
      productName: " Gond Handmade Painting",
      productPrice: 9999.0,
    },
    {
      id: 4,
      img: "https://saajdecor.com/wp-content/uploads/2022/09/resize_8-1.jpg",
      productName: "Handmade Painting Deer Grazing Original Gond",
      productPrice: 444.0,
    },
    {
      id: 1,
      img: "https://saajdecor.com/wp-content/uploads/2022/09/resize_8-1.jpg",
      productName: "Painting Deer Grazing Original Gond Handmade",
      productPrice: 7868.0,
    },
  ];
  return (
    <BestSellerSection>
      <div className="container">
        <div className="uperSection">
          <Title title="Contemporary Wall Art For Feel-Good Spaces" />
          <p>
            At Saaj, we design trendsetting wall art for cozy spaces that
            invites and inspires. We strongly believe in constructing simple
            comforts at home with nature-inspired color palettes, laid-back
            styles, and aesthetic patterns through premium artworks that look
            and feel personal to you.
          </p>
          <Title title="Best Sellers" />
        </div>
        <div className="lowerSection"></div>
      </div>
    </BestSellerSection>
  );
}

const BestSellerSection = styled.section`
  .uperSection {
    text-align: center;
    p {
      padding: 30px;
      line-height: 1.5;
    }
  }
  .lowerSection {
  }
`;

export default BestSeller;
