"use client";
import { Check } from "lucide-react";

const tiers = [
    {
        name: 'Student Squad',
        price: 'Free',
        description: 'For students to learn, compete, and showcase skills.',
        features: ['Access to all workshops', '24h Challenge Entry', 'Swag Kit & Goodies', 'Digital Certificate', 'Free Meals & Snacks'],
        cta: 'Join for Free',
        popular: true,
    },
    {
        name: 'Professional',
        price: '₹500',
        description: 'For mentors and industry pros willing to network.',
        features: ['Networking Gala', 'Mentorship Access', 'VIP Lounge', 'Premium Merchandise', 'Judge Access (Invite)'],
        cta: 'Register as Pro',
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-0" />

            {/* Background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"><span className="text-gradient">Select Your Track</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">Whether you are a student or a professional, we have a spot for you at JNTUGV Hackathon.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {tiers.map((tier) => (
                        <div key={tier.name} className={`glass-card p-8 rounded-3xl relative transition-all duration-300 hover:-translate-y-2 ${tier.popular ? 'border-purple-500/50 shadow-xl shadow-purple-500/20' : 'border-white/10'}`}>
                            {tier.popular && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                                    Most Popular
                                </span>
                            )}
                            <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                            <div className="text-5xl font-bold text-cyan-400 mb-4 tracking-tight">{tier.price}</div>
                            <p className="text-gray-400 mb-8 h-12">{tier.description}</p>

                            <ul className="space-y-4 mb-10">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-center text-gray-300">
                                        <span className="bg-purple-500/20 p-1 rounded-full mr-3 text-purple-400">
                                            <Check className="w-4 h-4" />
                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all text-lg ${tier.popular
                                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90 shadow-lg shadow-purple-500/25'
                                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                                }`}>
                                {tier.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
