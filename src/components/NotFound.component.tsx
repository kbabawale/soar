function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px]">
      <span
        style={{ fontSize: "4rem", color: "red" }}
        className="material-symbols-outlined"
      >
        error
      </span>
      <span className="text-3xl">Page could not be found.</span>
    </div>
  );
}

export default NotFound;
