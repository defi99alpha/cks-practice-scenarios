import React from 'react';
import Link from 'next/link';

const WelcomePage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-hidden">
      <div className="flex flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          {/* Visual Panel (Left) */}
          <div className="hidden lg:flex items-center justify-center p-8 bg-black/10 dark:bg-black/20">
            <div
              className="w-full h-full max-w-2xl bg-center bg-no-repeat bg-contain"
              data-alt="Abstract graphic representing interconnected data nodes and financial charts, symbolizing DeFi network concepts."
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAE-P2xgfBb5jE_--L4IsPNtO3A7n71Uz0naNklJKi9pKO2I7MFXyXAT_nlAhCP6Wcnz8-mXbZtvfXW03ZlEdy32rO-zZY93EaV9T6JlnqZrLcstJxbC1UnbV8pB_b_HbXiFXi4VU-yUGHNzp7GDsvbK5bnv_MLSa4vKMWsM9hzlVDPCPft59yzMWJhIY6ORRvL1MrHDLxIBmu0WsIkjxpA_gzMX4FiA404AFXps5Glr73p6Y9dSo_mEiEZI8XYxqPfHbzLo5zsPfOg")',
                backgroundSize: 'cover',
                borderRadius: '1rem',
              }}
            ></div>
          </div>
          {/* Content Panel (Right) */}
          <div className="flex flex-col items-center justify-center w-full px-4 sm:px-8 py-12">
            <div className="flex flex-col w-full max-w-md space-y-8">
              {/* Logo */}
              <div className="flex items-center gap-3 self-start">
                <div className="text-primary" data-icon="Hexagon">
                  <svg
                    className="text-primary fill-current"
                    height="32"
                    viewBox="0 0 256 256"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M228.4 83.2a16.1 16.1 0 0 0-13.5-8L140 60.3a15.8 15.8 0 0 0-15.1-4.4l-68 31a16.1 16.1 0 0 0-9.8 14.6v62.1a16.1 16.1 0 0 0 9.8 14.6l68 31a15.8 15.8 0 0 0 15.1-4.4l74.9-14.8a16.1 16.1 0 0 0 13.5-8V83.2Z"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Rackz</h1>
              </div>
              {/* Hero Section Modified */}
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">
                  Welcome to Rackz.
                </h1>
                <h2 className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal sm:text-lg">
                  Your intelligent workspace for DeFi portfolio management.
                </h2>
              </div>
              {/* TextGrid Modified */}
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-1 gap-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-white/5 p-4 flex-row items-center">
                  <div className="text-primary flex-shrink-0">
                    <span className="material-symbols-outlined">dashboard</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-gray-900 dark:text-white text-base font-bold leading-tight">
                      Unified Dashboard
                    </h2>
                    <p className="text-gray-500 dark:text-[#9ba6bb] text-sm font-normal leading-normal">
                      All your DeFi assets and agents in one place.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-white/5 p-4 flex-row items-center">
                  <div className="text-primary flex-shrink-0">
                    <span className="material-symbols-outlined">smart_toy</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-gray-900 dark:text-white text-base font-bold leading-tight">
                      Intelligent Automation
                    </h2>
                    <p className="text-gray-500 dark:text-[#9ba6bb] text-sm font-normal leading-normal">
                      Deploy agents to automate your strategies.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-white/5 p-4 flex-row items-center">
                  <div className="text-primary flex-shrink-0">
                    <span className="material-symbols-outlined">insights</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-gray-900 dark:text-white text-base font-bold leading-tight">
                      Actionable Insights
                    </h2>
                    <p className="text-gray-500 dark:text-[#9ba6bb] text-sm font-normal leading-normal">
                      Data-driven analytics to optimize performance.
                    </p>
                  </div>
                </div>
              </div>
              {/* CTA Section */}
              <div className="flex flex-col gap-4 pt-4">
                {/* SingleButton Modified */}
                <Link href="/onboarding" passHref>
                  <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                    <span className="truncate">Get Started</span>
                  </button>
                </Link>
                {/* MetaText Modified */}
                <a
                  className="text-gray-500 dark:text-[#9ba6bb] text-sm font-normal leading-normal text-center hover:underline"
                  href="#"
                >
                  Already have an account? Sign In
                </a>
              </div>
              {/* Progress Indicator */}
              <div className="flex justify-center items-center pt-4 space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
