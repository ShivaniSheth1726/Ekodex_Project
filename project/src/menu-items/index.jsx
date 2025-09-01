// project import
import dashboard from './dashboard';
import pages from './page';
import utilities from './utilities';
import support from './support';     
import usermanagement from './usermanagement';
import pendingapproval from './pendingapproval';
import transaction from './transaction';  
import payouts from './payouts';
import settlements from './settlements';
import connector from './connector';
import reports from './reports';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, usermanagement, pendingapproval, transaction, payouts, settlements, connector, reports, pages, utilities, support]
};

export default menuItems;
