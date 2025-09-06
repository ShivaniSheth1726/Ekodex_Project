// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - credit ||============================== //

const credit = {
  id: 'group-dashboard',
  title: 'Credit',
  type: 'group',
  children: [
    {
      id: 'credit',
      title: 'Credit Balance',
      type: 'item',
      url: '/credit/credit',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default credit;
