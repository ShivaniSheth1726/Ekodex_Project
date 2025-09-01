// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const payouts = {
  id: 'payouts',
  title: 'Payouts',
  type: 'group',
  children: [
     {
      id: 'payouttransaction',          // unique id for item
      title: 'Payout Transaction',      // sidebar pe dikhne wala naam
      type: 'item',             // single clickable item
      url: '/payouts/payout-transaction', 
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
    },
      
    {
      id: 'payout-merchant',
      title: 'Payout Merchant',
      type: 'item',
      url: '/payouts/payout-merchant',
      icon: icons.ProfileOutlined,
      target: true
    },
   
    
  ]
};

export default payouts;
