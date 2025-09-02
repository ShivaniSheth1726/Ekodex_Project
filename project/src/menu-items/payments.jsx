// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const  payments = {
  id: 'payments',
  title: 'Payments',
  type: 'group',
  children: [
     {
      id: 'payments',          // unique id for item
      title: 'Payments',      // sidebar pe dikhne wala naam
      type: 'item',             // single clickable item
      url: '/payments/payments',
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
    },
      
 
   
    
  ]
};

export default payments;
