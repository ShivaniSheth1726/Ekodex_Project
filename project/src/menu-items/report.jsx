// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const report = {
  id: 'group-dashboard',
  title: 'Report Analysis',
  type: 'group',
  children: [
    {
      id: 'sales',
      title: 'Sales',
      type: 'item',
      url: '/report/sales',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
      },
      {
      id: 'credit',
      title: 'Credit',
      type: 'item',
      url: '/report/credits',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
      },
      {
      id: 'chargebacks',
      title: 'Chargebacks',
      type: 'item',
      url: '/report/chargebacks',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
        id: 'chargebackalerts',
        title: 'Chargeback Alerts',
        type: 'item',
        url: '/report/chargebackalerts',
        icon: icons.DashboardOutlined,
        breadcrumbs: false
      },
      {
      id: 'refunds',
      title: 'Refunds',
      type: 'item',
      url: '/report/refund',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
      },
      {
      id: 'frauds',
      title: 'Frauds',
      type: 'item',
      url: '/report/frauds',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
      },
      {
      id: 'payments',
      title: 'Payments',
      type: 'item',
      url: '/report/payment',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
      },
      {
      id: 'countrysales',
      title: 'Country Sales',
      type: 'item',
      url: '/report/countrysales',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
      }
  ]
};

export default report;
