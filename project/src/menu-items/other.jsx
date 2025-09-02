// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const other = {
  id: 'other',
  title: 'Other',
  type: 'group',
  children: [
     {
      id: 'refund',          // unique id for item
      title: 'Refund Transactions',      // sidebar pe dikhne wala naam
      type: 'item',             // single clickable item
      url: '/other/refund', 
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
      },
      {
      id: 'chargeback',          // unique id for item
      title: 'Chargeback Transactions',      // sidebar pe dikhne wala naam
      type: 'item',             // single clickable item
      url: '/other/chargeback', 
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
      },
      {
      id: 'achieve',          // unique id for item
      title: 'All Archived Transactions',      // sidebar pe dikhne wala naam
      type: 'item',             // single clickable item
      url: '/other/achieve',
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
      },
      {
      id: 'tests',          // unique id for item
      title: 'tests',      // sidebar pe dikhne wala naam
      type: 'item',             // single clickable item
      url: '/other/tests', 
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
      }
      
    
    
  ]
};

export default other;
