import React, { useState } from 'react';
import './AddPromoCode.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddPromoCode = ({ onClose, url }) => {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [discountType, setDiscountType] = useState('percentage');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/promo/add`, {
        promoCode,
        discount,
        expiryDate,
        isActive,
        discountType,
      });
      if (response.data.success) {
        toast.success('Promo code added successfully');
        onClose(); // Call the onClose function to close the popup and reload promo codes
      } else {
        toast.error('Failed to add promo code');
      }
    } catch (error) {
      toast.error('Error adding promo code');
      console.error('Error adding promo code:', error);
    }
  };

  return (
    <div className="gateway-popup">
      <div className="gateway-popup-container">
        <h3>Add Promo Code</h3>
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
              value={expiryDate}
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
            <button type="submit" className="add-button">Add</button>
            <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPromoCode;