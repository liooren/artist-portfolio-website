import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Gallery from './components/Gallery';
import About from './components/About';
import { paintings, prints } from './data/artworks';

function App() {
  const [activeSection, setActiveSection] = useState('paintings');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'paintings':
        return <Gallery artworks={paintings} title="Paintings" sidebarOpen={sidebarOpen} />;
      case 'prints':
        return <Gallery artworks={prints} title="Prints" sidebarOpen={sidebarOpen} />;
      case 'about':
        return <About sidebarOpen={sidebarOpen} />;
      default:
        return <Gallery artworks={paintings} title="Paintings" sidebarOpen={sidebarOpen} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      {renderContent()}
    </div>
  );
}

export default App;