import profilePic from '../assets/profilepic.svg';

const Profile = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 font-mono">
      {/* Main Card Container */}
      <div className="relative w-full max-w-241.75 min-h-154.75 rounded-[20px] border-[6px] border-zinc-600 bg-neutral-200 p-12 pt-28 shadow-2xl">
        {/* Top Section: Hello, ProfilePic, and Contact */}
        <div className="mb-12 flex items-start justify-between">
          <h1 className="text-7xl font-bold italic leading-none text-black">
            Hello!
          </h1>

          {/* Profile Picture */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2">
            <img
              src={profilePic}
              alt="Jianna Monique"
              className="h-69.25 w-74.25 rounded-[20px] bg-white object-cover"
            />
          </div>

          {/* Contact Section */}
          <div className="text-right text-black">
            <h2 className="mb-2 inline-block border-b-2 border-zinc-600 text-2xl font-bold italic">
              Contact
            </h2>
            <ul className="space-y-1 text-sm">
              <li>Email: jianna727@gmail.com</li>
              <li>Github: Mamon81</li>
            </ul>
          </div>
        </div>

        {/* Name Header */}
        <div className="mb-10 text-center">
          <p className="text-xl font-bold tracking-wide text-black">
            Jianna Monique M. Lucero
          </p>
        </div>

        {/* Content Grid: Status & Location Info */}
        <div className="mb-12 grid grid-cols-2 gap-x-16 gap-y-6 text-sm text-black">
          <div className="space-y-3">
            <p>
              • 4th year BS Computer Engineering Student at University of San
              Carlos
            </p>
            <p>• Mobile App Developer Intern at Focus Bear</p>
          </div>
          <div className="space-y-3">
            <p>• Currently based at Cebu City, Philippines</p>
            <p>• Internship Period: Feb 2026 - May 2026</p>
          </div>
        </div>

        {/* Tools and Skills */}
        <div className="grid grid-cols-2 gap-16 border-t-2 border-zinc-400 pt-8">
          {/* Tools */}
          <div className="text-left">
            <h3 className="mb-4 inline-block border-b-2 border-zinc-600 text-2xl font-bold italic">
              Tools
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
              <li>• Figma</li>
              <li>• Github</li>
              <li>• Google Workspace</li>
              <li>• Microsoft Office Suite</li>
              <li>• QT Creator</li>
              <li>• Visual Studio Code</li>
            </ul>
          </div>

          {/* Complete Skills Column */}
          <div className="text-left">
            <h3 className="mb-4 inline-block border-b-2 border-[#51515C] text-2xl font-bold italic">
              Skills
            </h3>
            <div className="grid grid-cols-3 gap-x-2 gap-y-1 text-sm">
              <ul className="space-y-1">
                <li>• C</li>
                <li>• C++</li>
                <li>• CSS</li>
              </ul>
              <ul className="space-y-1">
                <li>• Javascript</li>
                <li>• Flutter</li>
                <li>• HTML</li>
              </ul>
              <ul className="space-y-1">
                <li>• Java</li>
                <li className="whitespace-nowrap">• Web Development</li>
                <li className="whitespace-nowrap">• Mobile App Dev</li>
                <li className="whitespace-nowrap">• UI/UX Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
