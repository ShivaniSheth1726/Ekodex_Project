// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const settlements = {
  id: 'settlements',
  title: 'Settlements',
  type: 'group',
  children: [
     {
      id: 'settlement',          // unique id for item
      title: 'Settlement',      // sidebar pe dikhne wala naam
      type: 'item',             // single clickable item
      url: '/settlements/settlement',
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
    },
      
    {
      id: 'settlement-history',
      title: 'Settlement History',
      type: 'item',
      url: '/settlements/settlement-history',
      icon: icons.ProfileOutlined,
      target: true
    },
    {
      id: 'bank-settlement',
      title: 'Bank Settlement',
      type: 'item',
      url: '/settlements/bank-settlement',
      icon: icons.ProfileOutlined,
      target: true
    },
    {
      id: 'settlementcalculator',
      title: 'Settlement Calculator',
      type: 'item',
      url: '/settlements/settlementcalculator',
      icon: icons.ProfileOutlined,
      target: true
    },
    {
      id: 'settlement-calculatorV2',
      title: 'Settlement Calculator V2',
      type: 'item',
      url: '/settlements/settlement-calculatorV2',
      icon: icons.ProfileOutlined,
      target: true
    },
    {
      id: 'rolling-reserve',
      title: 'Rolling Reserve',
      type: 'item',
      url: '/settlements/rolling-reserve',
      icon: icons.ProfileOutlined,
      target: true
    },
    {
      id: 'merchant-fees',
      title: 'Merchant Fees',
      type: 'item',
      url: '/settlements/merchant-fees',
      icon: icons.ProfileOutlined,
      target: true
    },
    {
      id: 'auto-settlement',
      title: 'Auto Settlement',
      type: 'item',
      url: '/settlements/auto-settlement',
      icon: icons.ProfileOutlined,
      target: true
    }
    
  ]
};

export default settlements;
