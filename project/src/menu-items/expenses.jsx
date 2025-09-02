// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const expenses = {
  id: 'expenses',
  title: 'Expenses',
  type: 'group',
  children: [
     {
      id: 'expense',          // unique id for item
      title: 'Expense',      // sidebar pe dikhne wala naam
      type: 'item',             // single clickable item
      url: '/expenses/expenses',
      icon: icons.ProfileOutlined,
      target: true              // open in same tab (true) ya naya tab (false)
    },
      
 
   
    
  ]
};

export default expenses;
