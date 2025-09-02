// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const  notification = {
  id: 'notification',
  title: 'Notifications',
  type: 'group',
  children: [
     {
      id: 'notification',          // unique id for item
      title: 'Notifications',      // sidebar pe dikhne wala naam
      type: 'item',             // single clickable item
      url: '/notification/notification',
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
    },
      
 
   
    
  ]
};

export default notification;
