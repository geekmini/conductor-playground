import { TronLogo } from "./TronLogo";

const navItems = ["Work", "Services", "About", "Contact"];

const socialLinks = [
  { name: "Twitter", url: "https://twitter.com/tronai", label: "Follow us on Twitter" },
  { name: "LinkedIn", url: "https://linkedin.com/company/tronai", label: "Connect on LinkedIn" },
  { name: "Dribbble", url: "https://dribbble.com/tronai", label: "See our work on Dribbble" },
  { name: "Instagram", url: "https://instagram.com/tronai", label: "Follow us on Instagram" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-12 border-t border-white/5" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4" aria-label="Tron.ai home">
              <TronLogo className="w-10 h-10" />
              <span className="text-xl font-bold tracking-tight font-display">
                tron.ai
              </span>
            </a>
            <p className="text-white/75 max-w-sm font-body">
              A creative tech agency crafting digital experiences that transcend
              reality.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="font-semibold mb-4 font-display">Navigation</h3>
            <ul className="space-y-2 text-white/75 font-body">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-semibold mb-4 font-display">Connect</h3>
            <ul className="space-y-2 text-white/75 font-body">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label={item.label}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-white/75 text-sm font-body">
            &copy; {currentYear} Tron.ai. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/75 text-sm font-body mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
