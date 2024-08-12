import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolor distinctio! Veniam perferendis accusamus possimus corrupti, minima voluptate cum sint architecto autem dolores, at porro quaerat, molestias rem aliquam temporibus!</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className='explore-menu-list-item' key={index}>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.name} />
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
