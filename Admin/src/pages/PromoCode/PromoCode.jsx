import React, { useState, useEffect } from 'react';
import './PromoCode.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import UpdatePromoCode from './UpdatePromoCode';
import AddPromoCode from './AddPromoCode';

const PromoCode = ({ url }) => {
  const [promo, setPromo] = useState([]); // Initialize as an empty array
  const [showUpdate, setShowUpdate] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState(null);

  const fetchAllPromo = async () => {
    try {
      const response = await axios.get(url + "/api/promo/all");
      if (response.data.success) {
        console.log(response.data.data);
        setPromo(response.data.data);
        toast.success("Promo Fetched Successfully");
      } else {
        toast.error("Error fetching promo");
      }
    } catch (error) {
      toast.error("Error fetching promo");
      console.error("Error fetching promo:", error);
    }
  };

  useEffect(() => {
    fetchAllPromo();
  }, [url]);

  const handleUpdate = (promo) => {
    setSelectedPromo(promo);
    setShowUpdate(true);
  };

  const handleCloseUpdate = () => {
    setShowUpdate(false);
    fetchAllPromo(); 
  };

  const handleCloseAdd = () => {
    setShowAdd(false);
    fetchAllPromo(); 
  };

  return (
    <div className='promo'>
      <h3>Promo Codes</h3>
      <div className='promo-list'>
        {promo.map((item, index) => (
          <div key={index} className='promo-item'>
            <div>
              <p className='promo-item-code'>Promo Code: {item.promoCode}</p>
              <p className='promo-item-discount'>Discount: {item.discount}%</p>
              <p className='promo-item-expiry'>Expiry Date: {new Date(item.expiryDate).toLocaleDateString()}</p>
              <p className='promo-item-status'>Status: {item.isActive ? 'Active' : 'Inactive'}</p>
              <p className='promo-item-type'>Type: {item.discountType}</p>
            </div>
            <button className='promo-update-button' onClick={() => handleUpdate(item)}>Update Promo Code</button>
          </div>
        ))}
      </div>
      <button className='promo-add-button' onClick={() => setShowAdd(true)}>Add Promo Code</button>
      
      {showUpdate && selectedPromo && (
        <UpdatePromoCode
          promo={selectedPromo}
          onClose={handleCloseUpdate}
          url={url}
        />
      )}
      {showAdd && (
        <AddPromoCode
          onClose={handleCloseAdd}
          url={url}
        />
      )}
    </div>
  );
};

export default PromoCode;