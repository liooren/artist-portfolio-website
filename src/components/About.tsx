interface AboutProps {
  sidebarOpen: boolean;
}

export default function About({ sidebarOpen }: AboutProps) {
  return (
    <div className={`min-h-screen bg-white transition-all duration-300 ${
      sidebarOpen ? 'ml-48' : 'ml-0'
    }`}>
      <div className={`p-12 ${!sidebarOpen ? 'pt-20' : ''}`}>
        {/* Artist Name */}
        <div className="mb-8">
          <h1 className="text-lg font-light tracking-widest text-gray-900">ALEX RIVERA</h1>
        </div>
        
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-2xl font-light tracking-widest text-gray-900 uppercase">About</h2>
        </div>

        <div className="max-w-3xl">
          {/* Artist Photo */}
          <div className="mb-12">
            <div className="relative max-w-md">
              <img
                src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Alex Rivera"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12 pb-8 border-b border-gray-100">
            <h3 className="text-sm font-light text-gray-900 mb-4 uppercase tracking-wide">Contact</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Email: alex.rivera@email.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Brooklyn, NY</p>
            </div>
          </div>

          {/* Artist Statement */}
          <div className="mb-12 pb-8 border-b border-gray-100">
            <h3 className="text-sm font-light text-gray-900 uppercase tracking-wide mb-6">Artist Statement</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              My work explores the intersection of contemporary urban life and natural forms, 
              creating a dialogue between the organic and the constructed. Through bold colors 
              and dynamic compositions, I seek to capture the energy and complexity of modern existence.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Each piece is an investigation into texture, light, and movement, inviting viewers 
              to discover new perspectives within familiar landscapes.
            </p>
          </div>

          {/* Education */}
          <div className="mb-12 pb-8 border-b border-gray-100">
            <h3 className="text-sm font-light text-gray-900 uppercase tracking-wide mb-6">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-light text-gray-900">Master of Fine Arts</h4>
                <p className="text-xs text-gray-600">Yale School of Art, New Haven, CT</p>
                <p className="text-xs text-gray-500">2018</p>
              </div>
              <div>
                <h4 className="text-sm font-light text-gray-900">Bachelor of Fine Arts</h4>
                <p className="text-xs text-gray-600">Rhode Island School of Design, Providence, RI</p>
                <p className="text-xs text-gray-500">2016</p>
              </div>
            </div>
          </div>

          {/* Selected Exhibitions */}
          <div className="mb-12 pb-8 border-b border-gray-100">
            <h3 className="text-sm font-light text-gray-900 uppercase tracking-wide mb-6">Selected Exhibitions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-light text-gray-900">Urban Landscapes</h4>
                <p className="text-xs text-gray-600">Gallery Modern, New York, NY</p>
                <p className="text-xs text-gray-500">2024</p>
              </div>
              <div>
                <h4 className="text-sm font-light text-gray-900">Emerging Voices</h4>
                <p className="text-xs text-gray-600">Brooklyn Museum, Brooklyn, NY</p>
                <p className="text-xs text-gray-500">2023</p>
              </div>
              <div>
                <h4 className="text-sm font-light text-gray-900">New Perspectives</h4>
                <p className="text-xs text-gray-600">Chelsea Arts Center, New York, NY</p>
                <p className="text-xs text-gray-500">2022</p>
              </div>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div>
            <h3 className="text-sm font-light text-gray-900 uppercase tracking-wide mb-6">Awards & Recognition</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-light text-gray-900">Emerging Artist Grant</h4>
                <p className="text-xs text-gray-600">New York Arts Foundation</p>
                <p className="text-xs text-gray-500">2023</p>
              </div>
              <div>
                <h4 className="text-sm font-light text-gray-900">Excellence in Painting Award</h4>
                <p className="text-xs text-gray-600">Contemporary Art Society</p>
                <p className="text-xs text-gray-500">2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}