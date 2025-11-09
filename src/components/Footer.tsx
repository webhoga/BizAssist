import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
    return (
        <footer class="bg-white text-gray-700 py-12 border-t border-gray-200">
            <div class="max-w-7xl mx-auto px-4">
                <div class="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <a href="/" class="inline-block mb-4">
                            <img
                                src="/BizAssist-Logo.png"
                                alt="BizAssist Logo"
                                class="h-10 w-auto"
                                width="120"
                                height="40"
                            />
                        </a>
                        <p class="text-sm mb-4 text-gray-600">by WebHoga</p>
                        <p class="text-sm text-gray-600">Premium business registration and consultation services across India.</p>
                    </div>

                    <div>
                        <h4 class="text-gray-900 font-semibold mb-4">Services</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="/gst-registration" class="hover:text-green-600 transition">GST Registration</a></li>
                            <li><a href="/udyam-registration" class="hover:text-green-600 transition">UDYAM Registration</a></li>
                            <li><a href="/iec-registration" class="hover:text-green-600 transition">IEC Registration</a></li>
                            <li><a href="/business-plan" class="hover:text-green-600 transition">Business Plan Creation</a></li>
                            <li><a href="/business-consultation" class="hover:text-green-600 transition">Business Consultation</a></li>
                            <li><a href="/current-account" class="hover:text-green-600 transition">Current Account</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="text-gray-900 font-semibold mb-4">Company</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="/about" class="hover:text-green-600 transition">About Us</a></li>
                            <li><a href="https://webhoga.com/contact" target="_blank" class="hover:text-green-600 transition">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="text-gray-900 font-semibold mb-4">Contact</h4>
                        <ul class="space-y-2 text-sm">
                            <li class="text-gray-600">+91 9061156535</li>
                            <li class="text-gray-600">contact@webhoga.com</li>
                        </ul>
                    </div>
                </div>

                <div class="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
                    <p>&copy; 2025 WebHoga Digital Services.</p>
                </div>
            </div>
        </footer>
    );
});
