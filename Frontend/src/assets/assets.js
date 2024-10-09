import logo from "./logo.png";
import header_img from "./header_img.png";
import Maharashtra from "./Maharashtra.png";
import Gujarat from "./Gujarat.png";
import Tamil_Nadu from "./Tamil_Nadu.png";
import West_Bengal from "./West_Bengal.png";
import Rajasthan from "./Rajasthan.png";
import Karnataka from "./Karnataka.png";
import Madhya_Pradesh from "./Madhya_Pradesh.png";
import RestofIndia from "./RestofIndia.png";

import add_icon_white from "./add_icon_white.png";
import add_icon_green from "./add_icon_green.png";
import remove_icon_red from "./remove_icon_red.png";
import app_store from "./app_store.png";
import play_store from "./play_store.png";
import selector_icon from "./selector_icon.png";
import rating_starts from "./rating_starts.png";
import profile_icon from "./profile_icon.png";
import logout_icon from "./logout_icon.png";
import parcel_icon from "./parcel_icon.png";
import VegIcon from "./VegIcon.png";
import NonVegIcon from "./NonVegIcon.png";

export const assets = {
  logo,
  header_img,
  rating_starts,
  add_icon_green,
  add_icon_white,
  remove_icon_red,
  app_store,
  play_store,
  selector_icon,
  profile_icon,
  logout_icon,
  parcel_icon,
  VegIcon,
  NonVegIcon,
};

export const menu_list = [
  {
    menu_name: "Maharashtra",
    menu_image: Maharashtra,
  },
  {
    menu_name: "Gujarat",
    menu_image: Gujarat,
  },
  {
    menu_name: "Tamil Nadu",
    menu_image: Tamil_Nadu,
  },
  {
    menu_name: "West Bengal",
    menu_image: West_Bengal,
  },
  {
    menu_name: "Rajasthan",
    menu_image: Rajasthan,
  },
  {
    menu_name: "Karnataka",
    menu_image: Karnataka,
  },
  {
    menu_name: "Madhya Pradesh",
    menu_image: Madhya_Pradesh,
  },
  {
    menu_name: "Rest of India",
    menu_image: RestofIndia,
  },
];

export const food_list = [
    {
        _id: "1",
        name: "Kothimbir Vadi",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/07/kothimbir-vadi-recipe-5-500x500.jpg",
        price: 40,
        description: "Crispy coriander fritters.",
        category: "Maharashtra",
        serve: "1 plate (4 pieces)",
        type: "Veg"
    },
    {
        _id: "2",
        name: "Bharli Vangi",
        image: "https://www.whiskaffair.com/wp-content/uploads/2021/04/Bharli-Vangi-2-3-500x500.jpg",
        price: 50,
        description: "Stuffed eggplant curry.",
        category: "Maharashtra",
        serve: "1 bowl (200g)",
        type: "Veg"
    },
    {
        _id: "3",
        name: "Sabudana Khichdi",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/sabudana-khichdi-recipe.jpg",
        price: 60,
        description: "Pearl tapioca stir-fry.",
        category: "Maharashtra",
        serve: "1 bowl (150g)",
        type: "Veg"
    },
    {
        _id: "4",
        name: "Masala Bhat",
        image: "https://www.whiskaffair.com/wp-content/uploads/2021/05/Masale-Bhat-2-3.jpg",
        price: 55,
        description: "Spicy rice with vegetables.",
        category: "Maharashtra",
        serve: "1 bowl (200g)",
        type: "Veg"
    },
    {
        _id: "5",
        name: "Pithla",
        image: "https://ministryofcurry.com/wp-content/uploads/2022/10/Pithala3-500x375.jpg",
        price: 40,
        description: "Chickpea flour curry.",
        category: "Maharashtra",
        serve: "1 bowl (150g)",
        type: "Veg"
    },
    {
        _id: "6",
        name: "Varan Bhaat",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2013/09/varan-bhaat-recipe.jpg",
        price: 45,
        description: "Lentil stew with rice.",
        category: "Maharashtra",
        serve: "1 plate",
        type: "Veg"
    },
    {
        _id: "7",
        name: "Sol Kadhi",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2012/03/sol-kadhi-recipe-1.jpg",
        price: 30,
        description: "Cool kokum coconut drink.",
        category: "Maharashtra",
        serve: "1 glass (200ml)",
        type: "Veg"
    },
    {
        _id: "8",
        name: "Khaman Dhokla",
        image: "https://shwetainthekitchen.com/wp-content/uploads/2023/04/instant-khaman-dhokla-recipe.jpg",
        price: 25,
        description: "Steamed gram flour cake.",
        category: "Gujarat",
        serve: "1 plate (4 pieces)",
        type: "Veg"
    },
    {
        _id: "9",
        name: "Undhiyu",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQs9Er3HuyzTE3nJBsUk_pcoDkEEpuhhTmaw&s",
        price: 70,
        description: "Mixed vegetable curry.",
        category: "Gujarat",
        serve: "1 bowl (200g)",
        type: "Veg"
    },
    {
        _id: "10",
        name: "Shev Tameta",
        image: "https://i0.wp.com/pistachiodoughnut.com/wp-content/uploads/2021/05/IMG_5233_jpg.jpg?fit=640%2C612&ssl=1",
        price: 35,
        description: "Gram flour sev with tomato.",
        category: "Gujarat",
        serve: "1 bowl (150g)",
        type: "Veg"
    },
    {
        _id: "11",
        name: "Khandvo",
        image: "https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2023/09/Gujarati-Handvo-H1.jpg?fit=600%2C904&ssl=1",
        price: 20,
        description: "Savory rice-lentil cake.",
        category: "Gujarat",
        serve: "1 slice (100g)",
        type: "Veg"
    },
    {
        _id: "12",
        name: "Gujarati Kadhi",
        image: "https://pipingpotcurry.com/wp-content/uploads/2021/08/Gujarati-Kadhi-Piping-Pot-Curry-2.jpg",
        price: 25,
        description: "Sweet and tangy yogurt curry.",
        category: "Gujarat",
        serve: "1 bowl (150ml)",
        type: "Veg"
    },
    {
        _id: "14",
        name: "Idli",
        image: "https://www.awesomecuisine.com/wp-content/uploads/2007/11/Idli-with-sambar-and-chutney.jpg",
        price: 20,
        description: "Steamed rice cakes.",
        category: "Tamil Nadu",
        serve: "1 plate (3 pieces)",
        type: "Veg"
    },
    {
        _id: "15",
        name: "Masala Dosa",
        image: "https://static.toiimg.com/thumb/54289752.cms?width=1200&height=900",
        price: 30,
        description: "Stuffed crispy crepe.",
        category: "Tamil Nadu",
        serve: "1 piece (200g)",
        type: "Veg"
    },
    {
        _id: "16",
        name: "Sambar",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCiBUkW0EI6K4jvHb7wERoiej0KtPylhkNUg&s",
        price: 20,
        description: "Spicy lentil soup.",
        category: "Tamil Nadu",
        serve: "1 bowl (150ml)",
        type: "Veg"
    },
    {
        _id: "17",
        name: "Pongal",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/pongal-ven-pongal-500x500.jpg",
        price: 25,
        description: "Savory rice-lentil dish.",
        category: "Tamil Nadu",
        serve: "1 bowl (150g)",
        type: "Veg"
    },
    {
        _id: "18",
        name: "Kootu",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCrO1g9yZLA607eh-pruMOtwWYq57rthTJoQ&s",
        price: 30,
        description: "Mixed vegetable stew.",
        category: "Tamil Nadu",
        serve: "1 bowl (200g)",
        type: "Veg"
    },
    {
        _id: "19",
        name: "Kara Kuzhambu",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSum5XLR5yN_XpBkCth0D1w1JVUFxkGKCPP2w&s",
        price: 35,
        description: "Tangy and spicy curry.",
        category: "Tamil Nadu",
        serve: "1 bowl (150ml)",
        type: "Veg"
    },
    {
        _id: "20",
        name: "Kosha Mangsho",
        image: "https://www.whiskaffair.com/wp-content/uploads/2021/01/Kosha-Mangsho-2-3.jpg",
        price: 80,
        description: "Spicy mutton curry.",
        category: "West Bengal",
        serve: "1 bowl (200g)",
        type: "Non-Veg"
    },
    {
        _id: "21",
        name: "Shorshe Ilish",
        image: "https://kitchenofdebjani.com/wp-content/uploads/2023/08/Ilish-Macher-Sorshe-bata-diye-Jhal.jpg",
        price: 100,
        description: "Hilsa fish in mustard gravy.",
        category: "West Bengal",
        serve: "1 piece (150g)",
        type: "Non-Veg"
    },
];

  
