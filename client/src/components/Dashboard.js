import React, { useState } from "react";
import Nav from "./Nav";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./Footer";

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'Projects':
                return <Projects />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;
        }
    };

    return (
        <div>
            <header className="header">
                <h1>Joel Wesch</h1>
                <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </header>
                <main className="wrapper">
                    {renderPage(currentPage)}
                </main>

            <Footer />
            
        </div>
    );
}

export default Dashboard;