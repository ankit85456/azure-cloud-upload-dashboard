import { FaCloudUploadAlt } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";

function UploadBox() {

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUpload = async (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();

    formData.append("file", file);

    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          onUploadProgress: (progressEvent) => {

            const percent = Math.round(
              (progressEvent.loaded * 100) /
              progressEvent.total
            );

            setProgress(percent);
          },
        }
      );

      console.log(res.data);

      alert("File Uploaded Successfully");

    } catch (error) {

      console.log(error);

      alert("Upload Failed");

    } finally {

      setLoading(false);
    }
  };

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_24px_80px_rgba(8,16,40,0.4)] backdrop-blur-xl sm:p-8">

      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/75">
            Secure Upload
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-white">
            Upload Files
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
            Drag files here or browse from your device.
          </p>
        </div>

        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
          Live sync enabled
        </div>

      </div>

      <div className="rounded-[1.75rem] border border-dashed border-cyan-300/35 bg-night-800/70 p-8 text-center transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-400/8 sm:p-14">

        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-cyan-500/15 p-6 ring-1 ring-inset ring-cyan-300/20">
            <FaCloudUploadAlt className="text-6xl text-cyan-300" />
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-white">
          Drag and drop files
        </h3>

        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-400">
          Upload files securely to Azure Blob Storage.
        </p>

        <input
          type="file"
          className="hidden"
          id="fileUpload"
          onChange={handleUpload}
        />

        <label
          htmlFor="fileUpload"
          className="mt-8 inline-flex cursor-pointer items-center justify-center rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_12px_35px_rgba(34,211,238,0.35)]"
        >
          {loading ? "Uploading..." : "Browse Files"}
        </label>

      </div>

      <div className="mt-8 grid gap-4 rounded-[1.75rem] border border-white/10 bg-night-800/60 p-5 sm:grid-cols-[1fr_auto] sm:items-center">

        <div>

          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="text-slate-300">
              Upload Progress
            </span>

            <span className="font-semibold text-cyan-200">
              {progress}%
            </span>
          </div>

          <div className="h-3 w-full overflow-hidden rounded-full bg-slate-700/70">

            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300"
              style={{ width: `${progress}%` }}
            />

          </div>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left sm:min-w-44">

          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
            Queue
          </p>

          <p className="mt-2 text-lg font-semibold text-white">
            {loading ? "Uploading..." : "Ready"}
          </p>

        </div>

      </div>

    </section>
  );
}

export default UploadBox;