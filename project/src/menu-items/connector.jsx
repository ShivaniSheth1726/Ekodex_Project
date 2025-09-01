// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const connector = {
  id: 'connector',
  title: 'Connector',
  type: 'group',
  children: [
     {
      id: 'connectortransaction',          // unique id for item
      title: 'Connector Transaction',      // sidebar pe dikhne wala naam
      type: 'item',             // single clickable item
      url: '/connector/connector', 
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
    },
      
 
   
    
  ]
};

export default connector;
