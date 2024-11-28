import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import AdminDashboards from "./pages/Admin/AdminDashboards";
import StudentDashboard from "./pages/Student/StudentDashboard";
import CourseEnrollment from "./pages/Student/CourseEnrollment";
import ViewGrades from "./pages/Student/ViewGrades";
import CheckAttendance from "./pages/Student/CheckAttendance";
import AccessCourseMaterials from "./pages/Student/AccessCourseMaterials";
import SubmitAssignments from "./pages/Student/SubmitAssignments";
import ParticipateDiscussions from "./pages/Student/ParticipateDiscussions";
import CheckAcademicCalendar from "./pages/Student/CheckAcademicCalendar";
import RequestTranscripts from "./pages/Student/RequestTranscripts";
import AccessFinancialInfo from "./pages/Student/AccessFinancialInfo";
import TeacherDashboard from "./pages/Teacher/TeacherDashboard";

import ManageCourses from "./pages/Teacher/ManageCourses";
import PostAssignments from "./pages/Teacher/PostAssignments";
import GradeAssignments from "./pages/Teacher/GradeAssignments";
import TrackAttendance from "./pages/Teacher/TrackAttendance";
import CommunicateWithStudents from "./pages/Teacher/CommunicateWithStudents";
import ManageCourseMaterials from "./pages/Teacher/ManageCourseMaterials";
import ConductEvaluations from "./pages/Teacher/ConductEvaluations";
import AccessStudentProfiles from "./pages/Teacher/AccessStudentProfiles";

import Home from "./Home";
import ManageUsers from "./pages/Admin/ManageUsers";
//import ManageCourses from "./pages/Admin/ManageCourses";
import ViewReports from "./pages/Admin/ViewReports";
import GenerateReports from "./pages/Librarian/GenerateReports";
import ManageEvents from "./pages/Admin/ManageEvents";
import Setting from "./pages/Admin/Setting";


import LibrarianDashboard from "./pages/Librarian/LibrarianDashboard";
import TrackBorrowing from "./pages/Librarian/TrackBorrowing";
import AdminPage from "./pages/Adminpage";



const App = () => {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1">
          <Navbar />
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/student" element={<StudentDashboard />} />
               <Route path="/student/course-enrollment" element={<CourseEnrollment />} />
              <Route path="/student/view-grades" element={<ViewGrades />} />
              <Route path="/student/check-attendance" element={<CheckAttendance />} />
              <Route path="/student/access-course-materials" element={<AccessCourseMaterials />} />
              <Route path="/student/submit-assignments" element={<SubmitAssignments />} />
              <Route path="/student/participate-discussions" element={<ParticipateDiscussions />} />
              <Route path="/student/check-academic-calendar" element={<CheckAcademicCalendar />} />
              <Route path="/student/request-transcripts" element={<RequestTranscripts />} />
              <Route path="/student/access-financial-info" element={<AccessFinancialInfo />} /> 
              
              <Route path="/teacher" element={<TeacherDashboard />} />
              <Route path="teacher/manage-courses" element={<ManageCourses />} />
              <Route path="teacher/post-assignments" element={<PostAssignments />} />
              <Route path="teacher/grade-assignments" element={<GradeAssignments />} />
              <Route path="teacher/track-attendance" element={<TrackAttendance />} />
              <Route path="teacher/communicate" element={<CommunicateWithStudents />} />
              <Route path="teacher/manage-course-materials" element={<ManageCourseMaterials />} />
              <Route path="teacher/conduct-evaluations" element={<ConductEvaluations />} />
              <Route path="teacher/access-student-profiles" element={<AccessStudentProfiles />} />

              <Route path="/admin" element={<AdminDashboards />} />
              <Route path="admin/manage-users" element={<ManageUsers />} />
              <Route path="admin/manage-courses" element={<ManageCourses />} />
              <Route path="admin/view-reports" element={<ViewReports />} />
              <Route path="admin/generate-reports" element={<GenerateReports />} />
              <Route path="admin/settings" element={<Setting />} />
              <Route path="admin/manage-events" element={<ManageEvents />} />

              <Route path="/librarian" element={<LibrarianDashboard />} />
              <Route path="/librarian/track-borrowings" element={<TrackBorrowing />} />

              <Route path="/adminpage" element={<AdminPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
