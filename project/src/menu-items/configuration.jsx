// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const configuration = {
  id: 'group-dashboard',
  title: 'Configuration',
  type: 'group',
  children: [
    {
      id: 'currency',
      title: 'Currency Rates',
      type: 'item',
      url: '/configuration/currency',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'business',
      title: 'Business Types',
      type: 'item',
      url: '/configuration/business',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'companies',
      title: 'Companies',
      type: 'item',
      url: '/configuration/companies',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'mrp',
      title: 'MRP',
      type: 'item',
      url: '/configuration/mrp',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'merchants',
      title: 'Merchants',
      type: 'item',
      url: '/configuration/merchants',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'mid',
      title: 'MID',
      type: 'item',
      url: '/configuration/mid',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'mechantmapping',
      title: 'Merchant Mapping',
      type: 'item',
      url: '/configuration/mechantmapping',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'merchantcard',
      title: 'Merchant Card',
      type: 'item',
      url: '/configuration/merchantcard',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'paymentmethod',
      title: 'Payment Method',
      type: 'item',
      url: '/configuration/paymentform',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'branding',
      title: 'Branding',
      type: 'item',
      url: '/configuration/branding',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'custom',
      title: 'Custom Routing',
      type: 'item',
      url: '/configuration/custom',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'newcustom',
      title: 'New Custom Routing',
      type: 'item',
      url: '/configuration/newcustom',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'protocol',
      title: 'Protocol',
      type: 'item',
      url: '/configuration/protocol',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default configuration;
