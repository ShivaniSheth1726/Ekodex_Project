// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pendingapproval = {
  id: 'pendingapproval',
  title: 'Pending For Approval',
  type: 'group',
  children: [
    {
      id: 'pendingapproval',
      title: 'Pending Approval',
      type: 'item',
      url: '/approval/pending-approval',
      icon: icons.ProfileOutlined,
      target: true
    }
    
  ]
};

export default pendingapproval;
