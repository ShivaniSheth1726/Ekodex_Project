import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

// render- Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));

// render - color
// const Color = Loadable(lazy(() => import('pages/component-overview/color')));
// const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
// const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));

// render - transaction
const Transaction = Loadable(lazy(() => import('pages/transaction/transaction')));

// render - report
const Sales = Loadable(lazy(() => import('pages/report/sales')));
const Credit = Loadable(lazy(() => import('pages/report/credits')));
const Chargebacks = Loadable(lazy(() => import('pages/report/chargebacks')));
const ChargebackAlerts = Loadable(lazy(() => import('pages/report/chargebackalerts')));
const Refunds = Loadable(lazy(() => import('pages/report/refund')));
const Frauds = Loadable(lazy(() => import('pages/report/frauds')));
const Payments = Loadable(lazy(() => import('pages/report/payment')));
const CountrySales = Loadable(lazy(() => import('pages/report/countrysales')));


//render - configuration
const Currency = Loadable(lazy(() => import('pages/configuration/currency')));
const Business = Loadable(lazy(() => import('pages/configuration/business')));
const Companies = Loadable(lazy(() => import('pages/configuration/companies')));
const Mrp = Loadable(lazy(() => import('pages/configuration/mrp')));
const Merchants = Loadable(lazy(() => import('pages/configuration/merchants')));
const Mid = Loadable(lazy(() => import('pages/configuration/mid')));
const MechanicalMapping = Loadable(lazy(() => import('pages/configuration/merchantmapping')));
const MerchantCard = Loadable(lazy(() => import('pages/configuration/merchantcard')));
const PaymentMethod = Loadable(lazy(() => import('pages/configuration/paymentform')));
const Branding = Loadable(lazy(() => import('pages/configuration/branding')));
const Custom = Loadable(lazy(() => import('pages/configuration/custom')));
const NewCustom = Loadable(lazy(() => import('pages/configuration/newcustom')));
const Protocol = Loadable(lazy(() => import('pages/configuration/protocol')));

// render - billing
const Fees = Loadable(lazy(() => import('pages/billing/fees')));  
const BillingMerchants = Loadable(lazy(() => import('pages/billing/merchantdashboard')));
const Merchantsettlement = Loadable(lazy(() => import('pages/billing/merchantsettlement')));
const Merchantsettlementlist = Loadable(lazy(() => import('pages/billing/merchantsettlementlist')));
const BillingMrp = Loadable(lazy(() => import('pages/billing/merchantmrp')));
const MrpFeeSetup = Loadable(lazy(() => import('pages/billing/mrpfeesetup')));
const MrpSettlement = Loadable(lazy(() => import('pages/billing/mrpsettlement')));  
const MrpSettlementList = Loadable(lazy(() => import('pages/billing/mrpsettlementlist')));

// render - customer invoice
const InvoiceList = Loadable(lazy(() => import('pages/custinvoice/invoicelist')));
const ItemList = Loadable(lazy(() => import('pages/custinvoice/itemlist')));
const CustomerList = Loadable(lazy(() => import('pages/custinvoice/customerlist')));

// render - queue
const CaptureRequest = Loadable(lazy(() => import('pages/queue/capturerequest')));
const ChargebackRequest = Loadable(lazy(() => import('pages/queue/chargebackrequest')));
const Refund = Loadable(lazy(() => import('pages/queue/refund')));
const CreditRequest = Loadable(lazy(() => import('pages/queue/creditrequest')));

// render - antifraud
const Plans = Loadable(lazy(() => import('pages/antifraud/plans')));
const BlacklistCard = Loadable(lazy(() => import('pages/antifraud/blacklistcard')));
const BlacklistBin = Loadable(lazy(() => import('pages/antifraud/blacklistbin')));
const BlacklistIp = Loadable(lazy(() => import('pages/antifraud/blacklistip')));
const BlacklistEmail = Loadable(lazy(() => import('pages/antifraud/blacklistemail')));
// const BlacklistName = Loadable(lazy(() => import('pages/antifraud/blacklistname')));
const BlacklistCardMask = Loadable(lazy(() => import('pages/antifraud/blacklistcardmask')));
const BlacklistGrp = Loadable(lazy(() => import('pages/antifraud/blacklistgrp')));
const BlacklistGeolocation = Loadable(lazy(() => import('pages/antifraud/blacklistgeolocation')));
const WhitelistCard = Loadable(lazy(() => import('pages/antifraud/whitelistcard')));
const WhitelistIp = Loadable(lazy(() => import('pages/antifraud/whitelistip')));
const WhitelistEmail = Loadable(lazy(() => import('pages/antifraud/whitelistemail')));
const WhitelistGrp = Loadable(lazy(() => import('pages/antifraud/whitelistgrp')));
const WhitelistCustom = Loadable(lazy(() => import('pages/antifraud/whitelistcustom')));
const WhitelistCardMask = Loadable(lazy(() => import('pages/antifraud/whitelistcardmask')));

// render - schedule
const Recurring = Loadable(lazy(() => import('pages/schedule/recurring')));
const Invoice = Loadable(lazy(() => import('pages/schedule/invoice')));
const Retry = Loadable(lazy(() => import('pages/schedule/retry')));

// render - declinereason
const Unknown = Loadable(lazy(() => import('pages/declinereason/unknown')));
const Translate = Loadable(lazy(() => import('pages/declinereason/translate')));
const Group = Loadable(lazy(() => import('pages/declinereason/group')));
const Category = Loadable(lazy(() => import('pages/declinereason/category')));

const MainRoutes = {
  path: '/',
  element: <DashboardLayout />, // sidebar layout
  children: [
    {
      path: 'dashboard',
      children: [
        { path: 'default', element: <DashboardDefault /> },
        // { path: 'typography', element: <Typography /> },
        // { path: 'color', element: <Color /> },
        // { path: 'shadow', element: <Shadow /> },
      ]
    },
    {
      path: 'transaction',
      children: [
        { path: 'transaction', element: <Transaction /> },
      ]
    },
    {
      path: 'report',
      children: [
        { path: 'sales', element: <Sales /> },
        { path:'credits', element:<Credit/>},
        { path: 'chargebacks', element: <Chargebacks /> },
        { path: 'chargebackalerts', element: <ChargebackAlerts /> },
        { path: 'refund', element: <Refunds /> },
        { path: 'frauds', element: <Frauds /> },
        { path: 'payment', element: <Payments /> },
        { path: 'countrysales', element: <CountrySales /> },

      ]
    },
    {
      path: 'configuration',
      children: [
        { path: 'currency', element: <Currency /> },
        { path: 'business', element: <Business /> },
        { path: 'companies', element: <Companies /> },
        { path: 'mrp', element: <Mrp /> },
        { path: 'merchants', element: <Merchants /> },
        { path: 'mid', element: <Mid /> },
        { path: 'mechantmapping', element: <MechanicalMapping /> },
        { path: 'merchantcard', element: <MerchantCard /> },
        { path: 'paymentform', element: <PaymentMethod /> },
        { path: 'branding', element: <Branding /> },
        { path: 'custom', element: <Custom /> },
        { path: 'newcustom', element: <NewCustom /> },
        { path: 'protocol', element: <Protocol /> },

      ]
    },
    {
      path: 'billing',
      children: [
        { path: 'fees', element: <Fees /> },
        { path: 'merchantdashboard', element: <BillingMerchants /> },
        { path: 'merchantsettlement', element: <Merchantsettlement /> },
        { path: 'merchantsettlementlist', element: <Merchantsettlementlist /> },
        { path: 'merchantmrp', element: <BillingMrp /> },
        { path: 'mrpfeesetup', element: <MrpFeeSetup /> },
        { path: 'mrpsettlement', element: <MrpSettlement /> },
        { path: 'mrpsettlementlist', element: <MrpSettlementList /> },
      ]
    },
    {
      path: 'custinvoice',
      children: [
        { path: 'invoicelist', element: <InvoiceList /> },
        { path: 'itemlist', element: <ItemList /> },
        { path: 'customerlist', element: <CustomerList /> },
      ]
    },
    {
      path: 'queue',
      children: [
        { path: 'capturerequest', element: <CaptureRequest /> },
        { path: 'chargebackrequest', element: <ChargebackRequest /> },
        { path: 'refund', element: <Refund /> },
        { path: 'creditrequest', element: <CreditRequest /> },
      ]
    },
    {
      path: 'antifraud',
      children: [
        { path: 'plans', element: <Plans /> },
        { path: 'blacklistcard', element: <BlacklistCard /> },
        { path: 'blacklistbin', element: <BlacklistBin /> },
        { path: 'blacklistip', element: <BlacklistIp /> },
        { path: 'blacklistemail', element: <BlacklistEmail /> },
        // { path: 'blacklistname', element: <BlacklistName /> },
        { path: 'blacklistcardmask', element: <BlacklistCardMask /> },
        { path: 'blacklistgrp', element: <BlacklistGrp /> },
        { path: 'blacklistgeolocation', element: <BlacklistGeolocation /> },
        { path: 'whitelistcard', element: <WhitelistCard /> },
        { path: 'whitelistip', element: <WhitelistIp /> },
        { path: 'whitelistemail', element: <WhitelistEmail /> },
        { path: 'whitelistgrp', element: <WhitelistGrp /> },
        { path: 'whitelistcustom', element: <WhitelistCustom /> },
        { path: 'whitelistcardmask', element: <WhitelistCardMask /> },
      ]
    },
    {
      path: 'schedule',
      children: [
        { path: 'recurring', element: <Recurring /> },
        { path: 'invoice', element: <Invoice /> },
        { path: 'retry', element: <Retry /> },

    
      ]
    },
    {
      path: 'declinereason',
      children: [
        { path: 'unknown', element: <Unknown /> },
        { path: 'translate', element: <Translate /> },
        { path: 'group', element: <Group /> },
        { path: 'category', element: <Category /> },
      ]
    },
   
  ]
};

export default MainRoutes;