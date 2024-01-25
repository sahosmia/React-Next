export default function Panel({ title, content, isActive, onShow }) {
  const buttonTitle = isActive ? "Hide" : "Show";
  return (
    <div className="pt-5 pb-3 border-b last:border-b-0">
      <h4 className="text-2xl font-bold pb-2">{title}</h4>
      {isActive && <p className="pb-4">{content}</p>}
      <button
        onClick={onShow}
        className="rounded bg-purple-500 text-sm text-white px-6 py-2 uppercase block"
      >
        {buttonTitle}
      </button>
    </div>
  );
}
