import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import CognitiveRPA from './pages/Products/CognitiveRPA';
import AIMLSolutions from './pages/Services/AIMLSolutions';
import ResourceRealignment from './pages/Services/ResourceRealignment';
import IncisiveAnalytics from './pages/Services/IncisiveAnalytics';
import CaseStudyDetail from './components/CaseStudyDetail';
import ScrollToTop from './components/ScrollTop'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/products" element={<Products />} /> */}
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} />
             <Route path="/products/cognitive-rpa" element={<CognitiveRPA />} />
             <Route path="/services/ai-ml" element={<AIMLSolutions />} />
             <Route path="/services/resource-realignment" element={<ResourceRealignment />} />
             <Route path="/services/incisive-analytics" element={<IncisiveAnalytics />} />
             <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;