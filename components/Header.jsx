export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">

          {/* Logo + Nav */}
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center text-xl font-bold tracking-tight">
              <span className="text-[#FF6600]">i</span>
              <span className="text-gray-800">nternshala</span>
            </a>
            <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-600">
              <a
                href="#"
                className="text-[#006CB7] border-b-2 border-[#006CB7] px-3 py-4 inline-block"
              >
                Internships
              </a>
              <a href="#" className="hover:text-[#006CB7] px-3 py-4 inline-block">
                Courses
              </a>
              <a href="#" className="hover:text-[#006CB7] px-3 py-4 inline-block">
                Jobs
              </a>
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="hidden md:block text-sm text-[#006CB7] border border-[#006CB7] font-medium px-3 py-1.5 rounded hover:bg-blue-50 transition-colors">
              Post internship
            </button>
            <button className="text-sm text-gray-700 font-medium px-3 py-1.5 hover:text-[#006CB7]">
              Login
            </button>
            <button className="text-sm bg-[#006CB7] text-white px-4 py-1.5 rounded font-medium hover:bg-[#005a9e] transition-colors">
              Register
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
