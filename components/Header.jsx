export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-[#006CB7] font-bold text-xl tracking-tight">
            internshala
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700 font-medium">
            <a
              href="#"
              className="text-[#006CB7] border-b-2 border-[#006CB7] pb-1"
            >
              Internships
            </a>
            <a href="#" className="hover:text-[#006CB7]">
              Courses
            </a>
            <a href="#" className="hover:text-[#006CB7]">
              Jobs
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm text-[#006CB7] font-medium hover:underline">
            Login
          </button>
          <button className="text-sm bg-[#006CB7] text-white px-4 py-2 rounded-md font-medium hover:bg-[#005a9e] transition-colors">
            Register
          </button>
        </div>
      </div>
    </header>
  );
}
