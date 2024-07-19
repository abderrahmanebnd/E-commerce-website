function Advantage({ children, title, info }) {
  return (
    <li className="flex items-center gap-5">
      <span className="text-main text-4xl"> {children}</span>
      <p className="flex flex-col ">
        <span className="font-bold text-text text-lg">{title}</span>
        <span className="text-text-muted">{info}</span>
      </p>
    </li>
  );
}

export default Advantage;
