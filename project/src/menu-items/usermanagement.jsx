// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const usermanagement = {
  id: 'usermanagement',
  title: 'User Management',
  type: 'group',
  children: [
     {
      id: 'adminuser',          // unique id for item
      title: 'Admin User',      // sidebar pe dikhne wala naam
      type: 'item',             // single clickable item
      url: '/usermanagement/admin-users', 
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
    },
    {
      id: 'merchantuser',
      title: 'Merchant User',
      type: 'item',
      url: '/usermanagement/merchant-user',
      icon: icons.ProfileOutlined,
      target: true
    },
    {
      id: 'pspuser',
      title: 'PSP User',
      type: 'item',
      url: '/usermanagement/psp-user',
      icon: icons.ProfileOutlined,
      target: true  
    },
    {
      id: 'ReferralUser',
      title: 'Referral User',
      type: 'item',
      url: '/usermanagement/referral-user',
      icon: icons.ProfileOutlined,
      target: true
    },
    {
      id: 'Rolepermission',
      title: 'Roles and Permissions',
      type: 'item',
      url: '/usermanagement/rolepermission',
      icon: icons.ProfileOutlined,
      target: true
    }
    
  ]
};

export default usermanagement;
