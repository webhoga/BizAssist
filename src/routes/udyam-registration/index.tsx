import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';

export const head: DocumentHead = {
    title: 'UDYAM Registration Online ₹1,479 | MSME Registration India - BizAssist',
    meta: [
        {
            name: 'description',
            content: 'Get UDYAM Registration (MSME) online at ₹1,479. Same-day processing, government subsidies, easy loan access & tax benefits. Expert assistance for Micro, Small & Medium Enterprises in India.',
        },
        {
            name: 'keywords',
            content: 'UDYAM registration, MSME registration, UDYAM registration online, MSME certificate, micro enterprise registration, small business registration India, UDYAM registration cost, MSME benefits, UDYOG Aadhaar',
        },
    ],
};

export default component$(() => {
    return (
        <div class="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section class="bg-gradient-to-br from-green-600 to-green-700 text-white py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-3xl">
                        <div
                            class="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30">
                            MSME Registration Service
                        </div>
                        <h1 class="text-4xl sm:text-5xl font-bold mb-6 leading-tight">UDYAM Registration</h1>
                        <p class="text-lg sm:text-xl mb-8 text-green-50 leading-relaxed">Get your MSME registered and
                            unlock government benefits, subsidies, and schemes designed for small businesses</p>
                        <div class="flex flex-wrap gap-4 items-center mb-8">
                            <div class="bg-white text-green-700 px-6 py-3 rounded-lg font-bold text-2xl shadow-lg">
                                ₹1,479
                            </div>
                            <span class="text-green-100 text-base">All-inclusive pricing</span>
                        </div>
                        <button
                            class="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg">
                            Register Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section class="py-16 sm:py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">Why Get UDYAM Registration?</h2>
                    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Unlock exclusive benefits and government schemes for your MSME</p>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div class="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-600">
                            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">Government Subsidies</h3>
                            <p class="text-gray-600 leading-relaxed">Access various government schemes and subsidies designed exclusively for MSMEs</p>
                        </div>

                        <div class="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-600">
                            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">Easy Loan Access</h3>
                            <p class="text-gray-600 leading-relaxed">Get priority in loan approvals with lower interest rates from banks and financial institutions</p>
                        </div>

                        <div class="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-600">
                            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">Tax Benefits</h3>
                            <p class="text-gray-600 leading-relaxed">Enjoy tax exemptions and rebates under various government schemes for MSMEs</p>
                        </div>

                        <div class="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600">
                            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">Electricity Bill Savings</h3>
                            <p class="text-gray-600 leading-relaxed">Get concession on electricity bills as per state government policies</p>
                        </div>

                        <div class="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600">
                            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">Legal Protection</h3>
                            <p class="text-gray-600 leading-relaxed">Protection against delayed payments from buyers under MSMED Act</p>
                        </div>

                        <div class="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600">
                            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">Business Credibility</h3>
                            <p class="text-gray-600 leading-relaxed">Enhance your business credibility and trust among clients and partners</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is UDYAM */}
            <section class="bg-white py-16 sm:py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">What is UDYAM Registration?</h2>
                            <p class="text-gray-600 mb-6 leading-relaxed">UDYAM Registration is a government registration process for Micro, Small, and Medium Enterprises (MSMEs) in India. It replaced the earlier Udyog Aadhaar Memorandum (UAM) system in July 2020.</p>
                            <p class="text-gray-600 mb-6 leading-relaxed">This registration is completely online, paperless, and based on self-declaration. Once registered, businesses receive a unique UDYAM Registration Number and certificate that provides access to numerous government benefits.</p>
                            <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                                <p class="text-green-800 font-semibold mb-2">Important Note:</p>
                                <p class="text-gray-700 text-sm">UDYAM Registration is mandatory for all MSMEs to avail government schemes and benefits.</p>
                            </div>
                        </div>
                        <div class="bg-gradient-to-br from-green-50 to-green-100 p-6 sm:p-8 rounded-2xl shadow-lg">
                            <h3 class="text-2xl font-bold text-gray-800 mb-6">Classification Criteria</h3>
                            <div class="space-y-4">
                                <div class="bg-white p-4 rounded-lg shadow-md">
                                    <h4 class="font-bold text-gray-800 mb-2">Micro Enterprise</h4>
                                    <p class="text-sm text-gray-600">Investment: Up to ₹1 crore</p>
                                    <p class="text-sm text-gray-600">Turnover: Up to ₹5 crore</p>
                                </div>
                                <div class="bg-white p-4 rounded-lg shadow-md">
                                    <h4 class="font-bold text-gray-800 mb-2">Small Enterprise</h4>
                                    <p class="text-sm text-gray-600">Investment: Up to ₹10 crore</p>
                                    <p class="text-sm text-gray-600">Turnover: Up to ₹50 crore</p>
                                </div>
                                <div class="bg-white p-4 rounded-lg shadow-md">
                                    <h4 class="font-bold text-gray-800 mb-2">Medium Enterprise</h4>
                                    <p class="text-sm text-gray-600">Investment: Up to ₹50 crore</p>
                                    <p class="text-sm text-gray-600">Turnover: Up to ₹250 crore</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Documents Required */}
            <section class="py-16 sm:py-20 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">Documents Required</h2>
                    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Simple documentation process for quick registration</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-green-600 font-bold text-lg">1</span>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-800 mb-2 text-lg">Aadhaar Card</h3>
                                    <p class="text-gray-600 text-sm leading-relaxed">Aadhaar number of the business owner/proprietor</p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-green-600 font-bold text-lg">2</span>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-800 mb-2 text-lg">PAN Card</h3>
                                    <p class="text-gray-600 text-sm leading-relaxed">PAN card of the business entity</p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-green-600 font-bold text-lg">3</span>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-800 mb-2 text-lg">Business Details</h3>
                                    <p class="text-gray-600 text-sm leading-relaxed">Business name, address, and bank account details</p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-green-600 font-bold text-lg">4</span>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-800 mb-2 text-lg">Investment & Turnover</h3>
                                    <p class="text-gray-600 text-sm leading-relaxed">Details of investment in plant & machinery and annual turnover</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section class="bg-white py-16 sm:py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">Our Registration Process</h2>
                    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Simple 4-step process to get your UDYAM registration</p>
                    <div class="max-w-4xl mx-auto">
                        <div class="space-y-8">
                            <div class="flex gap-6">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">1</div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Document Collection</h3>
                                    <p class="text-gray-600 leading-relaxed">We collect all necessary documents and information from you through a simple online form</p>
                                </div>
                            </div>

                            <div class="flex gap-6">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">2</div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Document Verification</h3>
                                    <p class="text-gray-600 leading-relaxed">Our experts verify all documents and prepare the application with accurate details</p>
                                </div>
                            </div>

                            <div class="flex gap-6">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">3</div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Online Application</h3>
                                    <p class="text-gray-600 leading-relaxed">We submit your application on the official UDYAM registration portal</p>
                                </div>
                            </div>

                            <div class="flex gap-6">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">4</div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Certificate Delivery</h3>
                                    <p class="text-gray-600 leading-relaxed">You receive your UDYAM Registration Certificate with unique registration number instantly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section class="py-16 sm:py-20 bg-gradient-to-br from-green-50 to-green-100">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
                    <p class="text-lg sm:text-xl text-gray-600 mb-12">All-inclusive package with no hidden costs</p>

                    <div class="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 max-w-md mx-auto">
                        <div class="mb-8">
                            <div class="text-4xl sm:text-5xl font-bold text-green-600 mb-2">₹1,479</div>
                            <p class="text-gray-600">One-time payment</p>
                        </div>

                        <div class="space-y-4 mb-8 text-left">
                            <div class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">Complete UDYAM Registration</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">Document verification & preparation</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">Online application submission</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">Instant certificate delivery</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">Expert consultation included</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">Post-registration support</span>
                            </div>
                        </div>

                        <button class="w-full bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-bold text-lg shadow-lg">
                            Register Now
                        </button>

                        <p class="text-sm text-gray-500 mt-4">Processing time: Same day</p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section class="py-16 sm:py-20 bg-white">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">Frequently Asked Questions</h2>
                    <p class="text-center text-gray-600 mb-12">Everything you need to know about UDYAM Registration</p>
                    <div class="space-y-6">
                        <div class="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 class="font-bold text-gray-800 mb-3 text-lg">Who needs UDYAM Registration?</h3>
                            <p class="text-gray-600 leading-relaxed">All Micro, Small, and Medium Enterprises (MSMEs) in India should register under UDYAM to avail government benefits and schemes.</p>
                        </div>

                        <div class="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 class="font-bold text-gray-800 mb-3 text-lg">Is UDYAM Registration mandatory?</h3>
                            <p class="text-gray-600 leading-relaxed">While not legally mandatory, it is highly recommended as it provides access to numerous government schemes, subsidies, and benefits exclusively for MSMEs.</p>
                        </div>

                        <div class="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 class="font-bold text-gray-800 mb-3 text-lg">How long does the registration take?</h3>
                            <p class="text-gray-600 leading-relaxed">With BizAssist, your UDYAM registration is completed on the same day once we receive all required documents.</p>
                        </div>

                        <div class="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 class="font-bold text-gray-800 mb-3 text-lg">Is GST registration required for UDYAM?</h3>
                            <p class="text-gray-600 leading-relaxed">No, GST registration is not mandatory for UDYAM registration. However, if you have a GST number, it will be linked automatically.</p>
                        </div>

                        <div class="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 class="font-bold text-gray-800 mb-3 text-lg">What is the validity of UDYAM Registration?</h3>
                            <p class="text-gray-600 leading-relaxed">UDYAM Registration is valid for a lifetime. You only need to update the information whenever there are changes in your business.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section class="bg-green-600 py-16 sm:py-20">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Register Your MSME?</h2>
                    <p class="text-lg sm:text-xl text-green-100 mb-8">Get your UDYAM Registration completed today and unlock government benefits</p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <button class="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-lg">
                            Start Registration - ₹1,479
                        </button>
                        <button class="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold text-lg">
                            Talk to Expert
                        </button>
                    </div>
                    <p class="text-green-100 mt-6">Call us: +91 9061156535</p>
                </div>
            </section>

            <Footer />
        </div>
    );
});
