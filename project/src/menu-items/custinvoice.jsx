// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - Customer invoice  ||============================== //

const custinvoice = {
  id: 'custinvoice',
  title: 'Customer Invoices',
  type: 'group',
  children: [
    {
      id: 'invoicelist',
      title: 'Invoices List',
      type: 'item',
      url: '/custinvoice/invoicelist',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
     {
      id: 'itemlist',
      title: 'Item List',
      type: 'item',
      url: '/custinvoice/itemlist',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
      {
          id: 'customerlist',
          title: 'Customer List',
          type: 'item',
          url: '/custinvoice/customerlist',
          icon: icons.DashboardOutlined,
          breadcrumbs: false
      },
     


  ]
};

export default custinvoice;
