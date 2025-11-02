export default function QuantityCounter() {
  return (
    <div className="bg-brand-light flex items-center justify-between p-4 w-30">
      <button className="text-[13px] font-bold opacity-25 cursor-pointer">-</button>
      <span className="mx-5 text-[13px] font-bold">1</span>
      <button className="text-[13px] font-bold opacity-25 cursor-pointer">+</button>
    </div>
  );
}
