function StorageStats() {
  const stats = [
    { label: "Total Storage", value: "10 GB", detail: "Provisioned capacity", progress: "100%" },
    { label: "Used Storage", value: "7.1 GB", detail: "71% of quota used", progress: "71%" },
    { label: "Files Uploaded", value: "128", detail: "24 added this week", progress: "84%" },
  ];

  return (
    <aside className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_24px_80px_rgba(8,16,40,0.4)] backdrop-blur-xl sm:p-8">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/75">Storage</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">Usage Stats</h2>
      </div>
      <div className="space-y-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[1.5rem] border border-white/10 bg-night-800/70 p-5 transition hover:-translate-y-1 hover:border-cyan-300/25"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">{stat.label}</p>
                <h3 className="mt-2 text-3xl font-semibold text-white">{stat.value}</h3>
                <p className="mt-2 text-sm text-slate-400">{stat.detail}</p>
              </div>
              <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                {stat.progress}
              </span>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-700/70">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-400"
                style={{ width: stat.progress }}
              />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default StorageStats;
