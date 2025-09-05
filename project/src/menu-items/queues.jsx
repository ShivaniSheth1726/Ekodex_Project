// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const queue = {
  id: 'queue',
  title: 'Queues',
  type: 'group',
  children: [
    {
      id: 'capturerequest',
      title: 'Capture Request',
      type: 'item',
      url: '/queue/capturerequest',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
     {
      id: 'chargebackrequest',
      title: 'Chargeback Request',
      type: 'item',
      url: '/queue/chargebackrequest',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
     {
      id: 'refund',
      title: 'Refund ',
      type: 'item',
      url: '/queue/refund',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
      },
      {
      id: 'creditrequest',
      title: 'Credit Request',
      type: 'item',
      url: '/queue/creditrequest',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
     
  ]
};

export default queue;
