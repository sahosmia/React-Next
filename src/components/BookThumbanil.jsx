export default function BookThumbanil({ thumbnail }) {
  return (
    <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
      <img className="max-w-[144px]" src={thumbnail} alt="book name" />
    </div>
  );
}
