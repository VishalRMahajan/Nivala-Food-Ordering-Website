import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Menu</h1>
      <p className='explore-menu-text'>Our menu offers a rich exploration of India’s diverse culinary heritage, with dishes representing the unique flavors of each state. From the vibrant, spice-laden curries of the South to the hearty, comforting dishes of the North, you can create a personalized meal by mixing and matching your favorite items. Choose from an array of regional specialties, sides, and desserts to craft a meal that suits your taste and satisfies your cravings</p>
      <h3>How to Order</h3>
      <p className='explore-menu-text'>Each item on our menu is <b>priced per serve</b>, ensuring you know exactly what you’re getting with every order. A <b>single serve</b> is designed to be part of a complete meal, allowing you to combine dishes like a main curry, bread, and dessert to create a full, satisfying experience. Prices are clearly listed so you can enjoy the convenience of customizing your meal while staying within your budget.</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className='explore-menu-list-item' key={index}>
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.name} />
              <p>{item.menu_name}</p>
            </div>

          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
