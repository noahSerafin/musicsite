import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Success from "./pages/Success/Success";

import "./App.css";
import MyAccount from "./pages/MyAccount/MyAccount";
import Support from "./pages/Support/Support";

import Legal from "./pages/Legal/Legal";
import PageNotFound from "./pages/404/404";

import AccountSettings from "./pages/AccountSettings/AccountSettings";
import MusicDashboard from "./pages/MusicDashboard/MusicDashboard";
import AnalyticsRoyalties from "./pages/AnalyticsRoyalties/AnalyticsRoyalties";
import Royalties from "./pages/Royalties/Royalties";
import Addons from "./pages/Addons/Addons";
import Upgrade from "./pages/Upgrade/Upgrade";
import MySubscription from "./pages/MySubscription/MySubscription";
import AccountSupport from "./pages/AccountSupport/AccountSupport";
import AccountCancelled from "./pages/AccountCancelled/AccountCancelled";
import PaymentFailed from "./pages/PaymentFailed/PaymentFailed";
import PurchaseSuccess from "./pages/PurchaseSuccess/PurchaseSuccess";

const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/success" element={<Success />} />
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/my-account" element={<MyAccount />}>
            <Route path="" index element={<MySubscription />} />
            <Route path="settings" element={<AccountSettings />} />
            <Route path="dashboard" element={<MusicDashboard />} />
            <Route path="analytics" element={<AnalyticsRoyalties />} />
            <Route path="Royalties" element={<Royalties />} />
            <Route path="add-ons" element={<Addons />} />
            <Route path="account-support" element={<AccountSupport />} />
            <Route path="upgrade" element={<Upgrade />} />
          </Route>
          <Route path="upgrade" element={<Upgrade />} />
          <Route path="payment-success" element={<PurchaseSuccess />} />
          <Route path="payment-failed" element={<PaymentFailed />} />
          <Route path="/support" element={<Support />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="cancelled" element={<AccountCancelled />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
