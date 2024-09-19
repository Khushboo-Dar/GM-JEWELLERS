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
          imgUrl="custom-jwel1.jpg"
          text1="Our team specializes in designing and crafting complex custom jewelry in gold or platinum. Our 3D designers can work with even the most complex ideas and create a digital model for you to approve before committing to production."
          text2="More and more consumers are seeking out custom and unique jewelry, so it's important to include products that aren't found in other stores."
        />

        <Row
          imgUrl="custom-jwel1.jpg"
          text1="Our team specializes in designing and crafting complex custom jewelry in gold or platinum. Our 3D designers can work with even the most complex ideas and create a digital model for you to approve before committing to production."
          text2="More and more consumers are seeking out custom and unique jewelry, so it's important to include products that aren't found in other stores."
          heading={true}
          reverse={true}
        />

        <Row
          imgUrl="custom-jwel1.jpg"
          text1="Our team specializes in designing and crafting complex custom jewelry in gold or platinum. Our 3D designers can work with even the most complex ideas and create a digital model for you to approve before committing to production."
          text2="More and more consumers are seeking out custom and unique jewelry, so it's important to include products that aren't found in other stores."
        />

        <Quote />

        <div className="row">
          <Card title="Custom Jwellery" url="#" imgUrl="custom-jwel1.jpg" />
          <Card title="Custom Jwellery" url="#" imgUrl="custom-jwel1.jpg" />
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
