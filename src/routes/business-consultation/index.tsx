import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';

export const head: DocumentHead = {
    title: 'Business Consultation ₹2,499 | Expert Business Advisory - BizAssist',
    meta: [
        {
            name: 'description',
            content: 'Professional business consultation at ₹2,499 per session. 60-minute expert advisory for startups & growing businesses. Strategic planning, financial advice, marketing & operations. Book now.',
        },
        {
            name: 'keywords',
            content: 'business consultation, business advisor, business consultant India, startup consultation, business coaching, strategic planning, business growth consultant, small business advisor, expert business advice',
        },
    ],
};

export default component$(() => {
    return (
        <div class="min-h-screen bg-gray-50">
            <Header/>

            {/* Hero Section */}
            <section class="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-3xl">
                        <div
                            class="inline-block bg-white/30 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            Expert Business Advisory Service
                        </div>
                        <h1 class="text-4xl sm:text-5xl font-bold mb-6 leading-tight">Business Consultation</h1>
                        <p class="text-lg sm:text-xl mb-8 text-indigo-50 leading-relaxed">Get expert guidance to grow
                            your business, solve challenges, and make strategic decisions. One-on-one consultation with
                            experienced business advisors</p>
                        <div class="flex flex-wrap gap-4 items-center mb-8">
                            <div class="bg-white text-indigo-700 px-6 py-3 rounded-lg font-bold text-2xl shadow-lg">
                                ₹2,499
                            </div>
                            <span class="text-indigo-100 text-base">Per consultation session</span>
                        </div>
                        <button
                            class="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg">
                            Book Consultation
                        </button>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section class="py-16 sm:py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">Why Choose Our Business
                        Consultation?</h2>
                    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Expert guidance tailored to your
                        business needs</p>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div
                            class="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-indigo-600">
                            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">Expert Guidance</h3>
                            <p class="text-gray-600 leading-relaxed">Get advice from experienced business consultants
                                with proven track records</p>
                        </div>

                        <div
                            class="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-indigo-600">
                            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">Strategic Planning</h3>
                            <p class="text-gray-600 leading-relaxed">Develop effective strategies for growth, expansion,
                                and market positioning</p>
                        </div>

                        <div
                            class="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-indigo-600">
                            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">Financial Advisory</h3>
                            <p class="text-gray-600 leading-relaxed">Optimize cash flow, reduce costs, and improve
                                profitability with expert advice</p>
                        </div>

                        <div
                            class="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-600">
                            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">HR & Operations</h3>
                            <p class="text-gray-600 leading-relaxed">Improve team productivity, hiring strategies, and
                                operational efficiency</p>
                        </div>

                        <div
                            class="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-600">
                            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">Marketing Strategy</h3>
                            <p class="text-gray-600 leading-relaxed">Build effective marketing campaigns and customer
                                acquisition strategies</p>
                        </div>

                        <div
                            class="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-600">
                            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">Risk Management</h3>
                            <p class="text-gray-600 leading-relaxed">Identify and mitigate business risks before they
                                impact your bottom line</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consultation Areas */}
            <section class="bg-white py-16 sm:py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">What We Can Help You
                        With</h2>
                    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Comprehensive business consultation
                        across all areas</p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-6">For Startups</h3>
                            <div class="space-y-4">
                                {[
                                    {
                                        title: 'Business Idea Validation',
                                        desc: 'Evaluate market potential and feasibility of your business concept'
                                    },
                                    {
                                        title: 'Business Model Development',
                                        desc: 'Create sustainable revenue models and pricing strategies'
                                    },
                                    {
                                        title: 'Funding Strategy',
                                        desc: 'Navigate funding options and prepare for investor pitches'
                                    },
                                    {
                                        title: 'Go-to-Market Strategy',
                                        desc: 'Launch your product with effective market entry plans'
                                    },
                                    {
                                        title: 'Legal & Compliance',
                                        desc: 'Navigate business registrations, licenses, and regulations'
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} class="flex gap-4">
                                        <div class="flex-shrink-0">
                                            <div
                                                class="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                                                <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor"
                                                     viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2" d="M5 13l4 4L19 7"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-gray-800 mb-1">{item.title}</h4>
                                            <p class="text-gray-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-6">For Growing Businesses</h3>
                            <div class="space-y-4">
                                {[
                                    {
                                        title: 'Scaling Strategies',
                                        desc: 'Scale operations efficiently without compromising quality'
                                    },
                                    {title: 'Profit Optimization', desc: 'Identify profit leaks and improve margins'},
                                    {title: 'Team Building', desc: 'Build high-performing teams and improve culture'},
                                    {
                                        title: 'Digital Transformation',
                                        desc: 'Leverage technology to improve efficiency and reach'
                                    },
                                    {
                                        title: 'Crisis Management',
                                        desc: 'Navigate challenges and turn problems into opportunities'
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} class="flex gap-4">
                                        <div class="flex-shrink-0">
                                            <div
                                                class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                                <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor"
                                                     viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2" d="M5 13l4 4L19 7"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-gray-800 mb-1">{item.title}</h4>
                                            <p class="text-gray-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section class="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">How Our Consultation
                        Works</h2>
                    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Simple process for maximum results</p>
                    <div class="max-w-4xl mx-auto">
                        <div class="space-y-8">
                            {[
                                {
                                    num: '1',
                                    title: 'Book Your Session',
                                    desc: 'Schedule a consultation at your preferred date and time. Fill out a brief questionnaire about your business'
                                },
                                {
                                    num: '2',
                                    title: 'Preparation',
                                    desc: 'Our consultant reviews your business information and prepares customized recommendations'
                                },
                                {
                                    num: '3',
                                    title: '60-Minute Session',
                                    desc: 'One-on-one video call or in-person meeting with our expert consultant. Discuss challenges, goals, and solutions'
                                },
                                {
                                    num: '4',
                                    title: 'Action Plan & Follow-up',
                                    desc: 'Receive a detailed action plan with recommendations. Email support for 7 days post-consultation'
                                }
                            ].map((step) => (
                                <div key={step.num} class="flex gap-6">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">{step.num}</div>
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                                        <p class="text-gray-600 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" class="py-16 sm:py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Consultation Packages</h2>
                    <p class="text-lg sm:text-xl text-gray-600 mb-12">Choose the package that fits your needs</p>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Single Session */}
                        <div class="bg-gray-50 rounded-2xl shadow-lg p-8">
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Single Session</h3>
                            <div class="text-4xl font-bold text-indigo-600 mb-2">₹2,499</div>
                            <p class="text-gray-600 text-sm mb-6">Per session</p>

                            <div class="space-y-3 mb-8 text-left text-sm">
                                {[
                                    '60-minute consultation',
                                    'Expert advisor',
                                    'Action plan document',
                                ].map((feature, idx) => (
                                    <div key={idx} class="flex items-center gap-2">
                                        <svg class="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none"
                                             stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M5 13l4 4L19 7"/>
                                        </svg>
                                        <span class="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                class="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 font-semibold">
                                Book Now
                            </button>
                        </div>

                        {/* 3-Session Package */}
                        <div
                            class="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-2xl p-8 text-white relative transform scale-105">
                            <div
                                class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-xs font-bold">
                                MOST POPULAR
                            </div>
                            <h3 class="text-xl font-bold mb-4">3-Session Package</h3>
                            <div class="text-4xl font-bold mb-2">₹6,999</div>
                            <p class="text-indigo-200 text-sm mb-2">₹2,333 per session</p>
                            <p class="text-green-300 text-xs mb-6">Save ₹498</p>

                            <div class="space-y-3 mb-8 text-left text-sm">
                                {[
                                    '3x 60-minute sessions',
                                    'Dedicated advisor',
                                    'Comprehensive action plans',
                                ].map((feature, idx) => (
                                    <div key={idx} class="flex items-center gap-2">
                                        <svg class="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M5 13l4 4L19 7"/>
                                        </svg>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                class="w-full bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                                Book Package
                            </button>
                        </div>

                        {/* 5-Session Package */}
                        <div class="bg-gray-50 rounded-2xl shadow-lg p-8">
                            <h3 class="text-xl font-bold text-gray-800 mb-4">5-Session Package</h3>
                            <div class="text-4xl font-bold text-indigo-600 mb-2">₹10,999</div>
                            <p class="text-gray-600 text-sm mb-2">₹2,200 per session</p>
                            <p class="text-green-600 text-xs mb-6">Save ₹1,496</p>

                            <div class="space-y-3 mb-8 text-left text-sm">
                                {[
                                    '5x 60-minute sessions',
                                    'Dedicated senior advisor',
                                    'Complete strategy guide',
                                ].map((feature, idx) => (
                                    <div key={idx} class="flex items-center gap-2">
                                        <svg class="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none"
                                             stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M5 13l4 4L19 7"/>
                                        </svg>
                                        <span class="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                class="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 font-semibold">
                                Book Package
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section class="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">What Our Clients Say</h2>
                    <p class="text-center text-gray-600 mb-12">Success stories from businesses we've helped</p>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="bg-white p-8 rounded-xl shadow-lg">
                            <div class="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} class="w-5 h-5 text-yellow-400" fill="currentColor"
                                         viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                ))}
                            </div>
                            <p class="text-gray-600 mb-4 leading-relaxed">"Best investment for my startup! The funding
                                strategy session helped me secure seed funding. The advisor was knowledgeable and
                                practical."</p>
                            <div class="font-bold text-gray-800">Karthik Iyer</div>
                            <div class="text-sm text-gray-500">Tech Startup Founder</div>
                        </div>

                        <div class="bg-white p-8 rounded-xl shadow-lg">
                            <div class="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} class="w-5 h-5 text-yellow-400" fill="currentColor"
                                         viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                ))}
                            </div>
                            <p class="text-gray-600 mb-4 leading-relaxed">"Took the 5-session package and it was worth
                                every rupee. My restaurant's profit margin improved by 25%. Thank you BizAssist!"</p>
                            <div class="font-bold text-gray-800">Ananya Nair</div>
                            <div class="text-sm text-gray-500">Restaurant Owner</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section class="py-16 sm:py-20 bg-gradient-to-br from-indigo-50 to-indigo-100">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">Industries We Serve</h2>
                    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Expert consultation across diverse
                        sectors</p>
                    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[
                            {name: 'Retail'},
                            {name: 'Technology'},
                            {name: 'Food & Beverage'},
                            {name: 'Healthcare'},
                            {name: 'Manufacturing'},
                            {name: 'Education'},
                            {name: 'Real Estate'},
                            {name: 'Logistics'},
                            {name: 'Beauty & Wellness'},
                            {name: 'Creative Services'},
                            {name: 'Services'},
                            {name: 'E-commerce'}
                        ].map((industry, idx) => (
                            <div key={idx}
                                 class="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                                <p class="text-sm font-semibold text-gray-800">{industry.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section class="py-16 sm:py-20 bg-white">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">Frequently Asked
                        Questions</h2>
                    <p class="text-center text-gray-600 mb-12">Everything you need to know about our consultation</p>
                    <div class="space-y-6">
                        {[
                            {
                                q: 'How long is each consultation session?',
                                a: 'Each consultation session is 60 minutes long. This gives us enough time to understand your challenges and provide actionable solutions.'
                            },
                            {
                                q: 'What should I prepare before the consultation?',
                                a: 'We\'ll send you a questionnaire after booking. Prepare any relevant documents (financial statements, business plans, etc.) and specific questions you want to address.'
                            }
                        ].map((faq, idx) => (
                            <div key={idx}
                                 class="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h3 class="font-bold text-gray-800 mb-3 text-lg">{faq.q}</h3>
                                <p class="text-gray-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" class="bg-indigo-600 py-16 sm:py-20">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                    <p class="text-lg sm:text-xl text-indigo-100 mb-8">Book a consultation session and get expert
                        guidance tailored to your needs</p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            class="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-lg">
                            Book Now - ₹2,499
                        </button>
                        <button
                            class="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 font-semibold text-lg">
                            View Packages
                        </button>
                    </div>
                    <p class="text-indigo-100 mt-6">Call us: +91 9061156535</p>
                </div>
            </section>

            <Footer/>
        </div>
    );
});
