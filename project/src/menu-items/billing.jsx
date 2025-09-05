// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const billing = {
  id: 'group-dashboard',
  title: 'Billing',
  type: 'group',
  children: [
    {
      id: 'fees',
      title: 'Fee Constructor',
      type: 'item',
      url: '/billing/fees',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
      },
      {
      id: 'billingmerchants',
      title: 'Merchants Dashboard',
      type: 'item',
      url: '/billing/merchantdashboard',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
      },
      {
        id: 'billingmerchantsettlement',
        title: 'Merchant Settlement',
        type: 'item',
        url: '/billing/merchantsettlement',
        icon: icons.DashboardOutlined,
        breadcrumbs: false
      },
      {
        id: 'merchantsettlementlist',
        title: 'Merchant Settlement List',
        type: 'item',
        url: '/billing/merchantsettlementlist',
        icon: icons.DashboardOutlined,  
        breadcrumbs: false
    },
    {
      id: 'billingmrp',
      title: 'MRP',
      type: 'item',
      url: '/billing/merchantmrp',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
      },
      {
          id: 'mrpfeesetup',
          title: 'MRP Fee Setup',
          type: 'item',
          url: '/billing/mrpfeesetup',
          icon: icons.DashboardOutlined,
          breadcrumbs: false
      },
      {
          id: 'mrpsettlement',
          title: 'MRP Settlement',
          type: 'item',
          url: '/billing/mrpsettlement',
          icon: icons.DashboardOutlined,
          breadcrumbs: false
      },
      {
          id: 'mrpsettlementlist',
          title: 'MRP Settlement List',
          type: 'item',
          url: '/billing/mrpsettlementlist',
          icon: icons.DashboardOutlined,
          breadcrumbs: false
      }
  ]
};

export default billing;
