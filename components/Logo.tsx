export default function Logo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="JH Studio logo" className={className}>
      <rect width="64" height="64" rx="16" fill="#101B34" />
      <path d="M21 14V41Q21 51 11 51" fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M45 14V50" fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" />
      <path d="M21 32H45" fill="none" stroke="#FFC53D" strokeWidth="9" strokeLinecap="round" />
    </svg>
  );
}
