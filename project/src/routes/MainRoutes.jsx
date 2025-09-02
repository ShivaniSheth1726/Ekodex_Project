import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

// render- Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));

// render - color
const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// render - admin users
const AdminUsersPage = Loadable(lazy(() => import('pages/usermanagement/admin-users')));
// render - merchant users
const MerchantUsersPage = Loadable(lazy(() => import('pages/usermanagement/merchant-user')));
// render - psp users
const PspUsersPage = Loadable(lazy(() => import('pages/usermanagement/psp-user')));
// render - referral users
const ReferralUsersPage = Loadable(lazy(() => import('pages/usermanagement/referral-user')));
// render - role and permission
const RolesPermissionPage = Loadable(lazy(() => import('pages/usermanagement/rolepermission')));

// render - pending approval
const PendingApprovalPage = Loadable(lazy(() => import('pages/approval/pending-approval')));

//render - transaction
const UpiTransactionPage = Loadable(lazy(() => import('pages/transaction/upi-transaction')));
const CardTransactionPage = Loadable(lazy(() => import('pages/transaction/card-transaction')));

//render - payouts
const PayoutTransactionPage = Loadable(lazy(() => import('pages/payouts/payout-transaction')));
const PayoutMerchantPage = Loadable(lazy(() => import('pages/payouts/payout-merchant')));

// render - settlements
const SettlementPage = Loadable(lazy(() => import('pages/settlements/settlement')));
const SettlementHistoryPage = Loadable(lazy(() => import('pages/settlements/settlement-history')));
const SettlementBankPage = Loadable(lazy(() => import('pages/settlements/bank-settlement')));
const SettlementCalculatorPage = Loadable(lazy(() => import('pages/settlements/settlementcalculator')));
const SettlementCalculatorV2Page = Loadable(lazy(() => import('pages/settlements/settlement-calculatorV2')));
const RollingRerservePage = Loadable(lazy(() => import('pages/settlements/rolling-reserve')));
const MerchantFeesPage = Loadable(lazy(() => import('pages/settlements/merchant-fees')));
const AutoSettlementPage = Loadable(lazy(() => import('pages/settlements/auto-settlement')));

// render - connector
const ConnectorTransactionPage = Loadable(lazy(() => import('pages/connector/connector'))); 

// render - reports
const AdminProfitLossPage = Loadable(lazy(() => import('pages/reports/Admin-profit-loss')));
const MerchantTurnoverPage = Loadable(lazy(() => import('pages/reports/merchant-turnover')));
const MerchantTransactionsPage = Loadable(lazy(() => import('pages/reports/merchant-transactions')));
const MIDSummaryPage = Loadable(lazy(() => import('pages/reports/MID-summary')));
const MIDSettlementPage = Loadable(lazy(() => import('pages/reports/MID-settlement')));
const TransactionSummaryPage = Loadable(lazy(() => import('pages/reports/transaction-summary')));
const TransactionPayingResponsePage = Loadable(lazy(() => import('pages/reports/transaction-paying-response')));
const PayoutMIDSummaryPage = Loadable(lazy(() => import('pages/reports/payout-MID-summary')));
const TransactionPayoutSummaryPage = Loadable(lazy(() => import('pages/reports/transaction-payout-summary')));
const TransactionSummaryReport = Loadable(lazy(() => import('pages/reports/transaction-payout-response')));

// render - payments
const PaymentLinkPage = Loadable(lazy(() => import('pages/payments/payments')));

// render - invoices
const InvoicePage = Loadable(lazy(() => import('pages/invoices/invoices')));

// render - expenses
const ExpensePage = Loadable(lazy(() => import('pages/expenses/expenses')));

// render - developer
const DeveloperPage = Loadable(lazy(() => import('pages/developer/developer')));

// render - riskmanagement
const RiskManagementPage = Loadable(lazy(() => import('pages/riskmanagement/riskmanagement')));

// render - notification
const NotificationPage = Loadable(lazy(() => import('pages/notification/notification')));

// render - support
const Tickets = Loadable(lazy(() => import('pages/support/support')));

// render - other
const Achieve = Loadable(lazy(() => import('pages/other/achieve')));
const TestTransactions = Loadable(lazy(() => import('pages/other/tests')));
const RefundTransactions = Loadable(lazy(() => import('pages/other/refund')));
const Chargeback = Loadable(lazy(() => import('pages/other/chargeback')));

// render - master
const Agreement = Loadable(lazy(() => import('pages/master/agreement')));
const Business = Loadable(lazy(() => import('pages/master/business')));
const Crypto = Loadable(lazy(() => import('pages/master/crypto')));
const Feature = Loadable(lazy(() => import('pages/master/feature')));
const Industry = Loadable(lazy(() => import('pages/master/industries')));
const Integration = Loadable(lazy(() => import('pages/master/integration')));
const PaymentMethod = Loadable(lazy(() => import('pages/master/payment-method')));
const PaymentOption = Loadable(lazy(() => import('pages/master/payment-option')));
const Plugin = Loadable(lazy(() => import('pages/master/plugin')));
const Required = Loadable(lazy(() => import('pages/master/required')));
const Solution = Loadable(lazy(() => import('pages/master/solution')));

const MainRoutes = {
  path: '/',
  element: <DashboardLayout />, // sidebar layout
  children: [
    {
      path: 'dashboard',
      children: [
        { path: 'default', element: <DashboardDefault /> },
        { path: 'typography', element: <Typography /> },
        { path: 'color', element: <Color /> },
        { path: 'shadow', element: <Shadow /> },
        { path: 'sample-page', element: <SamplePage /> }
      ]
    },

    // ✅ User Management Routes
    {
      path: 'usermanagement',
      children: [
        { path: 'admin-users', element: <AdminUsersPage /> },
        // baaki ke pages bhi yahi add kar do
        { path: 'merchant-user', element: <MerchantUsersPage /> },
        { path: 'psp-user', element: <PspUsersPage /> },
        { path: 'referral-user', element: <ReferralUsersPage /> },
        { path: 'rolepermission', element: <RolesPermissionPage /> }
      ]
    },

    // ✅ approval Routes
    {
      path: 'approval',
      children: [
        { path: 'pending-approval', element: <PendingApprovalPage /> }
        
      ]
    },

    //Transaction Routes
    {
      path: 'transaction',
      children: [
        { path: 'upi-transaction', element: <UpiTransactionPage /> },
        { path: 'card-transaction', element: <CardTransactionPage /> },
      ]
    },
    // Payouts Routes
    {
      path: 'payouts',
      children: [
        { path: 'payout-transaction', element: <PayoutTransactionPage /> },
        { path: 'payout-merchant', element: <PayoutMerchantPage /> },
      ]
    },
    // Settelments Routes
    {
      path: 'settlements',
      children: [
        { path: 'settlement', element: <SettlementPage /> },
        { path: 'settlement-history', element: <SettlementHistoryPage /> },
        { path: 'bank-settlement', element: <SettlementBankPage /> },
        { path: 'settlementcalculator', element: <SettlementCalculatorPage /> },
        { path: 'settlement-calculatorV2', element: <SettlementCalculatorV2Page /> },
        { path: 'rolling-reserve', element: <RollingRerservePage /> },
        { path: 'merchant-fees', element: <MerchantFeesPage /> },
        { path: 'auto-settlement', element: <AutoSettlementPage /> }
      ]
    },
    // Connector Routes
    {
      path: 'connector',
      children: [
        { path: 'connector', element: <ConnectorTransactionPage /> },
      ]
    },
    // Reports Routes
    {
      path: 'reports',
      children: [
        { path: 'Admin-profit-loss', element: <AdminProfitLossPage /> },
        { path: 'merchant-turnover', element: <MerchantTurnoverPage /> },
        { path: 'merchant-transactions', element: <MerchantTransactionsPage /> },
        { path: 'MId-summary', element: <MIDSummaryPage /> },
        { path: 'MID-Settlement', element: <MIDSettlementPage /> },
        { path: 'transaction-summary', element: <TransactionSummaryPage /> },
        { path: 'transaction-paying-response', element: <TransactionPayingResponsePage /> },
        { path: 'payout-MID-summary', element: <PayoutMIDSummaryPage /> },
        { path: 'transaction-payout-summary', element: <TransactionPayoutSummaryPage /> },
        { path: 'transaction-payout-response', element: <TransactionSummaryReport /> },
      ]
    },
    {
      path: 'payments',
      children: [
        { path: 'payments', element: <PaymentLinkPage /> },
      ] 
    },
    {
      path: 'invoices',
      children: [
        { path: 'invoices', element: <InvoicePage /> },
      ] 
    },
    {
      path: 'expenses',
      children: [
        { path: 'expenses', element: <ExpensePage /> },
      ]
    },
    {
      path: 'developer',
      children: [
        { path: 'developer', element: <DeveloperPage /> },
      ]
    },
    {
      path: 'riskmanagement',
      children: [
        { path: 'riskmanagement', element: <RiskManagementPage /> },
      ]
    },
    {
      path: 'notification',
      children: [
        { path: 'notification', element: <NotificationPage /> },
      ]
    },
    {
      path: 'support',
      children: [
        { path: 'support', element: <Tickets /> },
      ]
    },
    {
      path: 'other',
      children: [
        { path: 'achieve', element: <Achieve /> },
        { path: 'tests', element: <TestTransactions /> },
        { path: 'refund', element: <RefundTransactions /> },
        { path: 'chargeback', element: <Chargeback /> }
       
      ]
    },
    {
      path: 'master',
      children: [
        { path: 'agreement', element: <Agreement /> },
        { path: 'business', element: <Business /> },
        { path: 'crypto', element: <Crypto /> },
        { path: 'feature', element: <Feature /> },
        { path: 'industries', element: <Industry /> },
        { path: 'integration', element: <Integration /> },
        { path: 'payment-method', element: <PaymentMethod /> },
        { path: 'payment-option', element: <PaymentOption /> },
        { path: 'plugin', element: <Plugin /> },
        { path: 'required', element: <Required /> },
        { path: 'solution', element: <Solution /> }
      ]
    }
  ]
};

export default MainRoutes;