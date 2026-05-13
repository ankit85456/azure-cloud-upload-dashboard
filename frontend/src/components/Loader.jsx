function Loader() {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-5 py-3 text-cyan-100 backdrop-blur-md">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-cyan-300 border-t-transparent" />
        <span className="text-sm font-medium">Loading files...</span>
      </div>
    </div>
  );
}

export default Loader;
