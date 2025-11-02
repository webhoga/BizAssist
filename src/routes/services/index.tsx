import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';

export default component$(() => {
    return (
        <>
            <Header />

            <section id="services" class="bg-white py-20">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
                        <p class="text-xl text-gray-600">Comprehensive business registration and consultation services</p>
                    </div>

                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition group">
                            <div
                                class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition">
                                <div class="w-8 h-8 bg-green-600 rounded group-hover:bg-white transition"></div>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-4">GST Registration</h3>
                            <p class="text-gray-600 mb-6">Complete GST registration service with documentation support and
                                compliance guidance for your business.</p>
                            <a href="/gst-registration" class="text-green-600 font-semibold hover:text-green-700">Learn More
                                →</a>
                        </div>

                        <div class="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition group">
                            <div
                                class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition">
                                <div class="w-8 h-8 bg-green-600 rounded group-hover:bg-white transition"></div>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-4">UDYAM Registration</h3>
                            <p class="text-gray-600 mb-6">MSME registration made easy with expert assistance for availing
                                government benefits and schemes.</p>
                            <a href="/udyam-registration" class="text-green-600 font-semibold hover:text-green-700">Learn More
                                →</a>
                        </div>

                        <div class="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition group">
                            <div
                                class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition">
                                <div class="w-8 h-8 bg-green-600 rounded group-hover:bg-white transition"></div>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-4">IEC Registration</h3>
                            <p class="text-gray-600 mb-6">Import Export Code registration for businesses looking to expand into
                                international trade markets.</p>
                            <a href="/iec-registration" class="text-green-600 font-semibold hover:text-green-700">Learn More
                                →</a>
                        </div>

                        <div class="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition group">
                            <div
                                class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition">
                                <div class="w-8 h-8 bg-green-600 rounded group-hover:bg-white transition"></div>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-4">Business Plan Creation</h3>
                            <p class="text-gray-600 mb-6">Professional business plan development services to secure funding and
                                guide your business strategy.</p>
                            <a href="/business-plan" class="text-green-600 font-semibold hover:text-green-700">Learn More →</a>
                        </div>

                        <div class="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition group">
                            <div
                                class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition">
                                <div class="w-8 h-8 bg-green-600 rounded group-hover:bg-white transition"></div>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-4">Business Consultation</h3>
                            <p class="text-gray-600 mb-6">Expert business advisory services for startups and established
                                businesses to optimize operations.</p>
                            <a href="/business-consultation" class="text-green-600 font-semibold hover:text-green-700">Learn
                                More →</a>
                        </div>

                        <div class="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition group">
                            <div
                                class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition">
                                <div class="w-8 h-8 bg-green-600 rounded group-hover:bg-white transition"></div>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-4">Current Account Opening</h3>
                            <p class="text-gray-600 mb-6">Hassle-free business current account opening assistance with major
                                banks across India.</p>
                            <a href="/current-account" class="text-green-600 font-semibold hover:text-green-700">Learn More
                                →</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
});

export const head: DocumentHead = {
    title: 'Our Services - Business Registration & Consultation',
    meta: [
        {
            name: 'description',
            content: 'Comprehensive business registration and consultation services including GST, UDYAM, IEC registration, business plans, and more.',
        },
    ],
};
