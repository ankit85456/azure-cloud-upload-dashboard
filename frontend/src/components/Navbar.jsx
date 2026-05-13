import { FaCloud } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/35 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-3">

          <div className="rounded-2xl bg-cyan-500/15 p-3 ring-1 ring-inset ring-cyan-300/30">
            <FaCloud className="text-2xl text-white" />
          </div>

          <div>
            <h1 className="text-lg font-semibold tracking-wide text-white sm:text-2xl">
              Azure Cloud Upload
            </h1>

            <p className="text-xs text-slate-400 sm:text-sm">
              Modern cloud storage dashboard
            </p>
          </div>

        </div>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="rounded-2xl border border-red-300/20 bg-red-400/10 px-4 py-2 text-sm font-semibold text-red-100 transition hover:-translate-y-0.5 hover:bg-red-400/20 hover:shadow-[0_12px_30px_rgba(248,113,113,0.18)] sm:px-5"
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;