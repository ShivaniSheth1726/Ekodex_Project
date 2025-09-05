// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - Antifraud ||============================== //

const antifraud = {
  id: 'group-dashboard',
  title: 'Antifraud',
  type: 'group',
  children: [
    {
      id: 'plans',
      title: 'Plans',
      type: 'item',
      url: '/antifraud/plans',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
      },
      {
      id: 'blacklistcard',
      title: 'Blacklist Card',
      type: 'item',
      url: '/antifraud/blacklistcard',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
      },
      {
          id: 'blacklistbin',
          title: 'Blacklist BIN',
          type: 'item',
          url: '/antifraud/blacklistbin',
          icon: icons.DashboardOutlined,
          breadcrumbs: false
      },
      {
          id: 'blacklistip',
          title: 'Blacklist IP',
          type: 'item',
          url: '/antifraud/blacklistip',
          icon: icons.DashboardOutlined,
          breadcrumbs: false
      },
      {
          id: 'blacklistemail',
          title: 'Blacklist Email',
          type: 'item',
          url: '/antifraud/blacklistemail',
          icon: icons.DashboardOutlined,
          breadcrumbs: false
      },
     
      {
          id: 'blacklistcardmask',
          title: 'Blacklist Card Mask',
          type: 'item',
          url: '/antifraud/blacklistcardmask',
          icon: icons.DashboardOutlined,
          breadcrumbs: false
      },
      {
          id: 'blacklistgrp',
          title: 'Blacklist Group',
          type: 'item',
          url: '/antifraud/blacklistgrp',
          icon: icons.DashboardOutlined,
          breadcrumbs: false
      },
      {
          id: 'blacklistgeolocation',
          title: 'Blacklist Geology',
          type: 'item',
          url: '/antifraud/blacklistgeolocation',
          icon: icons.DashboardOutlined,
          breadcrumbs: false
      },
      {
          id: 'whitelistcard',
          title: 'Whitelist Card',
          type: 'item',
          url: '/antifraud/whitelistcard',
          icon: icons.DashboardOutlined,
          breadcrumbs: false
      },
      {
          id: 'whitelistip',
          title: 'Whitelist IP',
          type: 'item',
          url: '/antifraud/whitelistip',
          icon: icons.DashboardOutlined,
          breadcrumbs: false
      },
      {
          id: 'whitelistemail',
          title: 'Whitelist Email',
          type: 'item',
          url: '/antifraud/whitelistemail',
          icon: icons.DashboardOutlined,
          breadcrumbs: false
      },
      {
          id: 'whitelistgrp',
          title: 'Whitelist Group',
          type: 'item',
          url: '/antifraud/whitelistgrp',
          icon: icons.DashboardOutlined,
          breadcrumbs: false
      },
      {
          id: 'whitelistcustom',
          title: 'Whitelist Custom',
          type: 'item',
          url: '/antifraud/whitelistcustom',
          icon: icons.DashboardOutlined,
          breadcrumbs: false
      },
      {
          id: 'whitelistcardmask',
          title: 'Whitelist Card Mask',
          type: 'item',
          url: '/antifraud/whitelistcardmask',
          icon: icons.DashboardOutlined,
          breadcrumbs: false
      }
  ]
};

export default antifraud;
