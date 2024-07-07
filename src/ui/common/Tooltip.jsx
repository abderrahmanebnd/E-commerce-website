function Tooltip({ text }) {
  return (
    <div className="absolute top-[120%] -left-1/2 mb-2 px-2 py-1 bg-bgColor-2 text-text text-sm border tracking-wide min-w-14 text-center">
      {text}
    </div>
  );
}

export default Tooltip;
