export function AdPlaceholder({ position }: { position: 'top' | 'middle' | 'footer' }) {
  return (
    <div className="my-8 w-full max-w-[728px] mx-auto h-[90px] bg-blue-50/30 border border-dashed border-blue-200 rounded-xl flex flex-col items-center justify-center text-blue-400 text-xs font-medium uppercase tracking-[0.3em] relative overflow-hidden">
      <div className="absolute top-1 right-2 text-[10px] text-blue-300">ADVERTISEMENT</div>
      <p>Responsive Ad - {position === 'top' ? 'Top' : position === 'middle' ? 'Middle' : 'Footer'} Area</p>
    </div>
  );
}
