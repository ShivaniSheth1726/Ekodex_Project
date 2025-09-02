// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const  developer = {
  id: 'developer',
  title: 'Developer',
  type: 'group',
  children: [
     {
      id: 'developer',          // unique id for item
      title: 'System Logs',      // sidebar pe dikhne wala naam
      type: 'item',             // single clickable item
      url: '/developer/developer',
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
    },
      
 
   
    
  ]
};

export default developer;
