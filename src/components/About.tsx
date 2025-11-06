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
          <h1 className="text-5xl font-light tracking-widest text-gray-900">Kristina Lavrinok</h1>
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
            <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-wide">Contact</h3>
            <div className="space-y-1 text-base text-gray-600">
              <p>Email: kristina.lavrinok@gmail.com</p>
              <p>Chicago, IL</p>
            </div>
          </div>

          {/* Artist Statement */}
          <div className="mb-12 pb-8 border-b border-gray-100">
            <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-6">Artist Statement</h3>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
            The horse is a symbol of freedom, strength, and loyalty across many cultures, yet in Ukrainian tradition, it carries an even deeper and more intimate meaning. Historically, the horse was often the most valuable member of the household. It worked the fields, pulled carts, and carried families across the wide grasslands. To lose a horse meant hardship; to have one meant abundance and survival. Children grew up alongside horses, learning to care for them as part of daily life. This bond was practical, but also emotional and symbolic: the horse stood as a companion, a measure of security, and a silent participant in family life. I am drawn to this imagery in my work, where the horse appears as a recurring motif — a vessel for memory, emotion, and resilience.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
            Folklore expanded this relationship into one of protection and spirit. In Cossack epic songs, the horse is often the last companion of the hero, mourning his death or galloping home to warn his family. Village stories describe horses that sense danger, carry children to safety, or stand as guardians at the household gate. A restless horse could be read as a warning of misfortune, while a calm horse promised peace. These narratives continue to shape my paintings and prints, where I reimagine such traditional symbols through a contemporary lens.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
            My paintings and prints draw on these cultural memories, reframing them through contemporary practice. For me, the horse becomes a bridge — between past and present, between personal heritage and shared human experience, and between vulnerability and resilience. In my process, I use a limited palette, adding color only when it carries emotional or symbolic weight. This restraint keeps the works more figurative, inviting the viewer to focus on gesture and form rather than color itself. At the same time, color functions as an emotional undercurrent, shaping the mood and atmosphere of the scene. Through composition, I guide the viewer’s eye toward the edges, creating a subtle sense of tightness and tension that mirrors the fragility and endurance embedded in these stories. While the horse remains central, my imagery sometimes opens to include other animals and human figures, extending this conversation of care, memory, and belonging. In revisiting such symbols, I seek not only to honor tradition but also to question how they carry identity and hope forward.
            </p>
          </div>

          {/* Education */}
          <div className="mb-12 pb-8 border-b border-gray-100">
            <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-6">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-light text-gray-900">B.F.A. Painting & Drawing</h4>
                <p className="text-xs text-gray-600">School of the Art Institute of Chicago, Chicago, IL</p>
                <p className="text-xs text-gray-500">2024-2026</p>
              </div>
              <div>
                <h4 className="text-base font-light text-gray-900">B.A. Graphic Design</h4>
                <p className="text-xs text-gray-600">University of Illinois Chicago, Chicago, IL</p>
                <p className="text-xs text-gray-500">2021-2024</p>
              </div>
              <div>
                <h4 className="text-base font-light text-gray-900">B.F.A Printmaking and Book Illustration</h4>
                <p className="text-xs text-gray-600">National Academy of Fine Arts and Architecture, Kyiv, Ukraine
                </p>
                <p className="text-xs text-gray-500">2018-2021</p>
              </div>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="mb-12 pb-8 border-b border-gray-100">
            <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-6">Awards & Honors</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-base font-light text-gray-900">Esteemed Merit Scholarship</h4>
                <p className="text-xs text-gray-600">School of the Art Institute of Chicago</p>
                <p className="text-xs text-gray-500">2023</p>
              </div>
              <div>
                <h4 className="text-base font-light text-gray-900">Dean’s List</h4>
                <p className="text-xs text-gray-600">College of Architecture, Design, and the Arts, University of Illinois Chicago</p>
                <p className="text-xs text-gray-500">2022–2023 (Spring 2022, Fall 2022, Spring 2023)</p>
              </div>
            </div>
          </div>

          {/* Exhibitions & Shows */}
          <div className="mb-12 pb-8 border-b border-gray-100">
            <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-6">Exhibitions & Shows</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-light text-gray-900">Spring Undergraduate Exhibition (upcoming)</h4>
                <p className="text-xs text-gray-600">SAIC Galleries, 33 E. Washington St., Chicago</p>
                <p className="text-xs text-gray-500">2026</p>
              </div>
              <div>
                <h4 className="text-base font-light text-gray-900">Year End Show! 2023</h4>
                <p className="text-xs text-gray-600">University of Illinois Chicago, Chicago</p>
                <p className="text-xs text-gray-500">2023</p>
              </div>
              <div>
                <h4 className="text-base font-light text-gray-900">Year End Show! 2022 (catalog + exhibition)</h4>
                <p className="text-xs text-gray-600">University of Illinois Chicago, Chicago</p>
                <p className="text-xs text-gray-500">2022</p>
              </div>
              <div>
                <h4 className="text-base font-light text-gray-900">Open Studio Review - Fall</h4>
                <p className="text-xs text-gray-600">National Academy of Fine Arts and Architecture, Kyiv</p>
                <p className="text-xs text-gray-500">2020</p>
              </div>
              <div>
                <h4 className="text-base font-light text-gray-900">Open Studio Review - Spring</h4>
                <p className="text-xs text-gray-600">National Academy of Fine Arts and Architecture, Kyiv</p>
                <p className="text-xs text-gray-500">2020</p>
              </div>
              <div>
                <h4 className="text-base font-light text-gray-900">Open Studio Review - Fall</h4>
                <p className="text-xs text-gray-600">National Academy of Fine Arts and Architecture, Kyiv</p>
                <p className="text-xs text-gray-500">2019</p>
              </div>
              <div>
                <h4 className="text-base font-light text-gray-900">Open Studio Review - Spring</h4>
                <p className="text-xs text-gray-600">National Academy of Fine Arts and Architecture, Kyiv</p>
                <p className="text-xs text-gray-500">2019</p>
              </div>
              <div>
                <h4 className="text-base font-light text-gray-900">Open Studio Review - Fall</h4>
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