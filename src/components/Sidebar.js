// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #2C3E50;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 15px;
  font-size: 18px;
  &:hover {
    color: #1ABC9C;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h2>Dashboard</h2>
      <SidebarLink to="/admin">Admin Dashboard</SidebarLink>
      <SidebarLink to="/teacher">Teacher Dashboard</SidebarLink>
      <SidebarLink to="/student">Student Dashboard</SidebarLink>
      <SidebarLink to="/librarian">Librarian Dashboard</SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;

// src/components/Sidebar.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const SidebarContainer = styled.div`
//   width: 250px;
//   height: 100vh;
//   background-color: #2C3E50;
//   color: white;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   position: fixed;
//   top: 0;
//   left: 0;
//   transition: transform 0.3s ease;
//   transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')}; /* Sidebar slide effect */
// `;

// const BurgerIconContainer = styled.div`
//   position: absolute;
//   left: 10px; /* Adjusted for better positioning */
//   top: 20px;
//   display: flex;
//   flex-direction: column;
//   cursor: pointer;
// `;

// const BurgerIcon = styled.div`
//   width: 35px;
//   height: 3px;
//   background-color: white;
//   margin: 6px 0;
//   transition: background-color 0.3s ease;
// `;

// const SidebarLink = styled(Link)`
//   color: white;
//   text-decoration: none;
//   margin-bottom: 15px;
//   font-size: 18px;
//   &:hover {
//     color: #1ABC9C;
//   }
// `;

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       {/* Hover events on the container that holds the burger icon */}
//       <BurgerIconContainer 
//         onMouseEnter={() => setIsOpen(true)} 
//         onMouseLeave={() => setIsOpen(false)}
//       >
//         <BurgerIcon />
//         <BurgerIcon />
//         <BurgerIcon />
//       </BurgerIconContainer>

//       <SidebarContainer isOpen={isOpen}>
//         <h2>Dashboard</h2>
//         <SidebarLink to="/admin">Admin Dashboard</SidebarLink>
//         <SidebarLink to="/teacher">Teacher Dashboard</SidebarLink>
//         <SidebarLink to="/student">Student Dashboard</SidebarLink>
//         <SidebarLink to="/librarian">Librarian Dashboard</SidebarLink>
//       </SidebarContainer>
//     </div>
//   );
// };

// export default Sidebar;

