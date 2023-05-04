import React from 'react';

export default function Dashboard() {
  return(
    <h2>Dashboard</h2>
  );
}










// import React, { useState } from "react";
// import Login from "../Login/Login";
// import MyPage from "../pages/MyPage";
// import Nav from "../Nav";
// import Timer from "../Timer";
// import Footer from "../Footer";

// const Dashboard = () => {
//     const [currentPage, setCurrentPage] = useState('Dashboard');

//     const renderPage = () => {
//         switch (currentPage) {
//             case 'Login':
//                 return <Login />;
//             case 'MyPage':
//                 return <MyPage />;
//             case 'Timer':
//                 return <Timer />;
//             default:
//                 return <Dashboard />;
//         }
//     };

//     return (
//         <div>
//             <header className="header">
//                 <h1>YouFit</h1>
//                 <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
//             </header>
//                 <main className="wrapper">
//                     {renderPage(currentPage)}
//                 </main>

//             <Footer />
            
//         </div>
//     );
// }

// export default Dashboard;