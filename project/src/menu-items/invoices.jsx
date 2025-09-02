// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const  invoices = {
  id: 'invoices',
  title: 'Invoices',
  type: 'group',
  children: [
     {
      id: 'invoices',          // unique id for item
      title: 'Invoices',      // sidebar pe dikhne wala naam
      type: 'item',             // single clickable item
      url: '/invoices/invoices',
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
    },
      
 
   
    
  ]
};

export default invoices;
