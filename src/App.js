import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Loader from "./Utils/Loader/Loader";
import AdminLogin from "./Pages/Admin/AdminLogin/AdminLogin";
import AdminPrivateRoute from "./Pages/Admin/PrivateRoute/AdminPrivateRoute";
import Admin from "./Pages/Admin/Admin";
import AdminDashboard from "./Pages/Admin/Dashboard/AdminDashboard";
import "./App.css";
import HeroSection from "./Pages/Admin/HeroSection/HeroSection";
import SliderCreate from "./Pages/Admin/HeroSection/SliderCreate";
import SliderEdit from "./Pages/Admin/HeroSection/SliderEdit";
import AboutUs from "./Pages/AboutUs";
import Inspection from "./Pages/Inspection";
import Calibration from "./Pages/Calibration";
import TestingService from "./Pages/TestingService";
import ManageBlog from "./Pages/Admin/ManageBlog/ManageBlog";
import ContactUs from "./Pages/ContactUs";
import Services from "./Pages/Services";
import TrainingProgram from "./Pages/TrainingProgram";
// import ChemicalCalibration from "./Pages/CalibrationPages/ChemicalCalibration";
// import CalibrationServiceCategory from "./Pages/CalibrationServiceCategory";
// import ServiceCategory from "./Pages/ServiceCategory";
import ChemicalCalibration from "./Pages/CalibrationPages/ChemicalCalibration";
import MassVolumeCalibration from "./Pages/CalibrationPages/MassVolumeCalibration";
import ThermodynamicCalibration from "./Pages/CalibrationPages/ThermodynamicCalibration";
import MechanicalCalibration from "./Pages/CalibrationPages/MechanicalCalibration";
import ElectricalCalibration from "./Pages/CalibrationPages/ElectricalCalibration";
import DimensionalCalibration from "./Pages/CalibrationPages/DimensionalCalibration";
import OthersCalibration from "./Pages/CalibrationPages/OthersCalibration";
import QaQcServices from "./Pages/QaQcServices";
import NdtNde from "./Pages/NdtNde";
import LiftLifting from "./Pages/LiftLifting";
import PreShipment from "./Pages/PreShipment";
import PostLanding from "./Pages/PostLanding";
import EquipmentSafety from "./Pages/EquipmentSafety";
import StackAirTesting from "./Pages/StackAirTesting";
import EnvironmentalTesting from "./Pages/EnvironmentalTesting";
import OilTesting from "./Pages/OilTesting";
import WaterTesting from "./Pages/WaterTesting";
import Scopes from "./Pages/Scopes";
import Items from "./Pages/Items";
import BlogCategory from "./Pages/Admin/ManageBlog/BlogCategory";
import BlogCategoryAdd from "./Pages/Admin/ManageBlog/BlogCategoryAdd";
import BlogCategoryEdit from "./Pages/Admin/ManageBlog/BlogCategoryEdit";
import BlogAdd from "./Pages/Admin/ManageBlog/BlogAdd";
import BlogEdit from "./Pages/Admin/ManageBlog/BlogEdit";
import OrganizationSlider from "./Pages/Admin/Organizations/OrganizationSlider";
import OrganizationSliderCreate from "./Pages/Admin/Organizations/OrganizationSliderCreate";
import OrganizationSliderEdit from "./Pages/Admin/Organizations/OrganizationSliderEdit";
import Clients from "./Pages/Admin/Clients/Clients";
import ClientsEdit from "./Pages/Admin/Clients/ClientsEdit";
import ClientsAdd from "./Pages/Admin/Clients/ClientsAdd";
import InspectionMessages from "./Pages/Admin/Inspection/InspectionMessages";
import CalibrationMessages from "./Pages/Admin/Calibration/CalibrationMessages";
import ContactUsMessages from "./Pages/Admin/ContactUs/ContactUsMessages";
import BlogHome from "./Pages/Blog/BlogHome";
import BlogDetails from "./Pages/Blog/BlogDetails";
import Profile from "./Pages/Admin/Profile/Profile";
import PasswordChange from "./Pages/Admin/Profile/PasswordChange";
import ScrollToTop from "./Utils/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />

            <Route path="/contacts" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />

            <Route path="/services/inspection" element={<Inspection />} />
            <Route path="/services/testing" element={<TestingService />} />
            <Route
              path="/services/training-program"
              element={<TrainingProgram />}
            />

            <Route path="/services/calibration" element={<Calibration />} />

            {/* <Route path="services" element={<ServiceCategory />}> */}
            <Route
              path="/services/chemical-calibration"
              element={<ChemicalCalibration />}
            />
            <Route
              path="/services/mass-volume-calibration"
              element={<MassVolumeCalibration />}
            />
            <Route
              path="/services/thermodynamic-calibration"
              element={<ThermodynamicCalibration />}
            />
            <Route
              path="/services/mechanical-calibration"
              element={<MechanicalCalibration />}
            />
            <Route
              path="/services/electrical-calibration"
              element={<ElectricalCalibration />}
            />
            <Route
              path="/services/dimensional-calibration"
              element={<DimensionalCalibration />}
            />
            <Route
              path="/services/others-calibration"
              element={<OthersCalibration />}
            />
            {/* </Route> */}

            <Route path="/services/qa-qc" element={<QaQcServices />} />
            <Route path="/services/ndt-nde" element={<NdtNde />} />
            <Route path="/services/lift-lifting" element={<LiftLifting />} />
            <Route path="/services/pre-shipment" element={<PreShipment />} />
            <Route path="/services/post-landing" element={<PostLanding />} />
            <Route
              path="/services/equipment-safety"
              element={<EquipmentSafety />}
            />
            {/* <Route
              path="/services/equipment-safety"
              element={<PostLanding />}
            /> */}
            <Route
              path="/services/stack-air-testing"
              element={<StackAirTesting />}
            />
            <Route
              path="/services/environmental-testing"
              element={<EnvironmentalTesting />}
            />
            <Route path="/services/oil-testing" element={<OilTesting />} />
            <Route path="/services/water-testing" element={<WaterTesting />} />
            <Route path="/services/scopes" element={<Scopes />} />
            <Route path="/services/items" element={<Items />} />

            <Route path="blog" element={<BlogHome />} />
            <Route path="blog/:slug" element={<BlogDetails />} />

            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="admin"
              element={
                <AdminPrivateRoute>
                  <Admin />
                </AdminPrivateRoute>
              }
            >
              <Route index element={<AdminDashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="password-change" element={<PasswordChange />} />
              <Route path="slider" element={<HeroSection />} />
              <Route path="slider/create" element={<SliderCreate />} />
              <Route path="slider/edit/:sliderId" element={<SliderEdit />} />

              <Route path="blogs" element={<ManageBlog />} />
              <Route path="blogs/create" element={<BlogAdd />} />
              <Route path="blogs/edit/:blogId" element={<BlogEdit />} />

              <Route path="blog-category" element={<BlogCategory />} />
              <Route
                path="blog-category/create"
                element={<BlogCategoryAdd />}
              />
              <Route
                path="blog-category/edit/:blogCatId"
                element={<BlogCategoryEdit />}
              />

              <Route
                path="organizations-certifications"
                element={<OrganizationSlider />}
              />

              <Route
                path="organizations-certifications/create"
                element={<OrganizationSliderCreate />}
              />
              <Route
                path="organizations-certifications/edit/:certificationsId"
                element={<OrganizationSliderEdit />}
              />

              <Route path="clients" element={<Clients />} />
              <Route path="clients/create" element={<ClientsAdd />} />
              <Route path="clients/edit/:clientsId" element={<ClientsEdit />} />

              <Route
                path="inspection-messages"
                element={<InspectionMessages />}
              />
              <Route
                path="calibration-messages"
                element={<CalibrationMessages />}
              />
              <Route path="contact-messages" element={<ContactUsMessages />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
