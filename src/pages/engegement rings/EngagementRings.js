import React from "react";
import Header from "../../components/Header";
import Row from "../../components/Row";
import Quote from "../../components/Quote";
import Card from "../../components/Card";
function EngagementRings() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="cont-head">Engagement Rings</h1>

        <Row
          imgUrl="jwellery-3.jpg"
          text1="Our team specializes in designing and crafting complex custom jewelry in gold or platinum. Our 3D designers can work with even the most complex ideas and create a digital model for you to approve before committing to production."
          text2="More and more consumers are seeking out custom and unique jewelry, so it's important to include products that aren't found in other stores."
        />

        <Row
          imgUrl="jwellery-6.jpg"
          text1="Everyone knows that the jewellery industry is highly competitive. It takes just the right measure of innovation, quality and determination to succeed. But producing the perfect product can use up precious time and resources. Working with NaamNYC allows you to easily expand your jewelry inventory and grow your business."
          text2=""
          heading={true}
          reverse={true}
        />

        <Row
          imgUrl="jwellery-1.jpg"
          text1="We work with you to make sure your jewelry is produced exactly as your specify and with impeccable standards. We can manufacture a unique collection for your store, or even work with custom orders for your customers."
          text2="NaamNYC is your one-stop shop for all your manufacturing needs."
        />

        <Quote />

        <div className="row">
          <Card title="Custom Jewellery" url="/custom-jwellery" imgUrl="custom-jwel1.jpg" />
          <Card title="Jewellery Manufacturing" url="/jwellery-manufacturing" imgUrl="manufacturing.jpg" />
        </div>

        <div className="back-home">
          <div className="navbar-contact">
            <a href="/" className="contact-button">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EngagementRings;
