// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - Schedule ||============================== //

const declineReason = {
  id: 'group-dashboard',
  title: 'Decline Reason Management',
  type: 'group',
  children: [
    {
      id: 'unknown',
      title: 'Unknown ',
      type: 'item',
      url: '/declinereason/unknown',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
      },
      {
      id: 'translate',
      title: 'Translate ',
      type: 'item',
      url: '/declinereason/translate',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
      },
      {
      id: 'group',
      title: 'Group ',
      type: 'item',
      url: '/declinereason/group',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
      },
      {
          id: 'category',
          title: 'Category ',
          type: 'item',
          url: '/declinereason/category',
          icon: icons.DashboardOutlined,
          breadcrumbs: false
      }
  ]
};

export default declineReason;