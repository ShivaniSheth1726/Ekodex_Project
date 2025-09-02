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
import payments from './payments';
import invoices from './invoices';  
import expenses from './expenses';
import developer from './developer';
import riskmanagement from './risk-management';
import notification from './notification';
import master from './master';
import other from './other';


// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, usermanagement, pendingapproval, transaction, payouts, settlements, connector, reports, payments, invoices, expenses, developer, riskmanagement, notification, master, support, other,  pages, utilities, ]
};

export default menuItems;
