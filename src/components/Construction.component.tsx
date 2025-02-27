function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center">
      <span
        style={{ fontSize: "4rem", color: "red" }}
        className="material-symbols-outlined"
      >
        warning
      </span>
      <span className="text-3xl">Page under construction.</span>
    </div>
  );
}

export default UnderConstruction;
