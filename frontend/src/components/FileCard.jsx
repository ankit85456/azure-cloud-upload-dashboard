import {
  FaFileAlt,
  FaDownload,
  FaTrash,
} from "react-icons/fa";

function FileCard({ file }) {

  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 shadow-[0_20px_60px_rgba(8,16,40,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/25">

      <div className="flex items-start gap-4">

        <div className="rounded-2xl bg-cyan-500/12 p-4 ring-1 ring-inset ring-cyan-300/20">
          <FaFileAlt className="text-2xl text-cyan-300" />
        </div>

        <div className="min-w-0 flex-1">

          <h3 className="truncate text-lg font-semibold text-white">
            {file.name}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            Azure Blob File
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">

            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Uploaded
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Cloud Storage
            </span>

          </div>

        </div>

      </div>

      <div className="mt-6 flex gap-3">

        <a
          href={file.url}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 py-3 text-emerald-200 transition hover:bg-emerald-400/20"
        >
          <FaDownload className="mx-auto" />
        </a>

        <button className="flex-1 rounded-2xl border border-rose-400/20 bg-rose-400/10 py-3 text-rose-200 transition hover:bg-rose-400/20">
          <FaTrash className="mx-auto" />
        </button>

      </div>

    </article>
  );
}

export default FileCard;