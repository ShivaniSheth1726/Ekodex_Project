// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const reports = {
  id: 'reports',
  title: 'Reports',
  type: 'group',
  children: [
     {
      id: 'Admin-profit-loss',          // unique id for item
      title: 'Admin Profit',      // sidebar pe dikhne wala naam
      type: 'item',             // single clickable item
      url: '/reports/Admin-profit-loss', 
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
    },
     
      {
        id: 'merchant-turnover',          // unique id for item
        title: 'Merchant Turnover',      // sidebar pe dikhne wala naam
        type: 'item',             // single clickable item
        url: '/reports/merchant-turnover', 
        icon: icons.ProfileOutlined,
        target: true              // open in same tab (true) ya naya tab (false)
      },
    {
      id: 'merchant-transactions',          // unique id for item
      title: 'Merchant Transactions',      // sidebar pe dikhne wala naam
      type: 'item',             // single clickable item
      url: '/reports/merchant-transactions', 
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
    },
    {
      id: 'MID-summary',          // unique id for item
      title: 'MID Summary',      // sidebar pe dikhne wala naam
      type: 'item',             // single clickable item
      url: '/reports/MID-summary', 
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
    },
    {
      id: 'MID-settlement',          // unique id for item
      title: 'MID Settlement',      // sidebar pe dikhne wala naam
      type: 'item',             // single clickable item
      url: '/reports/MID-settlement', 
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
    },
    {
      id: 'transaction-summary',          // unique id for item
      title: 'Transaction Summary',      // sidebar pe dikhne wala naam
      type: 'item',             // single clickable item
      url: '/reports/transaction-summary', 
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
    },
    {
      id: 'transaction-paying-response',          // unique id for item
      title: 'Transaction Paying Response',      // sidebar pe dikhne wala naam
      type: 'item',             // single clickable item
      url: '/reports/transaction-paying-response', 
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
    },
    
      
 
   
    
  ]
};

export default reports;
