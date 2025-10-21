import { Menu, X } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ activeSection, onSectionChange, isOpen, onToggle }: SidebarProps) {
  const menuItems = [
    { id: 'paintings', label: 'Paintings' },
    { id: 'prints', label: 'Prints' },
    { id: 'about', label: 'About' },
  ];

  const handleSectionChange = (section: string) => {
    onSectionChange(section);
    if (isOpen) {
      onToggle(); // Auto-collapse sidebar after selection
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className={`fixed top-6 z-50 p-2 bg-white border border-gray-200 rounded-md shadow-sm transition-all duration-300 ${
          isOpen ? 'left-44' : 'left-6'
        }`}
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Sidebar */}
      <div className={`w-48 bg-white border-r border-gray-100 h-screen fixed left-0 top-0 flex flex-col transition-transform duration-300 z-40 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Artist Name - with padding to avoid button overlap */}
        <div className="pt-20 px-6 pb-6 border-b border-gray-100">
        <h1 className="text-lg font-light tracking-widest text-gray-900">ALEX RIVERA</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-6 py-12">
        <ul className="space-y-8">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleSectionChange(item.id)}
                  className={`w-full text-left transition-all duration-300 ${
                    isActive 
                      ? 'text-gray-900 font-medium' 
                      : 'text-gray-400 hover:text-gray-700'
                  }`}
                >
                  <span className="text-sm tracking-wide uppercase">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-30"
          onClick={onToggle}
        />
      )}
    </>
  );
}