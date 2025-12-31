// Tron.ai Logo - Brain with Lightning Bolt
export const TronLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Tron.ai logo"
    role="img"
  >
    {/* Left brain - cyan side with wavy lobes */}
    <path
      d="M28 12c-3 0-6 1-8 3-4 0-7 3-8 6-3 2-5 6-5 10 0 3 1 6 3 8 0 4 2 7 5 9 2 3 6 5 10 5h3"
      stroke="#00FFFF"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Left brain inner curves */}
    <path
      d="M12 25c-2 1-3 3-3 5s1 4 3 5"
      stroke="#00FFFF"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M16 19c-2 1-4 3-4 6s2 5 4 6"
      stroke="#00FFFF"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M13 38c-1 1-2 3-2 5s1 3 2 4"
      stroke="#00FFFF"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />

    {/* Right brain - blue side with wavy lobes */}
    <path
      d="M36 12c3 0 6 1 8 3 4 0 7 3 8 6 3 2 5 6 5 10 0 3-1 6-3 8 0 4-2 7-5 9-2 3-6 5-10 5h-3"
      stroke="#0066FF"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Right brain inner curves */}
    <path
      d="M52 25c2 1 3 3 3 5s-1 4-3 5"
      stroke="#0066FF"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M48 19c2 1 4 3 4 6s-2 5-4 6"
      stroke="#0066FF"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M51 38c1 1 2 3 2 5s-1 3-2 4"
      stroke="#0066FF"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />

    {/* Lightning bolt - sharp Z shape through center */}
    <path
      d="M38 8L26 30h10L24 56l18-30H32L38 8z"
      fill="url(#tron-lightning)"
      stroke="url(#tron-lightning)"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />

    {/* Circuit connection dots */}
    <circle cx="8" cy="30" r="2" fill="#00FFFF" />
    <circle cx="56" cy="30" r="2" fill="#0066FF" />
    <circle cx="10" cy="42" r="1.5" fill="#00FFFF" opacity="0.8" />
    <circle cx="54" cy="42" r="1.5" fill="#0066FF" opacity="0.8" />

    <defs>
      <linearGradient id="tron-lightning" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0066FF" />
        <stop offset="50%" stopColor="#00DDFF" />
        <stop offset="100%" stopColor="#00FFFF" />
      </linearGradient>
    </defs>
  </svg>
);
