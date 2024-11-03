import React from "react";
import Contact from "./components/Contact";
import Home from "./home/Home";
import Signup from "./components/Signup";

//Student Dashboard pages
import Index from "./components/Dashboards/StudentDashboard/Index";
import RegistrationForm from "./components/Dashboards/StudentDashboard/RegistrationForm";
import ViewProfile from "./components/Dashboards/StudentDashboard/ViewProfile";
import ViewAttendance from "./components/Dashboards/StudentDashboard/ViewAttendance";
import Payment from "./components/Dashboards/StudentDashboard/Payment";
import MessCut from "./components/Dashboards/StudentDashboard/MessCut";

//Admin Dashboard pages
import AdminHome from "./components/Dashboards/AdminDashboard/AdminHome";
import StudentRegistration from "./components/Dashboards/AdminDashboard/StudentRegistration";
import ManageStudentProfile from "./components/Dashboards/AdminDashboard/ManageStudentProfile";
import AttendanceManagement from "./components/Dashboards/AdminDashboard/AttendenceManagement";
import PaymentGeneration from "./components/Dashboards/AdminDashboard/PaymentGeneration";
import ManageMessCutRequest from "./components/Dashboards/AdminDashboard/ManageMessCutRequest";

// Staff Dashboard pages
import StaffDashboard from "./components/Dashboards/StaffDashboard/StaffHome";
import MarkAttendance from "./components/Dashboards/StaffDashboard/MarkAttendance";
import ManageAttendance from "./components/Dashboards/StaffDashboard/ManageAttendance";
import ViewStudentProfile from "./components/Dashboards/StaffDashboard/ViewStudentProfile";
import ViewPaymentStatus from "./components/Dashboards/StaffDashboard/ViewPaymentStatus";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />

        {/*Student components routes*/}
        <Route path="/studentdashboard" element={<Index />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/viewprofile" element={<ViewProfile />} />
        <Route path="/viewattendance" element={<ViewAttendance />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/messcutrequest" element={<MessCut />} />

        {/*Admin components routes*/}
        <Route path="/admindashboard" element={<AdminHome />} />
        <Route path="/studentregistration" element={<StudentRegistration />} />
        <Route
          path="/managestudentprofile"
          element={<ManageStudentProfile />}
        />
        <Route
          path="/attendancemanagement"
          element={<AttendanceManagement />}
        />
        <Route path="/paymentgeneration" element={<PaymentGeneration />} />
        <Route path="/messcutapproval" element={<ManageMessCutRequest />} />

        {/* Staff components routes */}
        <Route path="/staffdashboard" element={<StaffDashboard />} />
        <Route path="/markattendance" element={<MarkAttendance />} />
        <Route path="/manageattendance" element={<ManageAttendance />} />
        <Route path="/viewstudentprofile" element={<ViewStudentProfile />} />
        <Route path="/paymentstatus" element={<ViewPaymentStatus />} />
      </Routes>
    </>
  );
}

export default App;
