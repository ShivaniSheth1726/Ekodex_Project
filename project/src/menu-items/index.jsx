// project import
import dashboard from './dashboard';
import transaction from './transaction';
import report from './report';
import configuration from './configuration';
import page from './page';
import billing from './billing';
import custinvoice from './custinvoice';   
import antifraud from './antifraud';   
import queue from './queues';
import schedule from './schedule';   
import declineReason from './declineReason';
import credit from './credit';
import support from './support';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, transaction, report, configuration, page, billing, custinvoice, antifraud, queue, schedule, declineReason, credit, support]
};

export default menuItems;
