// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const transaction = {
  id: 'transaction',
  title: 'transaction',
  type: 'group',
  children: [
    {
      id: 'transaction',
      title: 'Transactions',
      type: 'item',
      url: '/transaction/transaction',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default transaction;
