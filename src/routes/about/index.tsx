import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';

export const head: DocumentHead = {
    title: 'About BizAssist | Business Registration & Compliance Services India',
    meta: [
        {
            name: 'description',
            content: 'Learn about BizAssist - WebHoga\'s business services division. Digital-first approach to business registration, GST, UDYAM, compliance & consultation. 98% client satisfaction. Trusted by 50+ businesses.',
        },
        {
            name: 'keywords',
            content: 'about BizAssist, business registration services India, WebHoga business division, digital business services, startup services India, business compliance assistance, MSME registration services',
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
                    <div class="max-w-3xl mx-auto text-center">
                        <h1 class="text-4xl sm:text-5xl font-bold mb-6 leading-tight">About BizAssist</h1>
                        <p class="text-lg sm:text-xl mb-8 text-green-50 leading-relaxed">Empowering businesses with simplified registration, compliance, and growth services</p>
                        <a href="#overview" class="inline-block bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg">
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section id="overview" class="py-16 sm:py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Overview of BizAssist</h2>
                            <p class="text-gray-600 mb-6 leading-relaxed">BizAssist is a dedicated business assistance wing of WebHoga, created to simplify and streamline essential business services for entrepreneurs and startups. From UDYAM and GST registration to current account assistance, business consultation, and professional documentation, BizAssist offers reliable, affordable, and fully digital solutions.</p>
                            <p class="text-gray-600 mb-8 leading-relaxed">Backed by the trusted expertise of WebHoga, we empower businesses to start, grow, and stay compliant with confidence.</p>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div class="flex items-start gap-3">
                                    <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-gray-800 mb-1">Quick Assistance</h3>
                                        <p class="text-sm text-gray-600">Fast turnaround on all services</p>
                                    </div>
                                </div>

                                <div class="flex items-start gap-3">
                                    <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-gray-800 mb-1">Hassle-Free Process</h3>
                                        <p class="text-sm text-gray-600">Simple and streamlined workflow</p>
                                    </div>
                                </div>

                                <div class="flex items-start gap-3">
                                    <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-gray-800 mb-1">Affordable Pricing</h3>
                                        <p class="text-sm text-gray-600">Transparent and competitive rates</p>
                                    </div>
                                </div>

                                <div class="flex items-start gap-3">
                                    <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-gray-800 mb-1">Expert Guidance</h3>
                                        <p class="text-sm text-gray-600">Professional consultation included</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-gradient-to-br from-green-50 to-green-100 p-8 sm:p-12 rounded-2xl shadow-xl">
                            <div class="bg-white rounded-xl p-6 mb-6 shadow-md">
                                <h3 class="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                                <p class="text-gray-600 leading-relaxed">To empower entrepreneurs and businesses with accessible, affordable, and reliable support services that simplify compliance and accelerate growth.</p>
                            </div>
                            <div class="bg-white rounded-xl p-6 shadow-md">
                                <h3 class="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                                <p class="text-gray-600 leading-relaxed">To be India's most trusted digital partner for business registration, compliance, and growth services, enabling every entrepreneur to succeed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Strategy Section */}
            <section class="bg-white py-16 sm:py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Business Strategy</h2>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">Building long-term partnerships through excellence and reliability</p>
                    </div>

                    <div class="max-w-4xl mx-auto mb-12">
                        <p class="text-gray-600 text-lg leading-relaxed text-center">Our business strategy at BizAssist is centered around empowering startups and small businesses with accessible, affordable, and reliable business support services. We focus on simplifying essential processes like registration, compliance, and planning through a fully digital and customer-friendly approach. By combining expert guidance with quick turnaround times, we aim to build long-term relationships and become a trusted partner in every stage of our clients' business journey.</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg">
                            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-4">Client-Centric Approach</h3>
                            <p class="text-gray-600 leading-relaxed">We prioritize understanding each client's unique needs to deliver personalized solutions that drive real business value. Every service is tailored to meet specific requirements and business goals.</p>
                        </div>

                        <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg">
                            <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-4">Digital-First Operations</h3>
                            <p class="text-gray-600 leading-relaxed">By leveraging technology, we offer fast, paperless, and cost-effective services that simplify the business setup and compliance process. Everything can be done from the comfort of your home or office.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section class="py-16 sm:py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div class="text-center">
                            <div class="text-4xl sm:text-5xl font-bold mb-2">50+</div>
                            <p class="text-green-100">Businesses Registered</p>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl sm:text-5xl font-bold mb-2">98%</div>
                            <p class="text-green-100">Client Satisfaction</p>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl sm:text-5xl font-bold mb-2">6+</div>
                            <p class="text-green-100">Services Offered</p>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl sm:text-5xl font-bold mb-2">24/7</div>
                            <p class="text-green-100">Support Available</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WebHoga Connection */}
            <section class="py-16 sm:py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="max-w-4xl mx-auto">
                        <div class="bg-gradient-to-br from-gray-50 to-gray-100 p-8 sm:p-12 rounded-2xl shadow-xl">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 class="text-2xl sm:text-3xl font-bold text-gray-800">Powered by WebHoga</h2>
                                    <p class="text-gray-600">Your Trusted Digital Services Partner</p>
                                </div>
                            </div>
                            <p class="text-gray-700 leading-relaxed mb-6">WebHoga is an online digital services provider that designs and develops websites, helping businesses establish and grow their online presence. BizAssist was created as a specialized division to extend WebHoga's commitment to empowering businesses with essential support services.</p>
                            <p class="text-gray-700 leading-relaxed">Together, WebHoga and BizAssist provide end-to-end solutions — from building your digital presence to handling all your business registration and compliance needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section class="py-16 sm:py-20 bg-gray-50">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">Frequently Asked Questions</h2>
                    <p class="text-center text-gray-600 mb-12">Everything you need to know about BizAssist</p>

                    <div class="space-y-6">
                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 class="font-bold text-gray-800 mb-3 text-lg">Can I get all services done online?</h3>
                            <p class="text-gray-600 leading-relaxed">All our services are 100% digital — from consultation to documentation and registration. However, in rare cases where a government department requires in-person verification or submission of documents, the client may be required to visit the respective government office as per their guidelines.</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 class="font-bold text-gray-800 mb-3 text-lg">What is BizAssist and how is it connected to WebHoga?</h3>
                            <p class="text-gray-600 leading-relaxed">BizAssist is a specialized division of WebHoga focused on providing business support services like registrations, compliance assistance, and business planning. It was created to help entrepreneurs and startups access essential services in a simple, affordable, and fully digital way. WebHoga is an online digital services provider that designs and develops websites, helping businesses establish and grow their online presence.</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 class="font-bold text-gray-800 mb-3 text-lg">How does BizAssist ensure the security of my personal and business information?</h3>
                            <p class="text-gray-600 leading-relaxed">We take data privacy seriously. All information shared with BizAssist is stored securely and used only for processing your service requests. We follow strict confidentiality protocols and work with trusted, verified platforms for document handling and communication.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section class="py-16 sm:py-20 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center">Our Core Values</h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div class="text-center">
                            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 class="font-bold text-gray-800 mb-2 text-lg">Trust</h3>
                            <p class="text-gray-600 text-sm">Building lasting relationships through transparency and reliability</p>
                        </div>

                        <div class="text-center">
                            <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 class="font-bold text-gray-800 mb-2 text-lg">Speed</h3>
                            <p class="text-gray-600 text-sm">Quick turnaround times without compromising quality</p>
                        </div>

                        <div class="text-center">
                            <div class="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 class="font-bold text-gray-800 mb-2 text-lg">Affordability</h3>
                            <p class="text-gray-600 text-sm">Quality services at competitive and transparent prices</p>
                        </div>

                        <div class="text-center">
                            <div class="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 class="font-bold text-gray-800 mb-2 text-lg">Excellence</h3>
                            <p class="text-gray-600 text-sm">Expert guidance and professional service delivery</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section class="bg-green-600 py-16 sm:py-20">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Start Your Business Journey?</h2>
                    <p class="text-lg sm:text-xl text-green-100 mb-8">Let BizAssist handle your business registrations and compliance needs</p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/services" class="inline-block bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-lg">
                            View Services
                        </a>
                        <a href="https://webhoga.com/contact-us" target="_blank" rel="noopener noreferrer" class="inline-block border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold text-lg">
                            Contact Us
                        </a>
                    </div>
                    <p class="text-green-100 mt-6">Call us: +91 9061156535</p>
                </div>
            </section>

            <Footer />
        </div>
    );
});
