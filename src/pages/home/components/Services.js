import React from "react";
import Card from "./Card";

const Services = () => {
  return (
    <div className="services">
      <h1 className="cont-head">Our Services</h1>
      <div>
        <Card
          title={"Custom Jwellery"}
          imgUrl="custom-jwel1.jpg"
          desc="Our team specializes in designing and crafting complex custom jewelry in gold or platinum. Our 3D designers can work with even the most complex ideas and create a digital model for you to approve before committing to production. "
          url="/custom-jwellery"
        />
        <Card
          title={"Engagement Rings"}
          imgUrl="jwellery-3.jpg"
          desc="Our team of 3d modelers and jewelers can create literally any ring you can imagine, including complex designs. We're opening up our services to private clients, so you can get a beautiful, designer quality engagement ring at an affordable price."
          url="/engagement-rings"
          reverse={true}
        />
        <Card
          title={"Jwellery Manufacturing"}
          imgUrl="manufacturing.jpg"
          desc="We work with you to make sure your jewelry is produced exactly as your specify and with impeccable standards. We can manufacture a unique collection for your store, or even work with custom orders for your customers. "
          url="/jwellery-manufacturing"
        />
      </div>
    </div>
  );
};

export default Services;