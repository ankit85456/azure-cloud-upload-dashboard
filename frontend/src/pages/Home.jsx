import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import UploadBox from "../components/UploadBox";
import StorageStats from "../components/StorageStats";
import FileCard from "../components/FileCard";

function Home() {

  const [files, setFiles] = useState([]);

  const fetchFiles = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/files"
      );

      setFiles(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchFiles();

  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-night-900 text-slate-50">

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-8rem] top-[-6rem] h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="absolute right-[-5rem] top-24 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

      </div>

      <Navbar />

      <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">

        <section className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_24px_80px_rgba(8,16,40,0.45)] backdrop-blur-xl sm:p-8">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-3xl">

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
                Azure Blob Storage Dashboard
              </div>

              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Upload, organize, and monitor cloud files with a clean modern workspace.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Secure Azure cloud upload system with MongoDB authentication and real-time file management.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-5">

              <div className="rounded-3xl border border-white/10 bg-night-800/70 p-4 text-center backdrop-blur-md">

                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                  Active Uploads
                </p>

                <p className="mt-3 text-3xl font-semibold text-cyan-300">
                  {files.length}
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-night-800/70 p-4 text-center backdrop-blur-md">

                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                  Success Rate
                </p>

                <p className="mt-3 text-3xl font-semibold text-cyan-300">
                  99.8%
                </p>

              </div>

            </div>

          </div>

        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.75fr)_minmax(320px,1fr)]">

          <UploadBox />

          <StorageStats />

        </section>

        <section className="space-y-6">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">
                Recent Assets
              </p>

              <h2 className="text-3xl font-semibold text-white">
                Uploaded Files
              </h2>

            </div>

            <p className="text-sm text-slate-400">
              {files.length} files stored in Azure Blob Storage
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {files.map((file, index) => (

              <FileCard
                key={index}
                file={file}
              />

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}

export default Home;