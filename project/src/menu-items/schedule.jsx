
// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const schedule = {
  id: 'group-dashboard',
  title: 'Schedule',
  type: 'group',
  children: [
    {
      id: 'recurring',
      title: 'Recurring Schedule',
      type: 'item',
      url: '/schedule/recurring',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
      
    {
      id: 'invoice',
      title: 'Invoice Schedule',
      type: 'item',
      url: '/schedule/invoice',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
      },
      {
          id: 'retry',
          title: 'Retry Schedule',
          type: 'item',
          url: '/schedule/retry',
          icon: icons.DashboardOutlined,
          breadcrumbs: false
          }
          
    
  ]
};

export default schedule;
