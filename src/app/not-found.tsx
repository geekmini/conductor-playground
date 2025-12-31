import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      {/* Background effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan/20 blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-xl">
        <div className="mb-8">
          <span className="text-9xl font-bold gradient-text font-display">404</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-display">
          Page Not Found
        </h1>

        <p className="text-white/75 text-lg mb-8 font-body">
          Oops! The page you&apos;re looking for seems to have vanished into the
          digital void. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/#contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>

        {/* Decorative element */}
        <div className="mt-16 flex justify-center gap-2" aria-hidden="true">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                background: i % 2 === 0 ? "var(--violet)" : "var(--cyan)",
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
