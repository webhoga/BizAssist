import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';

export const head: DocumentHead = {
    title: 'Business Plan Creation ₹9,195 | Investor-Ready Plans - BizAssist',
    meta: [
        {
            name: 'description',
            content:
                'Professional business plan creation at ₹9,195. 30-40 page investor-ready plans, 3-5 year financials, market analysis. Secure funding for startups & existing businesses. 7-10 days delivery.',
        },
        {
            name: 'keywords',
            content:
                'business plan creation, business plan writing service, investor ready business plan, startup business plan, business plan for loan, professional business plan India, financial projections, market analysis',
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
                        <div class="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30">
                            Professional Business Planning Service
                        </div>
                        <h1 class="text-5xl font-bold mb-6">Business Plan Creation</h1>
                        <p class="text-xl mb-8 text-purple-50">
                            Get a comprehensive, investor-ready business plan crafted by experts. Perfect for securing
                            funding, attracting partners, and guiding your business strategy
                        </p>
                        <div class="flex gap-4 items-center mb-8">
                            <div class="bg-white text-purple-700 px-6 py-3 rounded-lg font-bold text-2xl">
                                ₹9,195
                            </div>
                            <span class="text-purple-100">Complete business plan package</span>
                        </div>
                        <a
                            href="https://webhoga.com/contact"
                            class="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold text-lg inline-block"
                        >
                            Get Started
                        </a>
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
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Secure Funding</h3>
                            <p class="text-gray-600">
                                Attract investors and secure loans with a professional, comprehensive business plan that
                                showcases your potential
                            </p>
                        </div>

                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-600">
                            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Strategic Roadmap</h3>
                            <p class="text-gray-600">
                                Get a clear roadmap with goals, strategies, and milestones to guide your business from
                                startup to success
                            </p>
                        </div>

                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-600">
                            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Attract Partners</h3>
                            <p class="text-gray-600">
                                Impress potential partners and stakeholders with a well-structured, professional business
                                document
                            </p>
                        </div>

                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-600">
                            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                    />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Risk Management</h3>
                            <p class="text-gray-600">
                                Identify potential risks and develop mitigation strategies before they impact your business
                            </p>
                        </div>

                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-600">
                            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                    />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Market Analysis</h3>
                            <p class="text-gray-600">
                                Understand your market, competition, and opportunities with detailed research and analysis
                            </p>
                        </div>

                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-600">
                            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Financial Projections</h3>
                            <p class="text-gray-600">
                                Get realistic financial forecasts including revenue, expenses, and profitability projections
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section class="bg-white py-20">
                <div class="max-w-7xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">
                        What's Included in Your Business Plan
                    </h2>

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
                                    <p class="text-gray-600">
                                        A compelling overview of your business, mission, vision, and unique value
                                        proposition
                                    </p>
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
                                    <p class="text-gray-600">
                                        Detailed information about your business structure, ownership, and objectives
                                    </p>
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
                                    <p class="text-gray-600">
                                        Industry trends, target market analysis, and customer segmentation
                                    </p>
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
                                    <p class="text-gray-600">
                                        Analysis of competitors, your competitive advantages, and market positioning
                                    </p>
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
                                    <p class="text-gray-600">
                                        Detailed description of your offerings, pricing strategy, and lifecycle
                                    </p>
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
                                    <p class="text-gray-600">
                                        Marketing channels, promotional strategies, and customer acquisition plan
                                    </p>
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
                                    <p class="text-gray-600">
                                        Day-to-day operations, supply chain, facilities, and technology requirements
                                    </p>
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
                                    <p class="text-gray-600">
                                        Key team members, organizational structure, and advisor information
                                    </p>
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
                                    <p class="text-gray-600">
                                        3-5 year revenue forecast, profit & loss, cash flow, and balance sheet
                                    </p>
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
                                    <p class="text-gray-600">
                                        Capital requirements, use of funds, and expected ROI for investors
                                    </p>
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
                                    <p class="text-gray-600">
                                        Potential risks, challenges, and mitigation strategies
                                    </p>
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
                                    <p class="text-gray-600">
                                        Supporting documents, charts, graphs, and additional data
                                    </p>
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
                        {/* ...unchanged industry cards... */}
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
                            {/* ...steps 1–6 unchanged... */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Information We Need */}
            <section class="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div class="max-w-7xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">
                        Information We'll Need From You
                    </h2>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {/* ...info cards unchanged... */}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section class="py-20 bg-white">
                <div class="max-w-4xl mx-auto px-4 text-center">
                    <h2 class="text-4xl font-bold text-gray-800 mb-6">Comprehensive Business Plan Package</h2>
                    <p class="text-xl text-gray-600 mb-12">
                        Everything you need to secure funding and guide your business
                    </p>

                    <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-2xl p-12 max-w-md mx-auto">
                        <div class="mb-8">
                            <div class="text-5xl font-bold text-purple-600 mb-2">₹9,195</div>
                            <p class="text-gray-600">Complete business plan</p>
                        </div>

                        <div class="space-y-4 mb-8 text-left">
                            {/* ...feature list unchanged... */}
                        </div>

                        <a
                            href="https://webhoga.com/contact"
                            class="w-full bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition font-bold text-lg mb-4 inline-block"
                        >
                            Get Started
                        </a>

                        <p class="text-sm text-gray-600">Delivery time: 7-10 business days</p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section class="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div class="max-w-4xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
                    <div class="space-y-6">
                        {/* ...FAQ cards unchanged... */}
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">What Our Clients Say</h2>
                    <div class="grid md:grid-cols-3 gap-8">
                        {/* ...testimonials unchanged... */}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section class="bg-purple-600 py-20">
                <div class="max-w-4xl mx-auto px-4 text-center">
                    <h2 class="text-4xl font-bold text-white mb-6">Ready to Create Your Business Plan?</h2>
                    <p class="text-xl text-purple-100 mb-8">
                        Get a professional, investor-ready business plan that sets you up for success
                    </p>
                    <div class="flex gap-4 justify-center flex-wrap">
                        <a
                            href="https://webhoga.com/contact"
                            class="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-bold text-lg inline-block"
                        >
                            Get Started - ₹9,195
                        </a>
                        <a
                            href="https://webhoga.com/contact"
                            class="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition font-semibold text-lg inline-block"
                        >
                            Schedule Consultation
                        </a>
                    </div>
                    <p class="text-purple-100 mt-6">
                        Call us: +91 9061156535 | Email: contact@webhoga.com
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
});
