// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - Support ||============================== //

const support = {
  id: 'group-dashboard',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'support',
      title: 'Announcement',
      type: 'item',
      url: '/support/support',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default support;
