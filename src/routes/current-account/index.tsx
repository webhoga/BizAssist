import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';

export const head: DocumentHead = {
    title: 'Current Account Opening ₹3,133 | Business Bank Account - BizAssist',
    meta: [
        {
            name: 'description',
            content:
                'Open business current account at ₹3,133 with major banks, 5-7 days processing, zero/low balance options, expert assistance. All India service.',
        },
        {
            name: 'keywords',
            content:
                'current account opening, business bank account, current account online, open current account, business banking, HDFC current account, ICICI current account, zero balance current account',
        },
    ],
};

export default component$(() => {
    return (
        <div class="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section class="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-3xl">
                        <div class="inline-block bg-white/30 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            Business Banking Made Easy
                        </div>
                        <h1 class="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                            Current Account Opening Assistance
                        </h1>
                        <p class="text-lg sm:text-xl mb-8 text-teal-50 leading-relaxed">
                            Get your business current account opened hassle-free with top banks in India. We handle all
                            paperwork and coordination
                        </p>
                        <div class="flex flex-wrap gap-4 items-center mb-8">
                            <div class="bg-white text-teal-700 px-6 py-3 rounded-lg font-bold text-2xl shadow-lg">
                                ₹3,133
                            </div>
                            <span class="text-teal-100 text-base">Complete assistance package</span>
                        </div>
                        <a
                            href="https://webhoga.com/contact"
                            class="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg inline-block"
                        >
                            Open Account Now
                        </a>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section class="py-16 sm:py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">
                        Why Open Current Account With Us?
                    </h2>
                    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Hassle-free account opening with expert assistance
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div class="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-600">
                            <div class="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">Multiple Bank Options</h3>
                            <p class="text-gray-600 leading-relaxed">
                                Choose from leading banks like HDFC, ICICI, Axis, SBI, and more based on your needs
                            </p>
                        </div>

                        <div class="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-600">
                            <div class="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">Complete Documentation</h3>
                            <p class="text-gray-600 leading-relaxed">
                                We prepare and verify all required documents for smooth account opening
                            </p>
                        </div>

                        <div class="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-600">
                            <div class="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">Quick Processing</h3>
                            <p class="text-gray-600 leading-relaxed">
                                Get your account opened in 5-7 working days with our expedited process
                            </p>
                        </div>

                        <div class="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-cyan-600">
                            <div class="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">Dedicated Support</h3>
                            <p class="text-gray-600 leading-relaxed">
                                Personal relationship manager coordinates with bank on your behalf
                            </p>
                        </div>

                        <div class="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-cyan-600">
                            <div class="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                    />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">Free Debit Card</h3>
                            <p class="text-gray-600 leading-relaxed">
                                Get debit card and internet banking facility activated immediately
                            </p>
                        </div>

                        <div class="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-cyan-600">
                            <div class="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-3">Zero Balance Required</h3>
                            <p class="text-gray-600 leading-relaxed">
                                We help you get accounts with low or zero minimum balance requirements
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Documents Required */}
            <section class="py-16 sm:py-20 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">Documents Required</h2>
                    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        We'll help you prepare all necessary documents
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-6">For All Business Types</h3>
                            <div class="space-y-4">
                                <div class="bg-white p-6 rounded-xl shadow-md">
                                    <div class="flex items-start gap-4">
                                        <div class="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span class="text-teal-600 font-bold">1</span>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-gray-800 mb-2">PAN Card</h4>
                                            <p class="text-gray-600 text-sm">
                                                PAN card of business entity or proprietor
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-white p-6 rounded-xl shadow-md">
                                    <div class="flex items-start gap-4">
                                        <div class="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span class="text-teal-600 font-bold">2</span>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-gray-800 mb-2">Business Address Proof</h4>
                                            <p class="text-gray-600 text-sm">
                                                Rent agreement, electricity bill, or property deed
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-white p-6 rounded-xl shadow-md">
                                    <div class="flex items-start gap-4">
                                        <div class="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span class="text-teal-600 font-bold">3</span>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-gray-800 mb-2">Identity Proof</h4>
                                            <p class="text-gray-600 text-sm">
                                                Aadhaar, Passport, or Driving License
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-white p-6 rounded-xl shadow-md">
                                    <div class="flex items-start gap-4">
                                        <div class="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span class="text-teal-600 font-bold">4</span>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-gray-800 mb-2">Passport Photos</h4>
                                            <p class="text-gray-600 text-sm">
                                                Recent passport size photographs
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-6">Business Registration</h3>
                            <div class="space-y-4">
                                <div class="bg-white p-6 rounded-xl shadow-md">
                                    <div class="flex items-start gap-4">
                                        <div class="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span class="text-cyan-600 font-bold">A</span>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-gray-800 mb-2">For Proprietorship</h4>
                                            <p class="text-gray-600 text-sm">
                                                GST certificate, UDYAM registration (if available)
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-white p-6 rounded-xl shadow-md">
                                    <div class="flex items-start gap-4">
                                        <div class="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span class="text-cyan-600 font-bold">B</span>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-gray-800 mb-2">For Partnership</h4>
                                            <p class="text-gray-600 text-sm">
                                                Partnership deed, PAN of all partners
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-white p-6 rounded-xl shadow-md">
                                    <div class="flex items-start gap-4">
                                        <div class="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span class="text-cyan-600 font-bold">C</span>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-gray-800 mb-2">For Private Limited</h4>
                                            <p class="text-gray-600 text-sm">
                                                COI, MOA, AOA, Board resolution, Director details
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-white p-6 rounded-xl shadow-md">
                                    <div class="flex items-start gap-4">
                                        <div class="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span class="text-cyan-600 font-bold">D</span>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-gray-800 mb-2">For LLP</h4>
                                            <p class="text-gray-600 text-sm">
                                                LLP agreement, COI, Partner details
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section class="bg-white py-16 sm:py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">
                        Our Account Opening Process
                    </h2>
                    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Simple 5-step process to get your business account
                    </p>
                    <div class="max-w-4xl mx-auto">
                        <div class="space-y-8">
                            <div class="flex gap-6">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                        1
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Bank Selection</h3>
                                    <p class="text-gray-600 leading-relaxed">
                                        We help you choose the right bank based on your business needs, transaction
                                        volume, and features required
                                    </p>
                                </div>
                            </div>

                            <div class="flex gap-6">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                        2
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Document Collection</h3>
                                    <p class="text-gray-600 leading-relaxed">
                                        Submit your documents to us. We'll verify and prepare complete application
                                        package
                                    </p>
                                </div>
                            </div>

                            <div class="flex gap-6">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                        3
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Bank Coordination</h3>
                                    <p class="text-gray-600 leading-relaxed">
                                        We coordinate with bank officials and schedule appointment for account opening
                                    </p>
                                </div>
                            </div>

                            <div class="flex gap-6">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                        4
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Account Activation</h3>
                                    <p class="text-gray-600 leading-relaxed">
                                        Bank processes your application and activates account within 5-7 working days
                                    </p>
                                </div>
                            </div>

                            <div class="flex gap-6">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                        5
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800 mb-2">Welcome Kit Delivery</h3>
                                    <p class="text-gray-600 leading-relaxed">
                                        Receive cheque book, debit card, and internet banking credentials at your
                                        doorstep
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Account Features */}
            <section class="py-16 sm:py-20 bg-gradient-to-br from-teal-50 to-teal-100">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">
                        Current Account Features
                    </h2>
                    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Essential banking features for your business
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="bg-white p-6 rounded-xl shadow-lg text-center">
                            <h3 class="font-bold text-gray-800 mb-2">Unlimited Transactions</h3>
                            <p class="text-sm text-gray-600">No limit on deposits and withdrawals</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg text-center">
                            <h3 class="font-bold text-gray-800 mb-2">Net Banking</h3>
                            <p class="text-sm text-gray-600">24/7 online banking access</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg text-center">
                            <h3 class="font-bold text-gray-800 mb-2">Mobile Banking</h3>
                            <p class="text-sm text-gray-600">Manage account on the go</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg text-center">
                            <h3 class="font-bold text-gray-800 mb-2">Cheque Book</h3>
                            <p class="text-sm text-gray-600">Free cheque book facility</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg text-center">
                            <h3 class="font-bold text-gray-800 mb-2">Overdraft Facility</h3>
                            <p class="text-sm text-gray-600">Access working capital when needed</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg text-center">
                            <h3 class="font-bold text-gray-800 mb-2">Cash Deposit</h3>
                            <p class="text-sm text-gray-600">Easy cash handling for your business</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg text-center">
                            <h3 class="font-bold text-gray-800 mb-2">Secure Transactions</h3>
                            <p class="text-sm text-gray-600">Multi-layer security protection</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-lg text-center">
                            <h3 class="font-bold text-gray-800 mb-2">Account Statements</h3>
                            <p class="text-sm text-gray-600">Download statements anytime</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section class="py-16 sm:py-20 bg-white">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
                    <p class="text-lg sm:text-xl text-gray-600 mb-12">One-time fee for complete assistance</p>

                    <div class="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl shadow-2xl p-8 sm:p-12 max-w-md mx-auto">
                        <div class="mb-8">
                            <div class="text-4xl sm:text-5xl font-bold text-teal-600 mb-2">₹3,133</div>
                            <p class="text-gray-600">One-time service fee</p>
                        </div>

                        <div class="space-y-4 mb-8 text-left">
                            {[
                                'Document preparation & verification',
                                'Bank coordination & scheduling',
                                'Application submission support',
                                'Follow-up until account activation',
                                'Internet banking activation help',
                                'Post-opening support (30 days)',
                            ].map((item, idx) => (
                                <div key={idx} class="flex items-center gap-3">
                                    <svg
                                        class="w-6 h-6 text-teal-600 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span class="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://webhoga.com/contact"
                            class="w-full bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-all duration-300 font-bold text-lg shadow-lg inline-block text-center"
                        >
                            Open Account Now
                        </a>

                        <p class="text-sm text-gray-600 mt-4">Account opens in 5-7 working days</p>
                    </div>

                    <div class="mt-8 bg-blue-50 p-6 rounded-lg max-w-md mx-auto border-l-4 border-blue-600">
                        <p class="text-blue-800 font-semibold mb-2">Note:</p>
                        <p class="text-gray-700 text-sm">
                            Bank may require minimum balance as per their policy. We help you choose banks with low/zero
                            balance requirements.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section class="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">
                        Frequently Asked Questions
                    </h2>
                    <p class="text-center text-gray-600 mb-12">
                        Everything you need to know about current account opening
                    </p>
                    <div class="space-y-6">
                        {[
                            {
                                q: 'What is a current account?',
                                a: "A current account is a business bank account designed for frequent transactions with no limits on deposits and withdrawals. It's ideal for businesses with high transaction volumes.",
                            },
                            {
                                q: 'How long does it take to open an account?',
                                a: 'With our assistance, your current account will be opened and activated within 5-7 working days after document submission.',
                            },
                            {
                                q: 'Is minimum balance required?',
                                a: 'Minimum balance requirements vary by bank. We help you choose banks with low or zero minimum balance options suitable for your business size.',
                            },
                            {
                                q: 'Can I open account for any business type?',
                                a: 'Yes! We help open current accounts for proprietorships, partnerships, LLPs, private limited companies, and other business entities.',
                            },
                            {
                                q: 'Do I need to visit the bank?',
                                a: 'Yes, one visit to the bank branch is usually required for KYC verification and account opening formalities. We\'ll schedule and guide you.',
                            },
                            {
                                q: 'What if my application is rejected?',
                                a: 'We carefully verify documents beforehand to minimize rejection risk. If rejected, we help you correct issues and apply with another bank at no extra cost.',
                            },
                            {
                                q: 'Can I get overdraft facility?',
                                a: 'Yes, most banks offer overdraft facilities against current accounts. We can help you with the application process after account opening.',
                            },
                        ].map((faq, idx) => (
                            <div
                                key={idx}
                                class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <h3 class="font-bold text-gray-800 mb-3 text-lg">{faq.q}</h3>
                                <p class="text-gray-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison */}
            <section class="py-16 sm:py-20 bg-white">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">
                        Why Choose Professional Assistance?
                    </h2>
                    <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Save time and hassle with expert help
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="bg-red-50 p-8 rounded-xl border-2 border-red-200">
                            <h3 class="text-2xl font-bold text-red-800 mb-6 flex items-center gap-3">
                                Without Our Help
                            </h3>
                            <div class="space-y-4">
                                {[
                                    'Multiple bank visits and long queues',
                                    'Confusion about document requirements',
                                    'Delayed processing due to incomplete docs',
                                    'No guidance on bank selection',
                                    'Time-consuming follow-ups',
                                    'Risk of application rejection',
                                ].map((item, idx) => (
                                    <div key={idx} class="flex items-start gap-3">
                                        <span class="text-red-600 mt-1">•</span>
                                        <p class="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div class="bg-green-50 p-8 rounded-xl border-2 border-green-200">
                            <h3 class="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
                                With BizAssist
                            </h3>
                            <div class="space-y-4">
                                {[
                                    'Single visit to bank with appointment',
                                    'Complete document preparation support',
                                    'Fast processing (5-7 days)',
                                    'Expert advice on best bank for your needs',
                                    'We handle all follow-ups',
                                    'High success rate with pre-verification',
                                ].map((item, idx) => (
                                    <div key={idx} class="flex items-start gap-3">
                                        <span class="text-green-600 mt-1">•</span>
                                        <p class="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
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
                                    <svg
                                        key={i}
                                        class="w-5 h-5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p class="text-gray-600 mb-4 leading-relaxed">
                                "BizAssist made account opening so easy! They handled everything and got my HDFC current
                                account opened in just 6 days. Highly professional service."
                            </p>
                            <div class="font-bold text-gray-800">Suresh Babu</div>
                            <div class="text-sm text-gray-500">Retail Business Owner</div>
                        </div>

                        <div class="bg-white p-8 rounded-xl shadow-lg">
                            <div class="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        class="w-5 h-5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p class="text-gray-600 mb-4 leading-relaxed">
                                "Excellent support! They helped me choose the right bank with zero balance facility.
                                Saved me so much time and hassle."
                            </p>
                            <div class="font-bold text-gray-800">Divya Krishnan</div>
                            <div class="text-sm text-gray-500">E-commerce Business</div>
                        </div>

                        <div class="bg-white p-8 rounded-xl shadow-lg">
                            <div class="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        class="w-5 h-5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p class="text-gray-600 mb-4 leading-relaxed">
                                "Perfect service for busy entrepreneurs. They took care of everything from documents to
                                bank visits. Worth every rupee!"
                            </p>
                            <div class="font-bold text-gray-800">Arun Menon</div>
                            <div class="text-sm text-gray-500">Construction Business</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section class="bg-teal-600 py-16 sm:py-20">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Ready to Open Your Business Account?
                    </h2>
                    <p class="text-lg sm:text-xl text-teal-100 mb-8">
                        Get expert assistance and open your current account in just 5-7 days
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://webhoga.com/contact"
                            class="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-lg inline-block"
                        >
                            Open Account - ₹3,133
                        </a>
                        <a
                            href="https://webhoga.com/contact"
                            class="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 font-semibold text-lg inline-block"
                        >
                            Talk to Expert
                        </a>
                    </div>
                    <p class="text-teal-100 mt-6">Call us: +91 9061156535</p>
                </div>
            </section>

            <Footer />
        </div>
    );
});
