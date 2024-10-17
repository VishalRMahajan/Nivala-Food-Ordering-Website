import React, { useState } from 'react';
import './UpdatePromoCode.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdatePromoCode = ({ promo, onClose, url }) => {
  const [promoCode, setPromoCode] = useState(promo.promoCode);
  const [discount, setDiscount] = useState(promo.discount);
  const [expiryDate, setExpiryDate] = useState(promo.expiryDate);
  const [isActive, setIsActive] = useState(promo.isActive);
  const [discountType, setDiscountType] = useState(promo.discountType);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${url}/api/promo/update`, {
        promoId: promo._id,
        promoCode,
        discount,
        expiryDate,
        isActive,
        discountType,
      });
      if (response.data.success) {
        toast.success('Promo code updated successfully');
        onClose();
      } else {
        toast.error('Failed to update promo code');
      }
    } catch (error) {
      toast.error('Error updating promo code');
      console.error('Error updating promo code:', error);
    }
  };
  
  const deletePromo = async () =>{
    try {
      const response = await axios.post(`${url}/api/promo/delete`, {
        promoCode : promoCode
      });
      console.log(promoCode)
      if (response.data.success) {
        toast.success('Promo code deleted successfully');
        onClose();
      } else {
        toast.error('Failed to delete promo code');
      }
    } catch (error) {
      toast.error('Error deleting promo code');
      console.error('Error deleting promo code:', error);
    }
  }

  return (
    <div className="promo-popup">
      <div className="promo-popup-container">
        <h3>Update Promo Code</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="promoCode">Promo Code</label>
            <input
              type="text"
              id="promoCode"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="discount">Discount</label>
            <input
              type="number"
              id="discount"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="date"
              id="expiryDate"
              value={new Date(expiryDate).toISOString().split('T')[0]}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="isActive">Active</label>
            <select
              id="isActive"
              value={isActive}
              onChange={(e) => setIsActive(e.target.value === 'true')}
              required
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="discountType">Discount Type</label>
            <select
              id="discountType"
              value={discountType}
              onChange={(e) => setDiscountType(e.target.value)}
              required
            >
              <option value="percentage">Percentage</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="form-actions">
            <button type="submit" className="update-button">Update</button>
            <button type="button" className="delete-button" onClick={deletePromo} >Delete</button>
            <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePromoCode;