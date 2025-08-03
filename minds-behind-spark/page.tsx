
'use client';

import Link from 'next/link';
import Header from '../../components/Header';

export default function MindsBehindsSparkPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="relative min-h-screen flex items-center justify-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Creative%20marketing%20team%20collaboration%20workspace%20with%20modern%20design%2C%20diverse%20professionals%20brainstorming%20around%20holographic%20displays%2C%20futuristic%20office%20environment%20with%20purple%20and%20pink%20ambient%20lighting%2C%20innovative%20technology%20interfaces%2C%20clean%20minimalist%20aesthetic%2C%20professional%20atmosphere%20with%20floating%20data%20visualizations%20and%20creative%20energy&width=1920&height=1080&seq=minds1&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/60">
          
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              We're <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">CxJ</span>.
              <br />We Built Spark to Give You an
              <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Unfair Advantage</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Meet the creative minds who transformed marketing from guesswork into a strategic advantage through AI-powered personalization and interactive experiences.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap text-lg">
                Schedule a Discovery Call
              </button>
              <Link 
                href="#our-story" 
                className="text-white hover:text-purple-300 underline cursor-pointer whitespace-nowrap text-lg"
              >
                Learn Our Story
              </Link>
            </div>
          </div>
        </section>

        {/* Our Story: Power Duo Section */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8">
                Our Story: The Power Duo Behind the Innovation
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                CxJ was founded by Junior and Chrisia, work/life partners with a fierce passion for all things creative. Our motto, "Life, Art, Tools," reminds us that the best results come from blending human experience with creative strategy and powerful technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div 
                className="rounded-xl overflow-hidden shadow-lg"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Creative%20power%20duo%20business%20partners%2C%20Junior%20and%20Chrisia%20working%20together%20in%20modern%20innovative%20workspace%2C%20diverse%20couple%20collaborating%20on%20marketing%20strategies%2C%20warm%20professional%20atmosphere%20with%20purple%20and%20pink%20ambient%20lighting%2C%20contemporary%20office%20setting%20with%20creative%20tools%20and%20technology%20displays%2C%20life%20art%20tools%20philosophy%20visualization&width=800&height=600&seq=powerdue1&orientation=landscape')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '400px'
                }}
              ></div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 rounded-full">
                    <i className="ri-heart-line text-purple-600 dark:text-purple-400 text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Life</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Understanding that marketing is ultimately about human connection and improving real lives through meaningful business relationships.
                </p>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-pink-100 dark:bg-pink-900/30 rounded-full">
                    <i className="ri-palette-line text-pink-600 dark:text-pink-400 text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Art</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Bringing creative vision and artistic sensibility to every strategy, making marketing campaigns that are not just effective but genuinely inspiring.
                </p>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <i className="ri-tools-line text-blue-600 dark:text-blue-400 text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Tools</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Leveraging cutting-edge technology and AI to amplify human creativity, creating marketing solutions that are both powerful and intuitive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section id="our-story" className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                From Marketing Chaos to Strategic Clarity
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                We've been where you are. Overwhelmed by endless marketing tactics, struggling to know what actually works for your business, and tired of generic advice that doesn't fit your unique situation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
                  The Problem We Solved
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-red-100 dark:bg-red-900/30 rounded-full flex-shrink-0">
                      <i className="ri-close-line text-red-600 dark:text-red-400"></i>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Generic marketing advice that doesn't account for your specific business type, industry, or budget constraints
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-red-100 dark:bg-red-900/30 rounded-full flex-shrink-0">
                      <i className="ri-close-line text-red-600 dark:text-red-400"></i>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Overwhelming amount of marketing tools and tactics without clear guidance on what to prioritize
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-red-100 dark:bg-red-900/30 rounded-full flex-shrink-0">
                      <i className="ri-close-line text-red-600 dark:text-red-400"></i>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Static, one-size-fits-all marketing strategies that ignore the unique challenges of your business
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
                  Our Solution: Spark
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-green-100 dark:bg-green-900/30 rounded-full flex-shrink-0">
                      <i className="ri-check-line text-green-600 dark:text-green-400"></i>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      AI-powered personalization that adapts strategies to your specific business profile and goals
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-green-100 dark:bg-green-900/30 rounded-full flex-shrink-0">
                      <i className="ri-check-line text-green-600 dark:text-green-400"></i>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Interactive tools and immersive experiences that make learning marketing strategies engaging and actionable
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-green-100 dark:bg-green-900/30 rounded-full flex-shrink-0">
                      <i className="ri-check-line text-green-600 dark:text-green-400"></i>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Community-driven insights and collaborative features that connect you with like-minded business owners
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Our Process
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                We've refined our approach over hundreds of successful projects. Here's exactly how we transform your marketing from scattered tactics into a strategic advantage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">1</span>
                </div>
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6">
                  <i className="ri-search-eye-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  Discovery and Review
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We dive deep into your business, current marketing efforts, and competitive landscape to understand exactly where you are and where you want to go.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
                </div>
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-6">
                  <i className="ri-compass-3-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  Market Orientation and Research
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We analyze your market position, identify untapped opportunities, and map out the competitive advantages that will set you apart.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">3</span>
                </div>
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-500 rounded-full mb-6">
                  <i className="ri-lightbulb-flash-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  Creative Brainstorming and Strategy
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our team combines creative thinking with data-driven insights to craft personalized strategies that align perfectly with your business goals.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">4</span>
                </div>
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-500 rounded-full mb-6">
                  <i className="ri-rocket-2-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  Onboarding and Implementation
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We guide you step-by-step through implementing your new strategy, ensuring smooth integration with your existing systems and workflows.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">5</span>
                </div>
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mb-6">
                  <i className="ri-line-chart-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  Performance Measurements and Reporting
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We track key metrics and provide detailed reports so you can see exactly how your new strategy is driving real business results.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">6</span>
                </div>
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-pink-500 to-rose-500 rounded-full mb-6">
                  <i className="ri-refresh-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  Review and Optimize
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We continuously refine and optimize your strategy based on performance data, market changes, and emerging opportunities.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap text-lg">
                Start Your Strategy Journey
              </button>
            </div>
          </div>
        </section>

        {/* Our Work in Action: The White Collar Fight Club */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Our Work in Action: The White Collar Fight Club
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                See how we transformed a struggling brand into a lead-generation powerhouse through strategic thinking and data-driven execution.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div 
                className="rounded-xl overflow-hidden shadow-lg"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20fitness%20boxing%20gym%20interior%20with%20modern%20equipment%2C%20white%20collar%20professionals%20training%2C%20sleek%20contemporary%20design%20with%20purple%20and%20pink%20accent%20lighting%2C%20high-end%20corporate%20fitness%20facility%2C%20clean%20minimalist%20aesthetic%20with%20professional%20atmosphere%20and%20premium%20branding%20elements&width=800&height=600&seq=fightclub1&orientation=landscape')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '400px'
                }}
              ></div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    Brand Strategy
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">Background</h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        The White Collar Fight Club approached CxJ to revitalise their brand strategy amidst slowing growth and high lead costs.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">Strategy</h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Our process involved thorough market research, competitor analysis, and identifying growth opportunities to develop a strategic roadmap.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-3">Results</h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        We achieved a 34.82% increase in followers, a 118% reduction in cost per lead, and a 71.15% increase in monthly leads.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">+34.82%</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Followers</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">-118%</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Cost Per Lead</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 mb-1">+71.15%</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Monthly Leads</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-100 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Meet the CxJ Team
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                A diverse group of marketing strategists, AI specialists, and creative technologists united by one mission: giving you an unfair advantage in your market.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div 
                  className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-400"
                  style={{
                    backgroundImage: `url('https://static.readdy.ai/image/2ca1fe16da2bdc08ccd55cd264d8c9c1/b1f2acf326702c5982cf1eca68f4b328.webp')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Junior Onunze</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">Lead Marketing Strategist</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Former VP of Marketing at three Fortune 500 companies. Sarah brings 15 years of experience turning complex marketing challenges into winning strategies.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div 
                  className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-br from-blue-400 to-cyan-400"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20innovative%20AI%20engineer%2C%20tech%20specialist%20with%20futuristic%20laboratory%20background%2C%20clean%20business%20portrait%20with%20modern%20lighting%2C%20cutting-edge%20technology%20atmosphere%2C%20blue%20and%20cyan%20ambient%20colors%2C%20high-tech%20workspace%20setting&width=400&height=400&seq=team2&orientation=squarish')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Marcus Rodriguez</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">AI Engineering Lead</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  PhD in Machine Learning from MIT. Marcus architected the AI personalization engine that makes Spark adapt to each user's unique business profile.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div 
                  className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-br from-green-400 to-teal-400"
                  style={{
                    backgroundImage: `url('https://static.readdy.ai/image/2ca1fe16da2bdc08ccd55cd264d8c9c1/ed1d8345698375352e48f4d258884b85.webp')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Chrisia Borda</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">Creative Experience Director</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Award-winning UX designer who spent 8 years at Apple. Emma designed the intuitive, engaging experiences that make complex marketing strategies feel effortless.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Our Philosophy: Life, Art, Tools
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Everything we create is guided by three core principles that shape how we think about marketing, technology, and human connection.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6">
                  <i className="ri-heart-pulse-line text-white text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Life</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Marketing isn't just about conversion rates and ROI—it's about creating genuine connections that improve people's lives. Every strategy we develop considers the human impact, not just the business metrics.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-6">
                  <i className="ri-palette-line text-white text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Art</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Great marketing is an art form. It requires creativity, intuition, and emotional intelligence. Our tools are designed to enhance your creative process, not replace it with cold automation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-500 rounded-full mx-auto mb-6">
                  <i className="ri-tools-line text-white text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Tools</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  The best tools are invisible—they amplify your capabilities without getting in your way. We've spent years perfecting interfaces that feel natural and workflows that actually make sense.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-gray-100 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                The Results Speak for Themselves
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Since launching Spark, we've helped thousands of businesses transform their marketing from scattered tactics into strategic advantages.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">2.4x</div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Average ROI Increase</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">89%</div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Strategy Implementation Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-2">15k+</div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Businesses Transformed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2">4.9/5</div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">User Satisfaction Score</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                "CxJ didn't just build another marketing tool—they created an entire ecosystem that finally makes marketing feel achievable. For the first time, I have a clear roadmap that's actually tailored to my business."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20satisfied%20business%20owner%2C%20confident%20entrepreneur%20with%20successful%20company%20background%2C%20clean%20business%20portrait%20with%20warm%20lighting%2C%20achievement%20atmosphere%2C%20professional%20workspace%20setting&width=200&height=200&seq=testimonial1&orientation=squarish')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800 dark:text-gray-200">Jessica Martinez</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">CEO, GrowthWorks</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Gain Your Unfair Advantage?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Join thousands of business owners who've transformed their marketing with Spark. Your personalized strategy awaits.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link 
                href="/"
                className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-4 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap text-lg"
              >
                Start Your Free Strategy Session
              </Link>
              <button className="border-2 border-white hover:bg-white hover:text-purple-600 text-white px-8 py-4 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap text-lg">
                Schedule a Discovery Call
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
