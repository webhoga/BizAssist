import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';

export const head: DocumentHead = {
    title: 'Business Plan Creation ₹9,999 | Investor-Ready Plans - BizAssist',
    meta: [
        {
            name: 'description',
            content: 'Professional business plan creation at ₹9,999. 30-40 page investor-ready plans, 3-5 year financials, market analysis. Secure funding for startups & existing businesses. 7-10 days delivery.',
        },
        {
            name: 'keywords',
            content: 'business plan creation, business plan writing service, investor ready business plan, startup business plan, business plan for loan, professional business plan India, financial projections, market analysis',
        },
    ],
};

export default component$(() => {
    return (
        <div class="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section class="bg-gradient-to-br from-purple-600 to-purple-700 text-white py-20">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="max-w-3xl">
                        <div
                            class="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30">
                            Professional Business Planning Service
                        </div>
                        <h1 class="text-5xl font-bold mb-6">Business Plan Creation</h1>
                        <p class="text-xl mb-8 text-purple-50">Get a comprehensive, investor-ready business plan crafted
                            by experts. Perfect for securing funding, attracting partners, and guiding your business
                            strategy</p>
                        <div class="flex gap-4 items-center mb-8">
                            <div class="bg-white text-purple-700 px-6 py-3 rounded-lg font-bold text-2xl">
                                ₹9,999
                            </div>
                            <span class="text-purple-100">Complete business plan package</span>
                        </div>
                        <button
                            class="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold text-lg">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section class="py-20">
                <div class="max-w-7xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Why You Need a Business Plan?</h2>

                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-600">
                            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Secure Funding</h3>
                            <p class="text-gray-600">Attract investors and secure loans with a professional, comprehensive business plan that showcases your potential</p>
                        </div>

                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-600">
                            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Strategic Roadmap</h3>
                            <p class="text-gray-600">Get a clear roadmap with goals, strategies, and milestones to guide your business from startup to success</p>
                        </div>

                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-600">
                            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Attract Partners</h3>
                            <p class="text-gray-600">Impress potential partners and stakeholders with a well-structured, professional business document</p>
                        </div>

                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-600">
                            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Risk Management</h3>
                            <p class="text-gray-600">Identify potential risks and develop mitigation strategies before they impact your business</p>
                        </div>

                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-600">
                            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Market Analysis</h3>
                            <p class="text-gray-600">Understand your market, competition, and opportunities with detailed research and analysis</p>
                        </div>

                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-600">
                            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Financial Projections</h3>
                            <p class="text-gray-600">Get realistic financial forecasts including revenue, expenses, and profitability projections</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section class="bg-white py-20">
                <div class="max-w-7xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">What's Included in Your Business Plan</h2>

                    <div class="grid md:grid-cols-2 gap-12">
                        <div class="space-y-6">
                            <div class="flex gap-4">
                                <div class="flex-shrink-0">
                                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <span class="text-purple-600 font-bold text-lg">1</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Executive Summary</h3>
                                    <p class="text-gray-600">A compelling overview of your business, mission, vision, and unique value proposition</p>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <div class="flex-shrink-0">
                                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <span class="text-purple-600 font-bold text-lg">2</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Company Description</h3>
                                    <p class="text-gray-600">Detailed information about your business structure, ownership, and objectives</p>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <div class="flex-shrink-0">
                                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <span class="text-purple-600 font-bold text-lg">3</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Market Analysis</h3>
                                    <p class="text-gray-600">Industry trends, target market analysis, and customer segmentation</p>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <div class="flex-shrink-0">
                                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <span class="text-purple-600 font-bold text-lg">4</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Competitive Analysis</h3>
                                    <p class="text-gray-600">Analysis of competitors, your competitive advantages, and market positioning</p>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <div class="flex-shrink-0">
                                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <span class="text-purple-600 font-bold text-lg">5</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Products & Services</h3>
                                    <p class="text-gray-600">Detailed description of your offerings, pricing strategy, and lifecycle</p>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <div class="flex-shrink-0">
                                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <span class="text-purple-600 font-bold text-lg">6</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Marketing Strategy</h3>
                                    <p class="text-gray-600">Marketing channels, promotional strategies, and customer acquisition plan</p>
                                </div>
                            </div>
                        </div>

                        <div class="space-y-6">
                            <div class="flex gap-4">
                                <div class="flex-shrink-0">
                                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <span class="text-purple-600 font-bold text-lg">7</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Operations Plan</h3>
                                    <p class="text-gray-600">Day-to-day operations, supply chain, facilities, and technology requirements</p>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <div class="flex-shrink-0">
                                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <span class="text-purple-600 font-bold text-lg">8</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Management Team</h3>
                                    <p class="text-gray-600">Key team members, organizational structure, and advisor information</p>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <div class="flex-shrink-0">
                                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <span class="text-purple-600 font-bold text-lg">9</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Financial Projections</h3>
                                    <p class="text-gray-600">3-5 year revenue forecast, profit & loss, cash flow, and balance sheet</p>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <div class="flex-shrink-0">
                                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <span class="text-purple-600 font-bold text-lg">10</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Funding Requirements</h3>
                                    <p class="text-gray-600">Capital requirements, use of funds, and expected ROI for investors</p>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <div class="flex-shrink-0">
                                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <span class="text-purple-600 font-bold text-lg">11</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Risk Analysis</h3>
                                    <p class="text-gray-600">Potential risks, challenges, and mitigation strategies</p>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <div class="flex-shrink-0">
                                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <span class="text-purple-600 font-bold text-lg">12</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Appendix</h3>
                                    <p class="text-gray-600">Supporting documents, charts, graphs, and additional data</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section class="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
                <div class="max-w-7xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Industries We Serve</h2>
                    <div class="grid md:grid-cols-4 gap-6">
                        <div class="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h3 class="font-bold text-gray-800">E-commerce</h3>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                            <h3 class="font-bold text-gray-800">Technology</h3>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 class="font-bold text-gray-800">Real Estate</h3>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 class="font-bold text-gray-800">Retail</h3>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 class="font-bold text-gray-800">Healthcare</h3>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 class="font-bold text-gray-800">Education</h3>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                            </div>
                            <h3 class="font-bold text-gray-800">Manufacturing</h3>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                                </svg>
                            </div>
                            <h3 class="font-bold text-gray-800">SaaS</h3>
                        </div>
                    </div>
                    <p class="text-center text-gray-600 mt-8">And many more industries...</p>
                </div>
            </section>

            {/* Process */}
            <section class="bg-white py-20">
                <div class="max-w-7xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Our Creation Process</h2>
                    <div class="max-w-4xl mx-auto">
                        <div class="space-y-8">
                            <div class="flex gap-6">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Initial Consultation</h3>
                                    <p class="text-gray-600">We discuss your business idea, goals, target market, and funding requirements in detail</p>
                                </div>
                            </div>

                            <div class="flex gap-6">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Market Research</h3>
                                    <p class="text-gray-600">Our experts conduct thorough market and competitive analysis specific to your industry</p>
                                </div>
                            </div>

                            <div class="flex gap-6">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Financial Modeling</h3>
                                    <p class="text-gray-600">We create realistic financial projections based on industry benchmarks and your business model</p>
                                </div>
                            </div>

                            <div class="flex gap-6">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Draft Creation</h3>
                                    <p class="text-gray-600">We prepare a comprehensive draft covering all sections of your business plan</p>
                                </div>
                            </div>

                            <div class="flex gap-6">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Review & Refinement</h3>
                                    <p class="text-gray-600">You review the draft and we incorporate your feedback and suggestions</p>
                                </div>
                            </div>

                            <div class="flex gap-6">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">6</div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Final Delivery</h3>
                                    <p class="text-gray-600">Receive your polished, professionally formatted business plan in PDF and editable format</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Information We Need */}
            <section class="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div class="max-w-7xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Information We'll Need From You</h2>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="font-bold text-gray-800 mb-3">Business Concept</h3>
                            <p class="text-gray-600 text-sm">Your business idea, products/services, and unique value proposition</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="font-bold text-gray-800 mb-3">Target Market</h3>
                            <p class="text-gray-600 text-sm">Who are your customers? Demographics, location, and buying behavior</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="font-bold text-gray-800 mb-3">Business Model</h3>
                            <p class="text-gray-600 text-sm">How will you make money? Pricing, revenue streams, and sales channels</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="font-bold text-gray-800 mb-3">Team Information</h3>
                            <p class="text-gray-600 text-sm">Key team members, their roles, and relevant experience</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="font-bold text-gray-800 mb-3">Financial Data</h3>
                            <p class="text-gray-600 text-sm">Current financials (if existing business), cost structure, and pricing</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="font-bold text-gray-800 mb-3">Funding Goals</h3>
                            <p class="text-gray-600 text-sm">How much funding do you need and what will it be used for?</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section class="py-20 bg-white">
                <div class="max-w-4xl mx-auto px-4 text-center">
                    <h2 class="text-4xl font-bold text-gray-800 mb-6">Comprehensive Business Plan Package</h2>
                    <p class="text-xl text-gray-600 mb-12">Everything you need to secure funding and guide your business</p>

                    <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-2xl p-12 max-w-md mx-auto">
                        <div class="mb-8">
                            <div class="text-5xl font-bold text-purple-600 mb-2">₹9,999</div>
                            <p class="text-gray-600">Complete business plan</p>
                        </div>

                        <div class="space-y-4 mb-8 text-left">
                            <div class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">30-40 page comprehensive document</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">Market & competitive analysis</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">3-5 year financial projections</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">Professional formatting & design</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">Charts, graphs, and visuals</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">2 rounds of revisions included</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">PDF & editable Word format</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">Expert consultation calls</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">Investor pitch deck (optional add-on)</span>
                            </div>
                        </div>

                        <button class="w-full bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition font-bold text-lg mb-4">
                            Get Started
                        </button>

                        <p class="text-sm text-gray-600">Delivery time: 7-10 business days</p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section class="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div class="max-w-4xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
                    <div class="space-y-6">
                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="font-bold text-gray-800 mb-3">How long does it take to create a business plan?</h3>
                            <p class="text-gray-600">Typically, we deliver your comprehensive business plan within 7-10 business days after receiving all required information. Rush delivery options are available.</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="font-bold text-gray-800 mb-3">Will my business plan be investor-ready?</h3>
                            <p class="text-gray-600">Absolutely! Our business plans are professionally formatted and written to meet the expectations of investors, banks, and financial institutions.</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="font-bold text-gray-800 mb-3">Can I request revisions?</h3>
                            <p class="text-gray-600">Yes, we include 2 rounds of revisions in the package. We work with you until you're completely satisfied with your business plan.</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="font-bold text-gray-800 mb-3">Do you sign NDAs for confidential information?</h3>
                            <p class="text-gray-600">Yes, we're happy to sign a Non-Disclosure Agreement (NDA) to protect your confidential business information and ideas.</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="font-bold text-gray-800 mb-3">What if I don't have all the financial data?</h3>
                            <p class="text-gray-600">No problem! Our experts can help you develop realistic financial projections based on industry standards and your business model.</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="font-bold text-gray-800 mb-3">Can you help with pitch deck creation too?</h3>
                            <p class="text-gray-600">Yes! We offer investor pitch deck creation as an add-on service. The pitch deck complements your business plan for presentations.</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="font-bold text-gray-800 mb-3">Is this suitable for existing businesses or just startups?</h3>
                            <p class="text-gray-600">We create business plans for both startups and existing businesses looking to expand, pivot, or secure additional funding.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">What Our Clients Say</h2>
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="bg-purple-50 p-8 rounded-xl">
                            <div class="flex gap-1 mb-4">
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <p class="text-gray-600 mb-4">"BizAssist created an excellent business plan that helped us secure ₹50 lakhs in funding. The financial projections were spot-on and the presentation was professional."</p>
                            <div class="font-bold text-gray-800">Rajesh Kumar</div>
                            <div class="text-sm text-gray-500">Tech Startup Founder</div>
                        </div>

                        <div class="bg-purple-50 p-8 rounded-xl">
                            <div class="flex gap-1 mb-4">
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <p class="text-gray-600 mb-4">"Very detailed market analysis and competitive research. The team understood our restaurant concept perfectly and created a plan that impressed our investors."</p>
                            <div class="font-bold text-gray-800">Priya Sharma</div>
                            <div class="text-sm text-gray-500">Restaurant Owner</div>
                        </div>

                        <div class="bg-purple-50 p-8 rounded-xl">
                            <div class="flex gap-1 mb-4">
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <p class="text-gray-600 mb-4">"Great value for money! The business plan helped me get a bank loan approved. Their team was very responsive and professional throughout."</p>
                            <div class="font-bold text-gray-800">Amit Patel</div>
                            <div class="text-sm text-gray-500">Manufacturing Business</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section class="bg-purple-600 py-20">
                <div class="max-w-4xl mx-auto px-4 text-center">
                    <h2 class="text-4xl font-bold text-white mb-6">Ready to Create Your Business Plan?</h2>
                    <p class="text-xl text-purple-100 mb-8">Get a professional, investor-ready business plan that sets you up for success</p>
                    <div class="flex gap-4 justify-center flex-wrap">
                        <button class="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-bold text-lg">
                            Get Started - ₹9,999
                        </button>
                        <button class="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition font-semibold text-lg">
                            Schedule Consultation
                        </button>
                    </div>
                    <p class="text-purple-100 mt-6">Call us: +91 9061156535 | Email: contact@webhoga.com</p>
                </div>
            </section>

            <Footer />
        </div>
    );
});
