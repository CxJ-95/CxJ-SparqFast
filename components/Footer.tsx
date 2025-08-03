
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="text-3xl font-bold text-white">
              CxJ
            </div>
            <p className="text-gray-300 text-lg font-medium">
              Life, Art, Tools.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full transition-colors cursor-pointer"
              >
                <i className="ri-linkedin-fill text-xl text-blue-400"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full transition-colors cursor-pointer"
              >
                <i className="ri-instagram-fill text-xl text-pink-400"></i>
              </a>
            </div>
          </div>

          {/* Column 2: About CxJ */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              About CxJ
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/minds-behind-spark" 
                className="text-gray-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
              >
                The Minds Behind Spark
              </Link>
              <Link 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
              >
                Our Process
              </Link>
              <Link 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
              >
                Case Studies
              </Link>
            </nav>
          </div>

          {/* Column 3: The Spark Universe */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              The Spark Universe
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/strategy-playground" 
                className="text-gray-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
              >
                Strategy Playground
              </Link>
              <Link 
                href="/hidden-gems" 
                className="text-gray-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
              >
                Hidden Gems
              </Link>
              <Link 
                href="/collab-lab" 
                className="text-gray-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
              >
                Collab Lab
              </Link>
            </nav>
          </div>

          {/* Column 4: Start a Project */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              Start a Project
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Ready to create some marketing magic? Let's talk.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
