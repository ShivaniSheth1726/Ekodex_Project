// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const transaction = {
  id: 'transaction',
  title: 'All Transactions',
  type: 'group',
  children: [
    {
      id: 'upi',
      title: 'UPI',
      type: 'item',
      url: '/transaction/upi-transaction',
      icon: icons.ProfileOutlined,
      target: true
    },
    {
      id: 'card',
      title: 'card',
      type: 'item',
      url: '/transaction/card-transaction',
      icon: icons.ProfileOutlined,
      target: true
    }
  
    
  ]
};

export default transaction;
