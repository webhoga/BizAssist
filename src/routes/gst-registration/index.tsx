import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';

export const head: DocumentHead = {
    title: 'GST Registration Online ₹1,999 | Get GSTIN in 3-7 Days - BizAssist',
    meta: [
        {
            name: 'description',
            content: 'Get GST registration online at ₹1,999. Receive 15-digit GSTIN in 3-7 days. Expert assistance for regular GST & composition scheme. Claim input tax credit. All India service.',
        },
        {
            name: 'keywords',
            content: 'GST registration, GST registration online, GSTIN registration, GST number online, how to register for GST, GST registration cost, online GST registration India, GST certificate, composition scheme GST',
        },
    ],
};

export default component$(() => {
    return (
        <div class="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section class="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="max-w-3xl">
                        <div
                            class="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30">
                            Complete GST Registration Service
                        </div>
                        <h1 class="text-5xl font-bold mb-6">GST Registration</h1>
                        <p class="text-xl mb-8 text-blue-50">Get your business GST registered quickly and hassle-free.
                            Start collecting GST and expand your business legally across India</p>
                        <div class="flex gap-4 items-center mb-8">
                            <div class="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold text-2xl">
                                ₹1,999
                            </div>
                            <span class="text-blue-100">All-inclusive pricing</span>
                        </div>
                        <a href="https://webhoga.com/contact"
                           class="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold text-lg">
                            Register Now
                        </a>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section class="py-20">
                <div class="max-w-7xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Why Get GST Registration?</h2>

                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
                            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Legal Compliance</h3>
                            <p class="text-gray-600">Operate your business legally and avoid penalties. GST registration is mandatory for businesses with turnover above ₹40 lakhs</p>
                        </div>

                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
                            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Input Tax Credit</h3>
                            <p class="text-gray-600">Claim input tax credit on purchases and reduce your overall tax liability, improving your profit margins</p>
                        </div>

                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
                            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Business Credibility</h3>
                            <p class="text-gray-600">Enhance your business reputation and credibility. Registered businesses appear more trustworthy to clients and partners</p>
                        </div>

                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-600">
                            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Pan-India Business</h3>
                            <p class="text-gray-600">Sell your products and services across all states in India seamlessly without any inter-state barriers</p>
                        </div>

                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-600">
                            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Easy Loan Access</h3>
                            <p class="text-gray-600">GST registration makes it easier to get business loans and credit from banks and financial institutions</p>
                        </div>

                        <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-600">
                            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-4">Online Filing</h3>
                            <p class="text-gray-600">Simple online return filing process. We provide complete support for your GST return filing needs</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is GST */}
            <section class="bg-white py-20">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 class="text-4xl font-bold text-gray-800 mb-6">What is GST Registration?</h2>
                            <p class="text-gray-600 mb-6">GST (Goods and Services Tax) Registration is a mandatory registration for businesses in India that supply goods or services. It's a unified tax system that replaced multiple indirect taxes.</p>
                            <p class="text-gray-600 mb-6">Once registered, you receive a unique 15-digit GSTIN (GST Identification Number) that allows you to collect GST from customers and claim input tax credit on your purchases.</p>
                            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                                <p class="text-blue-800 font-semibold mb-2">Mandatory Registration:</p>
                                <ul class="text-gray-700 text-sm space-y-2">
                                    <li>• Turnover exceeds ₹40 lakhs (₹20 lakhs for special category states)</li>
                                    <li>• E-commerce sellers (mandatory regardless of turnover)</li>
                                    <li>• Inter-state supply of goods or services</li>
                                    <li>• Casual taxable persons and non-resident taxable persons</li>
                                </ul>
                            </div>
                        </div>
                        <div class="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl">
                            <h3 class="text-2xl font-bold text-gray-800 mb-6">GST Tax Rates</h3>
                            <div class="space-y-4">
                                <div class="bg-white p-4 rounded-lg shadow">
                                    <div class="flex justify-between items-center mb-1">
                                        <span class="font-bold text-gray-800">0% GST</span>
                                        <span class="text-sm text-gray-600">Exempt</span>
                                    </div>
                                    <p class="text-xs text-gray-500">Fresh milk, eggs, fruits, vegetables, foodgrains, educational and healthcare services</p>
                                </div>
                                <div class="bg-white p-4 rounded-lg shadow">
                                    <div class="flex justify-between items-center mb-1">
                                        <span class="font-bold text-gray-800">5% GST</span>
                                        <span class="text-sm text-gray-600">Essential items</span>
                                    </div>
                                    <p class="text-xs text-gray-500">Packaged food (butter, cheese), edible oils, tea, soap, toothpaste, basic apparel (up to ₹2,500)</p>
                                </div>
                                <div class="bg-white p-4 rounded-lg shadow">
                                    <div class="flex justify-between items-center mb-1">
                                        <span class="font-bold text-gray-800">18% GST</span>
                                        <span class="text-sm text-gray-600">Standard rate</span>
                                    </div>
                                    <p class="text-xs text-gray-500">Consumer durables (ACs, TVs), vehicles, mobile phones, financial and telecom services</p>
                                </div>
                                <div class="bg-white p-4 rounded-lg shadow">
                                    <div class="flex justify-between items-center mb-1">
                                        <span class="font-bold text-gray-800">40% GST</span>
                                        <span class="text-sm text-gray-600">Luxury & sin goods</span>
                                    </div>
                                    <p class="text-xs text-gray-500">Premium cars, high-end motorcycles (over 350cc), aerated beverages, tobacco</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Documents Required */}
            <section class="py-20">
                <div class="max-w-7xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Documents Required</h2>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-blue-600 font-bold">1</span>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-800 mb-2">PAN Card</h3>
                                    <p class="text-gray-600 text-sm">PAN card of the business entity or proprietor</p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-blue-600 font-bold">2</span>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-800 mb-2">Aadhaar Card</h3>
                                    <p class="text-gray-600 text-sm">Aadhaar card of authorized signatory/proprietor</p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-blue-600 font-bold">3</span>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-800 mb-2">Address Proof</h3>
                                    <p class="text-gray-600 text-sm">Business address proof (rent agreement or ownership deed)</p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-blue-600 font-bold">4</span>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-800 mb-2">Bank Details</h3>
                                    <p class="text-gray-600 text-sm">Cancelled cheque or bank statement with account details</p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-blue-600 font-bold">5</span>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-800 mb-2">Digital Signature</h3>
                                    <p class="text-gray-600 text-sm">Digital signature certificate (for companies & LLPs)</p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-blue-600 font-bold">6</span>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-800 mb-2">Photo</h3>
                                    <p class="text-gray-600 text-sm">Passport size photograph of the proprietor/partners</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of GST Registration */}
            <section class="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
                <div class="max-w-7xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Types of GST Registration</h2>
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="bg-white p-8 rounded-xl shadow-lg">
                            <h3 class="text-2xl font-bold text-gray-800 mb-4">Regular GST</h3>
                            <p class="text-gray-600 mb-4">For businesses with turnover above ₹40 lakhs (₹20 lakhs for special states)</p>
                            <ul class="space-y-2 text-sm text-gray-600">
                                <li class="flex items-start gap-2">
                                    <span class="text-blue-600 mt-1">•</span>
                                    <span>Monthly/Quarterly return filing</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-blue-600 mt-1">•</span>
                                    <span>Full input tax credit available</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-blue-600 mt-1">•</span>
                                    <span>Can issue tax invoices</span>
                                </li>
                            </ul>
                        </div>

                        <div class="bg-white p-8 rounded-xl shadow-lg">
                            <h3 class="text-2xl font-bold text-gray-800 mb-4">Composition Scheme</h3>
                            <p class="text-gray-600 mb-4">For small businesses with turnover up to ₹1.5 crore</p>
                            <ul class="space-y-2 text-sm text-gray-600">
                                <li class="flex items-start gap-2">
                                    <span class="text-blue-600 mt-1">•</span>
                                    <span>Quarterly return filing</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-blue-600 mt-1">•</span>
                                    <span>Fixed tax rate (1-6%)</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-blue-600 mt-1">•</span>
                                    <span>Cannot claim input tax credit</span>
                                </li>
                            </ul>
                        </div>

                        <div class="bg-white p-8 rounded-xl shadow-lg">
                            <h3 class="text-2xl font-bold text-gray-800 mb-4">Casual/Non-Resident</h3>
                            <p class="text-gray-600 mb-4">For businesses operating temporarily in a location</p>
                            <ul class="space-y-2 text-sm text-gray-600">
                                <li class="flex items-start gap-2">
                                    <span class="text-blue-600 mt-1">•</span>
                                    <span>Valid for 90 days</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-blue-600 mt-1">•</span>
                                    <span>Advance tax deposit required</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <span class="text-blue-600 mt-1">•</span>
                                    <span>For exhibitions, events, etc.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section class="bg-white py-20">
                <div class="max-w-7xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Our Registration Process</h2>
                    <div class="max-w-4xl mx-auto">
                        <div class="space-y-8">
                            <div class="flex gap-6">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Document Collection</h3>
                                    <p class="text-gray-600">Share your business documents with us through our secure online portal or WhatsApp</p>
                                </div>
                            </div>

                            <div class="flex gap-6">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Application Preparation</h3>
                                    <p class="text-gray-600">Our GST experts verify documents and prepare your application with complete accuracy</p>
                                </div>
                            </div>

                            <div class="flex gap-6">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Online Submission</h3>
                                    <p class="text-gray-600">We submit your GST application on the government portal and handle all follow-ups</p>
                                </div>
                            </div>

                            <div class="flex gap-6">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">GSTIN Delivery</h3>
                                    <p class="text-gray-600">Receive your GST certificate with 15-digit GSTIN within 3-7 working days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section class="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
                <div class="max-w-4xl mx-auto px-4 text-center">
                    <h2 class="text-4xl font-bold text-gray-800 mb-6">Simple, Transparent Pricing</h2>
                    <p class="text-xl text-gray-600 mb-12">All-inclusive package with expert support</p>

                    <div class="bg-white rounded-2xl shadow-2xl p-12 max-w-md mx-auto">
                        <div class="mb-8">
                            <div class="text-5xl font-bold text-blue-600 mb-2">₹1,999</div>
                            <p class="text-gray-600">One-time payment</p>
                        </div>

                        <div class="space-y-4 mb-8 text-left">
                            <div class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">Complete GST Registration</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">Document verification & preparation</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">Online application submission</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">GST certificate delivery</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">Expert GST consultation</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">Post-registration support</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <svg class="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-gray-700">First return filing guidance</span>
                            </div>
                        </div>

                        <a href="https://webhoga.com/contact" class="block w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-bold text-lg text-center">
                            Register Now
                        </a>

                        <p class="text-sm text-gray-500 mt-4">Processing time: 3-7 working days</p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section class="py-20">
                <div class="max-w-4xl mx-auto px-4">
                    <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">Frequently Asked Questions</h2>
                    <div class="space-y-6">
                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="font-bold text-gray-800 mb-3">Who needs GST registration?</h3>
                            <p class="text-gray-600">Businesses with annual turnover exceeding ₹40 lakhs (₹20 lakhs for special category states), inter-state suppliers, e-commerce sellers, and certain other categories must register for GST.</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="font-bold text-gray-800 mb-3">How long does GST registration take?</h3>
                            <p class="text-gray-600">With BizAssist, GST registration typically takes 3-7 working days after submission of all required documents. We handle all follow-ups with the GST portal.</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="font-bold text-gray-800 mb-3">What is the validity of GST registration?</h3>
                            <p class="text-gray-600">GST registration is valid as long as the business is operational. However, you must file regular returns and maintain compliance. Registration can be cancelled if the business is closed.</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="font-bold text-gray-800 mb-3">Can I register for GST voluntarily?</h3>
                            <p class="text-gray-600">Yes, even if your turnover is below the threshold limit, you can register voluntarily for GST. This helps in claiming input tax credit and enhances business credibility.</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="font-bold text-gray-800 mb-3">What are GST returns and how often do I need to file them?</h3>
                            <p class="text-gray-600">GST returns are documents filed to report your sales, purchases, and tax liability. Depending on your business type, you may need to file monthly (GSTR-1 & GSTR-3B) or quarterly returns.</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg">
                            <h3 class="font-bold text-gray-800 mb-3">Do you provide return filing services?</h3>
                            <p class="text-gray-600">Yes! We offer comprehensive GST return filing services. Contact us for customized return filing packages based on your business needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section class="bg-blue-600 py-20">
                <div class="max-w-4xl mx-auto px-4 text-center">
                    <h2 class="text-4xl font-bold text-white mb-6">Ready to Get GST Registered?</h2>
                    <p class="text-xl text-blue-100 mb-8">Start your GST registration today and grow your business legally across India</p>
                    <div class="flex gap-4 justify-center flex-wrap">
                        <a href="https://webhoga.com/contact" class="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-bold text-lg">
                            Register Now - ₹1,999
                        </a>
                    </div>
                    <p class="text-blue-100 mt-6">Call us: +91 9061156535</p>
                </div>
            </section>

            <Footer />
        </div>
    );
});
