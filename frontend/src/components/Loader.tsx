// export default function Loader() {
//   return (
//     <div className="flex flex-col items-center gap-3 py-8">
//       <div className="w-10 h-10 border-4 border-green-400 border-t-transparent rounded-full animate-spin" />
//       <p className="text-green-400 text-sm tracking-wide">Analyzing your field...</p>
//     </div>
//   )
// }

// export default function Loader() {
//   return (
//     <div className="flex flex-col items-center gap-3 py-8">
//       <div className="relative w-10 h-10">
//         <div className="absolute inset-0 border-4 border-green-900 rounded-full" />
//         <div className="absolute inset-0 border-4 border-green-400 border-t-transparent rounded-full animate-spin" />
//       </div>
//       <p className="text-green-500 text-xs tracking-widest uppercase animate-pulse">
//         Consulting AI advisor...
//       </p>
//     </div>
//   );
// }

export default function Loader() {
  return (
    <div className="flex flex-col items-center gap-3 py-8">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 border-4 border-[var(--loader-track)] rounded-full" />
        <div className="absolute inset-0 border-4 border-[var(--loader-spin)] border-t-transparent rounded-full animate-spin" />
      </div>
      <p className="text-[var(--loader-text)] text-xs tracking-widest uppercase animate-pulse">
        Consulting AI advisor...
      </p>
    </div>
  );
}
