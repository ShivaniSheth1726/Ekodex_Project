// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const  riskmanagement = {
  id: 'riskmanagement',
  title: '  Risk Management',
  type: 'group',
  children: [
     {
      id: 'riskmanagement',          // unique id for item
      title: '  Risk Management',      // sidebar pe dikhne wala naam
      type: 'item',             // single clickable item
      url: '/riskmanagement/riskmanagement',
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
    },
      
 
   
    
  ]
};

export default riskmanagement;
