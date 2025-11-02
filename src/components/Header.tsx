import { component$ } from '@builder.io/qwik';
import BizAssistLogo from './BizAssist Logo.png';

export const Header = component$(() => {
    return (
        <header class="bg-white shadow-sm sticky top-0 z-50">
            <div class="bg-green-600 text-white py-2 px-4 flex justify-between items-center text-sm">
                <div class="flex gap-6">
                    <span>+91 9061156535</span>
                    <span>contact@webhoga.com</span>
                </div>
                <span>Business Consultation Available</span>
            </div>

            <nav class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <a href="/" class="flex items-center">
                        <img
                            src={BizAssistLogo}
                            alt="BizAssist Logo"
                            class="h-10 w-auto"
                            width="120"
                            height="40"
                        />
                    </a>
                </div>

                <ul class="hidden md:flex gap-8 text-gray-700 font-medium">
                    <li><a href="/" class="hover:text-green-600 transition">Home</a></li>
                    <li><a href="/#services" class="hover:text-green-600 transition">Services</a></li>
                    <li><a href="/about" class="hover:text-green-600 transition">About</a></li>
                    <li><a href="https://webhoga.com/contact" class="hover:text-green-600 transition">Contact</a></li>
                    <li><a href="https://blog.webhoga.com" target="_blank" class="hover:text-green-600 transition">Blog</a></li>
                </ul>

                <button class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-medium">
                    Get Quote
                </button>
            </nav>
        </header>
    );
});
