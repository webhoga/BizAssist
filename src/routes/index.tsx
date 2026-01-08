import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';

export const head: DocumentHead = {
    title: 'BizAssist - Business Registration & GST Services in India | MSME Registration',
    meta: [
        {
            name: 'description',
            content: 'BizAssist provides fast, reliable business registration services in India. Get GST registration, UDYAM/MSME registration, IEC, business consultation & more. 98% client satisfaction. Trusted by 500+ businesses.',
        },
        {
            name: 'keywords',
            content: 'business registration India, GST registration, UDYAM registration, MSME registration, IEC registration, business consultation, current account opening, business plan creation, company registration services',
        },

        {
            name: 'robots',
            content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        },
        {
            name: 'author',
            content: 'BizAssist',
        },
        {
            name: 'language',
            content: 'English',
        },
        {
            name: 'geo.region',
            content: 'IN',
        },
        {
            name: 'geo.placename',
            content: 'India',
        },

        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
        },
        {
            name: 'theme-color',
            content: '#16a34a',
        },
    ],
    links: [
        {
            rel: 'canonical',
            href: 'https://bizassist.webhoga.com/',
        },
    ],
};

export const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'BizAssist',
    description: 'Business registration and consultation services in India',
    url: 'https://bizassist.webhoga.com',
    geo: {
        '@type': 'GeoCoordinates',
        addressCountry: 'IN',
    },
    areaServed: {
        '@type': 'Country',
        name: 'India',
    },
    serviceType: [
        'GST Registration',
        'UDYAM Registration',
        'MSME Registration',
        'IEC Registration',
        'Business Consultation',
        'Business Plan Creation',
        'Current Account Opening',
    ],
    telephone: '+91-9061156535',
    email: 'contact@webhoga.com',
    openingHours: 'Mo-Fr 9:00-17:00',
};

export default component$(() => {
    return (
        <div class="min-h-screen bg-gray-50">
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={JSON.stringify(structuredData)}
            />

            <Header />

            {/* Hero Section */}
            <section id="home" class="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <div class="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        India's Premium Business Registration Partner
                    </div>

                    <h1 class="text-5xl font-bold mb-6 leading-tight">
                        <span class="text-green-600">BizAssist</span>
                        <br/>
                        <span class="text-gray-800">Registration &</span>
                        <br/>
                        <span class="text-gray-800">Consultation That</span>
                        <br/>
                        <span class="text-blue-600">Empowers Business</span>
                    </h1>

                    <p class="text-xl text-gray-600 mb-4">
                        We provide <span class="text-green-600 font-semibold">fast, reliable, compliant</span> business
                    </p>
                    <p class="text-xl text-gray-600 mb-4">
                        registration services that deliver measurable <span
                        class="text-green-600 font-semibold">growth, savings,</span>
                    </p>
                    <p class="text-xl text-gray-600 mb-8">
                        <span class="text-green-600 font-semibold">and success</span>.
                    </p>

                    <div class="flex flex-wrap gap-4 mb-8 text-sm">
                        <div class="flex items-center gap-2">
                            <div class="w-3 h-3 bg-green-600 rounded-full"></div>
                            <span class="text-gray-700">Trusted by 50+ Growing Indian Businesses</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="w-3 h-3 bg-blue-600 rounded-full"></div>
                            <span class="text-gray-700">98% Client Satisfaction Rate</span>
                        </div>
                    </div>

                    <div class="flex flex-wrap gap-4">
                        <a href="https://webhoga.com/contact" target="_blank" rel="noopener noreferrer"
                           class="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium text-lg shadow-lg inline-block text-center">
                            Start Registration
                        </a>
                        <a href="#services"
                           class="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-all duration-300 font-medium text-lg inline-block text-center">
                            View Services
                        </a>
                    </div>
                </div>

                <div class="hidden md:block">
                    <div class="bg-white rounded-2xl shadow-2xl p-8">
                        <div class="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-6 mb-4">
                            <div class="bg-white rounded-lg p-4">
                                <h3 class="text-2xl font-bold text-gray-800 mb-2">Business Registration</h3>
                                <p class="text-green-600 font-semibold">Complete Compliance Solution</p>
                            </div>
                        </div>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <span class="font-medium text-gray-700">GST Registration</span>
                                <span class="text-green-600 font-bold">Available</span>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <span class="font-medium text-gray-700">UDYAM Registration</span>
                                <span class="text-green-600 font-bold">Available</span>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <span class="font-medium text-gray-700">Business Consultation</span>
                                <span class="text-green-600 font-bold">Available</span>
                            </div>
                        </div>
                        <div class="mt-6 bg-green-50 p-4 rounded-lg">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-sm text-gray-600">Success Rate</span>
                                <span class="text-lg font-bold text-green-600">98%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-green-600 h-2 rounded-full" style="width: 98%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" class="bg-white py-20">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
                        <p class="text-xl text-gray-600">Comprehensive business registration and consultation services</p>
                    </div>

                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition group">
                            <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition">
                                <div class="w-8 h-8 bg-green-600 rounded group-hover:bg-white transition"></div>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-4">GST Registration</h3>
                            <p class="text-gray-600 mb-6">Complete GST registration service with documentation support and compliance guidance for your business.</p>
                            <a href="/gst-registration" class="text-green-600 font-semibold hover:text-green-700">Learn More →</a>
                        </div>

                        <div class="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition group">
                            <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition">
                                <div class="w-8 h-8 bg-green-600 rounded group-hover:bg-white transition"></div>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-4">UDYAM Registration</h3>
                            <p class="text-gray-600 mb-6">MSME registration made easy with expert assistance for availing government benefits and schemes.</p>
                            <a href="/udyam-registration" class="text-green-600 font-semibold hover:text-green-700">Learn More →</a>
                        </div>

                        <div class="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition group">
                            <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition">
                                <div class="w-8 h-8 bg-green-600 rounded group-hover:bg-white transition"></div>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-4">IEC Registration</h3>
                            <p class="text-gray-600 mb-6">Import Export Code registration for businesses looking to expand into international trade markets.</p>
                            <a href="/iec-registration" class="text-green-600 font-semibold hover:text-green-700">Learn More →</a>
                        </div>

                        <div class="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition group">
                            <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition">
                                <div class="w-8 h-8 bg-green-600 rounded group-hover:bg-white transition"></div>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-4">Business Plan Creation</h3>
                            <p class="text-gray-600 mb-6">Professional business plan development services to secure funding and guide your business strategy.</p>
                            <a href="/business-plan" class="text-green-600 font-semibold hover:text-green-700">Learn More →</a>
                        </div>

                        <div class="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition group">
                            <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition">
                                <div class="w-8 h-8 bg-green-600 rounded group-hover:bg-white transition"></div>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-4">Business Consultation</h3>
                            <p class="text-gray-600 mb-6">Expert business advisory services for startups and established businesses to optimize operations.</p>
                            <a href="/business-consultation" class="text-green-600 font-semibold hover:text-green-700">Learn More →</a>
                        </div>

                        <div class="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition group">
                            <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition">
                                <div class="w-8 h-8 bg-green-600 rounded group-hover:bg-white transition"></div>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-4">Current Account Opening</h3>
                            <p class="text-gray-600 mb-6">Hassle-free business current account opening assistance with major banks across India.</p>
                            <a href="/current-account" class="text-green-600 font-semibold hover:text-green-700">Learn More →</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section class="py-20 bg-gradient-to-br from-green-50 to-green-100">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl font-bold text-gray-800 mb-4">Why Choose BizAssist?</h2>
                        <p class="text-xl text-gray-600">Your trusted partner for business growth</p>
                    </div>

                    <div class="grid md:grid-cols-4 gap-8">
                        <div class="text-center">
                            <div class="text-5xl font-bold text-green-600 mb-4">50+</div>
                            <p class="text-gray-700 font-medium">Businesses Registered</p>
                        </div>
                        <div class="text-center">
                            <div class="text-5xl font-bold text-green-600 mb-4">98%</div>
                            <p class="text-gray-700 font-medium">Client Satisfaction</p>
                        </div>
                        <div class="text-center">
                            <div class="text-5xl font-bold text-green-600 mb-4">24/7</div>
                            <p class="text-gray-700 font-medium">Support Available</p>
                        </div>
                        <div class="text-center">
                            <div class="text-5xl font-bold text-green-600 mb-4">100%</div>
                            <p class="text-gray-700 font-medium">Compliance Assured</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section class="bg-green-600 py-20">
                <div class="max-w-4xl mx-auto px-4 text-center">
                    <h2 class="text-4xl font-bold text-white mb-6">Ready to Start Your Business Journey?</h2>
                    <p class="text-xl text-green-100 mb-8">Get expert assistance for all your business registration needs</p>
                    <div class="flex flex-wrap gap-4 justify-center">
                        <a href="https://webhoga.com/contact" target="_blank" rel="noopener noreferrer" class="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-lg inline-block shadow-lg">
                            Contact Now
                        </a>
                        <a href="/business-consultation" class="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium text-lg inline-block">
                            Schedule Consultation
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
});
