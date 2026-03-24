import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import MainLayouts from "@/layouts/MainLayouts";
import AuthLayouts from "@/layouts/AuthLayouts";
import PrivateRoute from "./PrivateRoute";
import { lazy } from "react";

import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
// import VerifyEmail from "@/pages/Auth/VerifyEmail";

const Locations = lazy(() => import("@/pages/Locations"));
const LocationDetail = lazy(() => import("@/pages/LocationDetail"))
const Services = lazy(() => import("@/pages/Services"));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetail"));
const Blogs = lazy(() => import("@/pages/Blogs"));
const BlogDetail = lazy(() => import("@/pages/BlogDetail"));
const Account = lazy(() => import("@/pages/Account"));

export default function AppRoutes() {
  return (
    <BrowserRouter basename="/amitie-office/">
      <Routes>
        <Route path="" element={<MainLayouts />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="locations" element={<Locations/>}/>
          <Route path="locations/:slug" element={<LocationDetail/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="services/:slug" element={<ServiceDetail/>}/>
          <Route path="blogs" element={<Blogs/>}/>
          <Route path="blogs/:slug" element={<BlogDetail/>}/>
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="account" element={<Account />} />
        </Route>

        <Route path="/verify-email" element={<AuthLayouts />}>
          {/* <Route index element={<VerifyEmail />} /> */}
        </Route>
        <Route path="/auth" element={<MainLayouts />}>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
