import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';

export const head: DocumentHead = {
    title: 'Business Plan Creation ₹9,195 | Investor-Ready Plans - BizAssist',
    meta: [
        {
            name: 'description',
            content: 'Professional business plan creation at ₹9,195. 30-40 page investor-ready plans, 3-5 year financials, market analysis. Secure funding for startups & existing businesses. 7-10 days delivery.',
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

            <section class="bg-gradient-to-br from-purple-600 to-purple-700 text-white py-20">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="max-w-3xl">
                        <div class="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30">
                            Professional Business Planning Service
                        </div>
                        <h1 class="text-5xl font-bold mb-6">Business Plan Creation</h1>
                        <p class="text-xl mb-8 text-purple-50">
                            Get a comprehensive, investor-ready business plan crafted by experts. Perfect for securing funding, attracting partners, and guiding your business strategy
                        </p>
                        <div class="flex gap-4 items-center mb-8">
                            <div class="bg-white text-purple-700 px-6 py-3 rounded-lg font-bold text-2xl">₹9,195</div>
                            <span class="text-purple-100">Complete business plan package</span>
                        </div>
                        <a href="https://webhoga.com/contact" class="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold text-lg inline-block">
                            Get Started
                        </a>
                    </div>
                </div>
            </section>

            <section class="py-20">
                <div class="max-w-7xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Why You Need a Business Plan?</h2>
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-600">
                            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Secure Funding</h3>
                            <p class="text-gray-600">Attract investors and secure loans with a professional, comprehensive business plan that showcases your potential</p>
                        </div>
                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-600">
                            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Strategic Roadmap</h3>
                            <p class="text-gray-600">Get a clear roadmap with goals, strategies, and milestones to guide your business from startup to success</p>
                        </div>
                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-600">
                            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Attract Partners</h3>
                            <p class="text-gray-600">Impress potential partners and stakeholders with a well-structured, professional business document</p>
                        </div>
                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-600">
                            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Risk Management</h3>
                            <p class="text-gray-600">Identify potential risks and develop mitigation strategies before they impact your business</p>
                        </div>
                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-600">
                            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Market Analysis</h3>
                            <p class="text-gray-600">Understand your market, competition, and opportunities with detailed research and analysis</p>
                        </div>
                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-600">
                            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Financial Projections</h3>
                            <p class="text-gray-600">Get realistic financial forecasts including revenue, expenses, and profitability projections</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white py-20">
                <div class="max-w-7xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">What's Included in Your Business Plan</h2>
                    <div class="grid md:grid-cols-2 gap-12">
                        <div class="space-y-6">
                            {[
                                { num: '1', title: 'Executive Summary', desc: 'A compelling overview of your business, mission, vision, and unique value proposition' },
                                { num: '2', title: 'Company Description', desc: 'Detailed information about your business structure, ownership, and objectives' },
                                { num: '3', title: 'Market Analysis', desc: 'Industry trends, target market analysis, and customer segmentation' },
                                { num: '4', title: 'Competitive Analysis', desc: 'Analysis of competitors, your competitive advantages, and market positioning' },
                                { num: '5', title: 'Products & Services', desc: 'Detailed description of your offerings, pricing strategy, and lifecycle' },
                                { num: '6', title: 'Marketing Strategy', desc: 'Marketing channels, promotional strategies, and customer acquisition plan' },
                            ].map((item) => (
                                <div key={item.num} class="flex gap-4">
                                    <div class="flex-shrink-0">
                                        <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <span class="text-purple-600 font-bold text-lg">{item.num}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                        <p class="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div class="space-y-6">
                            {[
                                { num: '7', title: 'Operations Plan', desc: 'Day-to-day operations, supply chain, facilities, and technology requirements' },
                                { num: '8', title: 'Management Team', desc: 'Key team members, organizational structure, and advisor information' },
                                { num: '9', title: 'Financial Projections', desc: '3-5 year revenue forecast, profit & loss, cash flow, and balance sheet' },
                                { num: '10', title: 'Funding Requirements', desc: 'Capital requirements, use of funds, and expected ROI for investors' },
                                { num: '11', title: 'Risk Analysis', desc: 'Potential risks, challenges, and mitigation strategies' },
                                { num: '12', title: 'Appendix', desc: 'Supporting documents, charts, graphs, and additional data' },
                            ].map((item) => (
                                <div key={item.num} class="flex gap-4">
                                    <div class="flex-shrink-0">
                                        <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <span class="text-purple-600 font-bold text-lg">{item.num}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                        <p class="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
                <div class="max-w-7xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Industries We Serve</h2>
                    <div class="grid md:grid-cols-4 gap-6">
                        {[
                            { title: 'E-commerce & Retail' },
                            { title: 'Technology & SaaS' },
                            { title: 'Food & Beverage' },
                            { title: 'Healthcare' },
                            { title: 'Education' },
                            { title: 'Manufacturing' },
                            { title: 'Real Estate' },
                            { title: 'Professional Services' },
                        ].map((industry) => (
                            <div key={industry.title} class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                                <h3 class="font-bold text-gray-800">{industry.title}</h3>
                            </div>
                        ))}
                    </div>
                    <p class="text-center text-gray-600 mt-8">And many more industries...</p>
                </div>
            </section>

            <section class="bg-white py-20">
                <div class="max-w-7xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Our Creation Process</h2>
                    <div class="max-w-4xl mx-auto">
                        <div class="space-y-8">
                            {[
                                { num: 1, title: 'Initial Consultation', desc: 'We schedule a detailed call to understand your business, goals, and target audience. We\'ll discuss your vision and what you need the business plan for.' },
                                { num: 2, title: 'Information Gathering', desc: 'You provide us with necessary information through our structured questionnaire. We collect details about your business model, market, competition, and financials.' },
                                { num: 3, title: 'Research & Analysis', desc: 'Our team conducts thorough market research, competitive analysis, and industry trend analysis to support your business plan with solid data.' },
                                { num: 4, title: 'Draft Creation', desc: 'We create a comprehensive first draft including all sections, financial projections, charts, and supporting documents.' },
                                { num: 5, title: 'Review & Revision', desc: 'You review the draft and provide feedback. We make necessary revisions to ensure the plan meets your expectations and requirements.' },
                                { num: 6, title: 'Final Delivery', desc: 'Receive your polished, professional business plan in PDF and editable formats, ready to present to investors, banks, or partners.' },
                            ].map((step) => (
                                <div key={step.num} class="flex gap-6">
                                    <div class="flex-shrink-0">
                                        <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">{step.num}</div>
                                    </div>
                                    <div>
                                        <h3 class="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
                                        <p class="text-gray-600">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div class="max-w-7xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Information We'll Need From You</h2>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            { title: 'Business Overview', desc: 'Business name, structure, location, and stage' },
                            { title: 'Products/Services', desc: 'What you offer and your pricing strategy' },
                            { title: 'Target Market', desc: 'Your ideal customers and market size' },
                            { title: 'Competition', desc: 'Main competitors and your advantages' },
                            { title: 'Financial Data', desc: 'Current financials or projections if available' },
                            { title: 'Marketing Strategy', desc: 'How you plan to reach customers' },
                            { title: 'Funding Needs', desc: 'Amount needed and how it will be used' },
                            { title: 'Team Information', desc: 'Key team members and their roles' },
                            { title: 'Operations', desc: 'How your business will operate daily' },
                            { title: 'Goals & Milestones', desc: 'Short and long-term objectives' },
                        ].map((info) => (
                            <div key={info.title} class="bg-white p-6 rounded-xl shadow-md">
                                <div class="text-purple-600 font-bold mb-2">{info.title}</div>
                                <p class="text-gray-600 text-sm">{info.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section class="py-20 bg-white">
                <div class="max-w-4xl mx-auto px-4 text-center">
                    <h2 class="text-4xl font-bold text-gray-800 mb-6">Comprehensive Business Plan Package</h2>
                    <p class="text-xl text-gray-600 mb-12">Everything you need to secure funding and guide your business</p>
                    <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-2xl p-12 max-w-md mx-auto">
                        <div class="mb-8">
                            <div class="text-5xl font-bold text-purple-600 mb-2">₹9,195</div>
                            <p class="text-gray-600">Complete business plan</p>
                        </div>
                        <div class="space-y-4 mb-8 text-left">
                            {[
                                '30-40 page comprehensive plan',
                                '3-5 year financial projections',
                                'Market & competitive analysis',
                                'Professional formatting & design',
                                'PDF & editable formats',
                                '2 rounds of revisions',
                                'Investor-ready presentation',
                            ].map((feature) => (
                                <div key={feature} class="flex items-start gap-3">
                                    <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span class="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                        <a href="https://webhoga.com/contact" class="w-full bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition font-bold text-lg mb-4 inline-block">
                            Get Started
                        </a>
                        <p class="text-sm text-gray-600">Delivery time: 7-10 business days</p>
                    </div>
                </div>
            </section>

            <section class="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div class="max-w-4xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
                    <div class="space-y-6">
                        {[
                            { q: 'How long does it take to create a business plan?', a: 'Typically, we deliver your complete business plan within 7-10 business days from the date we receive all necessary information. For urgent requests, we can expedite the process for an additional fee.' },
                            { q: 'What if I need revisions?', a: 'We include 2 rounds of revisions in our package. We want to ensure you\'re completely satisfied with your business plan. Additional revisions can be accommodated if needed.' },
                            { q: 'Can you help with financial projections if I don\'t have data?', a: 'Yes! Our team can help create realistic financial projections based on industry benchmarks, market research, and your business model. We\'ll work with you to develop accurate forecasts.' },
                            { q: 'Will this plan work for bank loans and investors?', a: 'Absolutely! Our business plans are specifically designed to meet the requirements of banks, investors, and financial institutions. They include all necessary sections and financial documentation.' },
                            { q: 'What formats will I receive?', a: 'You\'ll receive your business plan in both PDF format (for presenting) and an editable format (Word/Google Docs) so you can make future updates as your business evolves.' },
                            { q: 'Do you sign NDAs?', a: 'Yes, we understand the confidential nature of your business information. We\'re happy to sign a Non-Disclosure Agreement (NDA) before beginning work on your project.' },
                            { q: 'Can you help with existing businesses too?', a: 'Yes! We create business plans for both startups and existing businesses looking to expand, seek funding, or pivot their business model. We tailor each plan to your specific situation.' },
                            { q: 'What if I\'m not satisfied with the final plan?', a: 'Your satisfaction is our priority. We work closely with you throughout the process and include revisions to ensure the final plan meets your expectations. We\'re committed to delivering a plan you\'re proud to present.' },
                        ].map((faq) => (
                            <div key={faq.q} class="bg-white p-6 rounded-xl shadow-md">
                                <h3 class="text-xl font-bold text-gray-800 mb-3">{faq.q}</h3>
                                <p class="text-gray-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">What Our Clients Say</h2>
                    <div class="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Rajesh Kumar', role: 'Tech Startup Founder', text: 'The business plan they created was instrumental in securing ₹50 lakhs funding from investors. Professional, detailed, and exactly what we needed!' },
                            { name: 'Priya Sharma', role: 'Restaurant Owner', text: 'Great value for money! The team was responsive, professional, and delivered ahead of schedule. My bank approved the loan within 2 weeks.' },
                            { name: 'Amit Patel', role: 'E-commerce Entrepreneur', text: 'Extremely thorough market analysis and financial projections. The plan gave us clarity on our business direction and helped us secure our first major client.' },
                        ].map((testimonial) => (
                            <div key={testimonial.name} class="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg">
                                <div class="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <svg key={i} class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    ))}
                                </div>
                                <p class="text-gray-700 mb-4">{testimonial.text}</p>
                                <div class="font-bold text-gray-800">{testimonial.name}</div>
                                <div class="text-sm text-gray-600">{testimonial.role}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section class="bg-purple-600 py-20">
                <div class="max-w-4xl mx-auto px-4 text-center">
                    <h2 class="text-4xl font-bold text-white mb-6">Ready to Create Your Business Plan?</h2>
                    <p class="text-xl text-purple-100 mb-8">Get a professional, investor-ready business plan that sets you up for success</p>
                    <div class="flex gap-4 justify-center flex-wrap">
                        <a href="https://webhoga.com/contact" class="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-bold text-lg inline-block">
                            Get Started - ₹9,195
                        </a>
                        <a href="https://webhoga.com/contact" class="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition font-semibold text-lg inline-block">
                            Schedule Consultation
                        </a>
                    </div>
                    <p class="text-purple-100 mt-6">Call us: +91 9061156535 | Email: contact@webhoga.com</p>
                </div>
            </section>

            <Footer />
        </div>
    );
});
