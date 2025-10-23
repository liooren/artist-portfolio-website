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
        <div className="mb-8 max-w-3xl mx-auto">
          <h1 className="text-lg font-light tracking-widest text-gray-900">Kristina Lavrinok</h1>
        </div>
        
        {/* Header */}
        <div className="mb-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-light tracking-widest text-gray-900 uppercase">About</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Artist Photo */}
          <div className="mb-12">
            <div className="relative max-w-md">
              <img
                src="/about/about.jpg"
                alt="Kristina Lavrinok"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12 pb-8 border-b border-gray-100">
            <h3 className="text-sm font-light text-gray-900 mb-4 uppercase tracking-wide">Contact</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Email: kristina.lavrinok@gmail.com</p>
              <p>Chicago, IL</p>
            </div>
          </div>

          {/* Artist Statement */}
          <div className="mb-12 pb-8 border-b border-gray-100">
            <h3 className="text-sm font-light text-gray-900 uppercase tracking-wide mb-6">Artist Statement</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
            My work explores the tension between instinct and memory, the human and the animal, the body and the unknown. Horses, wolves, and hybrid figures often emerge in my paintings—not as literal subjects, but as emotional and psychological presences. They move between vulnerability and strength, between the real and the imagined.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Painting, for me, is a process of translation. I use gesture and texture to trace sensations that are difficult to articulate: belonging, loss, and transformation. These recurring forms—whether a horse mid-motion or a face dissolving into abstraction—become a language through which I examine how identity and instinct coexist. 
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
            I often work across mediums, from oil painting to printmaking, allowing one process to inform another. Through this exchange, I search for new visual possibilities—how a surface can hold movement, how color can carry emotion, and how imagery can shift between clarity and uncertainty.
            </p>
          </div>

          {/* Education */}
          <div className="mb-12 pb-8 border-b border-gray-100">
            <h3 className="text-sm font-light text-gray-900 uppercase tracking-wide mb-6">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-light text-gray-900">B.F.A. Painting & Drawing</h4>
                <p className="text-xs text-gray-600">School of the Art Institute of Chicago, Chicago, IL</p>
                <p className="text-xs text-gray-500">2024-2026</p>
              </div>
              <div>
                <h4 className="text-sm font-light text-gray-900">B.A. Graphic Design</h4>
                <p className="text-xs text-gray-600">University of Illinois Chicago, Chicago, IL</p>
                <p className="text-xs text-gray-500">2021-2024</p>
              </div>
              <div>
                <h4 className="text-sm font-light text-gray-900">B.F.A Printmaking and Book Illustration</h4>
                <p className="text-xs text-gray-600">National Academy of Fine Arts and Architecture, Kyiv, Ukraine
                </p>
                <p className="text-xs text-gray-500">2018-2021</p>
              </div>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="mb-12 pb-8 border-b border-gray-100">
            <h3 className="text-sm font-light text-gray-900 uppercase tracking-wide mb-6">Awards & Honors</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-light text-gray-900">Esteemed Merit Scholarship</h4>
                <p className="text-xs text-gray-600">School of the Art Institute of Chicago</p>
                <p className="text-xs text-gray-500">2023</p>
              </div>
              <div>
                <h4 className="text-sm font-light text-gray-900">Dean’s List</h4>
                <p className="text-xs text-gray-600">College of Architecture, Design, and the Arts, University of Illinois Chicago</p>
                <p className="text-xs text-gray-500">2022–2023 (Spring 2022, Fall 2022, Spring 2023)</p>
              </div>
            </div>
          </div>

          {/* Exhibitions & Shows */}
          <div className="mb-12 pb-8 border-b border-gray-100">
            <h3 className="text-sm font-light text-gray-900 uppercase tracking-wide mb-6">Exhibitions & Shows</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-light text-gray-900">Spring Undergraduate Exhibition (upcoming)</h4>
                <p className="text-xs text-gray-600">SAIC Galleries, 33 E. Washington St., Chicago</p>
                <p className="text-xs text-gray-500">2026</p>
              </div>
              <div>
                <h4 className="text-sm font-light text-gray-900">Year End Show! 2023</h4>
                <p className="text-xs text-gray-600">University of Illinois Chicago, Chicago</p>
                <p className="text-xs text-gray-500">2023</p>
              </div>
              <div>
                <h4 className="text-sm font-light text-gray-900">Year End Show! 2022 (catalog + exhibition)</h4>
                <p className="text-xs text-gray-600">University of Illinois Chicago, Chicago</p>
                <p className="text-xs text-gray-500">2022</p>
              </div>
              <div>
                <h4 className="text-sm font-light text-gray-900">Open Studio Review - Fall</h4>
                <p className="text-xs text-gray-600">National Academy of Fine Arts and Architecture, Kyiv</p>
                <p className="text-xs text-gray-500">2020</p>
              </div>
              <div>
                <h4 className="text-sm font-light text-gray-900">Open Studio Review - Spring</h4>
                <p className="text-xs text-gray-600">National Academy of Fine Arts and Architecture, Kyiv</p>
                <p className="text-xs text-gray-500">2020</p>
              </div>
              <div>
                <h4 className="text-sm font-light text-gray-900">Open Studio Review - Fall</h4>
                <p className="text-xs text-gray-600">National Academy of Fine Arts and Architecture, Kyiv</p>
                <p className="text-xs text-gray-500">2019</p>
              </div>
              <div>
                <h4 className="text-sm font-light text-gray-900">Open Studio Review - Spring</h4>
                <p className="text-xs text-gray-600">National Academy of Fine Arts and Architecture, Kyiv</p>
                <p className="text-xs text-gray-500">2019</p>
              </div>
              <div>
                <h4 className="text-sm font-light text-gray-900">Open Studio Review - Fall</h4>
                <p className="text-xs text-gray-600">National Academy of Fine Arts and Architecture, Kyiv</p>
                <p className="text-xs text-gray-500">2018</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}