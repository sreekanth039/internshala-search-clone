export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a1a2e", color: "#cccccc" }} className="mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">About Internshala</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">We are hiring</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tutorials &amp; guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">For Students</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Internships</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fresher jobs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Online courses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trainings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Resume maker</a></li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">For Employers</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Post an internship</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Post a job</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Employer login</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Talent search</a></li>
            </ul>
          </div>

          {/* Get the app */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Get the Internshala App</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="inline-flex items-center gap-2 border border-gray-600 rounded px-3 py-2 hover:border-gray-400 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.32.07 2.22.72 2.98.75.98-.21 1.91-.93 3.01-.84 1.29.1 2.26.63 2.93 1.64-2.72 1.63-2.28 5.23.3 6.27-.55 1.44-1.23 2.87-2.22 5.06zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                <div>
                  <p className="text-[9px] text-gray-400">Download on the</p>
                  <p className="text-xs font-semibold text-white">App Store</p>
                </div>
              </a>
              <a href="#" className="inline-flex items-center gap-2 border border-gray-600 rounded px-3 py-2 hover:border-gray-400 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white"><path d="M3.18 23.76a2.5 2.5 0 01-.93-2V2.24a2.5 2.5 0 01.93-2L3.3 2.1 13.9 12 3.3 21.9l-.12-.14zM16.44 15.27L6.21 21.08l8.11-8.11 2.12 2.3zM20.43 10.5a1.5 1.5 0 010 3l-2.5 1.43-2.26-2.26L17.93 10.5l2.5-.0zM6.21 2.92l10.23 5.81-2.12 2.11-8.11-8.1v.18z"/></svg>
                <div>
                  <p className="text-[9px] text-gray-400">Get it on</p>
                  <p className="text-xs font-semibold text-white">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">
              <span style={{ color: "#ffffff" }}>INTERN</span>
              <span style={{ color: "#FF8C00" }}>SHALA</span>
            </span>
          </div>
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} Internshala — A product of Scholiverse Educare Pvt Ltd
          </p>
          <div className="flex gap-4 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
