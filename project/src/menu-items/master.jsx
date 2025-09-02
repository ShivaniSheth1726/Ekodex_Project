// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const master = {
  id: 'master',
  title: 'Master',
  type: 'group',
  children: [
     {
      id: 'agreement',          // unique id for item
      title: 'Agreement',       // sidebar pe dikhne wala naam
      type: 'item',             // single clickable item
      url: '/master/agreement', 
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
    },
    {
      id: 'business',          // unique id for item
      title: 'Business Sizes',       // sidebar pe dikhne wala naam
      type: 'item',             // single clickable item
      url: '/master/business', 
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
    },
    {
      id: 'crypto',
      title: 'Crypto Wallets',
      type: 'item',
      url: '/master/crypto',
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
    },
    {
      id: 'feature',
      title: 'Feature',
      type: 'item',
      url: '/master/feature',
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
    },
    {
      id: 'Industry',
      title: 'Industry',
      type: 'item',
      url: '/master/industries',
      icon: icons.ProfileOutlined,
      target: true              
    },
    {
      id: 'integration',
      title: 'Integration',
      type: 'item',
      url: '/master/integration',
      icon: icons.ProfileOutlined,
      target: true             
    },
    {
      id: 'payment-method',
      title: 'Payment Method',
      type: 'item',
      url: '/master/payment-method',
      icon: icons.ProfileOutlined,
      target: true             
    },
    {
      id: 'payment-option',
      title: 'Payment Option',
      type: 'item',
      url: '/master/payment-option',
      icon: icons.ProfileOutlined,
      target: true
    },
    {
      id: 'plugin',
      title: 'Plugin',
      type: 'item',
      url: '/master/plugin',
      icon: icons.ProfileOutlined,      
      target: true
    },
    {
      id: 'solution',
      title: 'Solution',
      type: 'item',
      url: '/master/solution',
      icon: icons.ProfileOutlined,
      target: true
    },
    {
      id: 'required',
      title: 'Required',
      type: 'item',
      url: '/master/required',
      icon: icons.ProfileOutlined,
      target: true
    }
  ]
};

export default master;
