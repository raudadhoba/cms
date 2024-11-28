// // src/pages/Teacher/TeacherDashboard.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const TeacherDashboard = () => {
//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Teacher Dashboard</h2>
//       <div className="row">
//         <div className="col-md-4 mb-4">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h5 className="card-title">Create and Manage Courses</h5>
//               <p className="card-text">Set up and edit courses, including course details and schedules.</p>
//               <Link to="/teacher/manage-courses" className="btn btn-primary">Manage Courses</Link>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4 mb-4">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h5 className="card-title">Post Assignments</h5>
//               <p className="card-text">Create and assign homework or projects to students.</p>
//               <Link to="/teacher/post-assignments" className="btn btn-primary">Post Assignments</Link>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4 mb-4">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h5 className="card-title">Grade Assignments and Exams</h5>
//               <p className="card-text">Enter grades and provide feedback for student submissions.</p>
//               <Link to="/teacher/grade-assignments" className="btn btn-primary">Grade Assignments</Link>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4 mb-4">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h5 className="card-title">Track Attendance</h5>
//               <p className="card-text">Mark attendance and generate reports for classes.</p>
//               <Link to="/teacher/track-attendance" className="btn btn-primary">Track Attendance</Link>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4 mb-4">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h5 className="card-title">Communicate with Students</h5>
//               <p className="card-text">Send messages and announcements to students.</p>
//               <Link to="/teacher/communicate" className="btn btn-primary">Send Messages</Link>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4 mb-4">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h5 className="card-title">Manage Course Materials</h5>
//               <p className="card-text">Upload and share course materials with students.</p>
//               <Link to="/teacher/manage-materials" className="btn btn-primary">Manage Materials</Link>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4 mb-4">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h5 className="card-title">Conduct Evaluations</h5>
//               <p className="card-text">Gather feedback from students on courses and teaching methods.</p>
//               <Link to="/teacher/evaluations" className="btn btn-primary">Conduct Evaluations</Link>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4 mb-4">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h5 className="card-title">Access Student Profiles</h5>
//               <p className="card-text">View student profiles and monitor their progress.</p>
//               <Link to="/teacher/student-profiles" className="btn btn-primary">View Profiles</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeacherDashboard;


// //src/pages/Teacher/TeacherDashboard.js



// // import React from 'react';
// // import { Link, Routes, Route } from 'react-router-dom';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import ManageCourses from './ManageCourses'; // Import the ManageCourses component

// // const TeacherDashboard = () => {
// //   return (
// //     <div className="container mt-5">
// //       <h2 className="mb-4">Teacher Dashboard</h2>
// //       <div className="row">
// //         <div className="col-md-3">
// //           <div className="list-group">
// //             <Link to="manage-courses" className="list-group-item list-group-item-action">
// //               Create and Manage Courses
// //             </Link>
// //             {/* Add other links for different sections if needed */}
// //           </div>
// //         </div>
// //         <div className="col-md-9">
// //           <Routes>
// //             <Route path="manage-courses" element={<ManageCourses />} />
// //             {/* Define other routes inside the TeacherDashboard if needed */}
// //           </Routes>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TeacherDashboard;

// src/pages/Teacher/TeacherDashboard.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const TeacherDashboard = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Teacher Dashboard</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Create and Manage Courses</h5>
              <p className="card-text">Set up and edit courses, including course details and schedules.</p>
              <Link to="manage-courses" className="btn btn-primary">Manage Courses</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Post Assignments</h5>
              <p className="card-text">Create and assign homework and projects to students.</p>
              <Link to="post-assignments" className="btn btn-primary">Post Assignments</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Grade Assignments</h5>
              <p className="card-text">Enter grades for assignments and provide feedback to students.</p>
              <Link to="grade-assignments" className="btn btn-primary">Grade Assignments</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Track Attendance</h5>
              <p className="card-text">Mark student attendance for each class session.</p>
              <Link to="track-attendance" className="btn btn-primary">Track Attendance</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Communicate with Students</h5>
              <p className="card-text">Send announcements or messages to students.</p>
              <Link to="communicate-with-students" className="btn btn-primary">Communicate</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Manage Course Materials</h5>
              <p className="card-text">Upload lecture notes, readings, and supplementary resources.</p>
              <Link to="manage-course-materials" className="btn btn-primary">Manage Materials</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Conduct Evaluations</h5>
              <p className="card-text">Gather feedback from students on course delivery.</p>
              <Link to="conduct-evaluations" className="btn btn-primary">Conduct Evaluations</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Access Student Profiles</h5>
              <p className="card-text">View individual student profiles and monitor progress.</p>
              <Link to="access-student-profiles" className="btn btn-primary">View Profiles</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Outlet for nested routes */}
      <Outlet />
    </div>
  );
};

export default TeacherDashboard;
