import React from 'react';
import './BusinessList.css';
import Business from "../Business/Business";


const BusinessList = ({businesses}) => {
  return (
    <div className="BusinessList">
      {businesses.map(business => (
        <Business id={business.id} key={business.id} business={business} />
      ))}
    </div>
  );
};


export default BusinessList;
