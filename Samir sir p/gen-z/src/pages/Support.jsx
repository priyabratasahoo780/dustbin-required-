import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaEnvelope, FaDiscord, FaPhoneAlt, FaQuestionCircle, FaUserShield, FaRocket, FaTools, FaCheckCircle, FaChevronRight, FaThumbsUp, FaThumbsDown, FaPlayCircle, FaTicketAlt, FaVolumeUp, FaVolumeMute, FaMusic, FaStepForward, FaStepBackward, FaPause, FaPlay } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import "./Support.css";

export default function Support() {
    const [activeFaq, setActiveFaq] = useState(null);
    const [feedback, setFeedback] = useState(null);
    const [formStatus, setFormStatus] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [scrollRotation, setScrollRotation] = useState(0);
    const audioRef = useRef(null);

    const playlist = [
        { title: "Future Chill", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
        { title: "Smooth Horizon", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
        { title: "Deep Focus", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
        { title: "Crystal Skies", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = scrollY / maxScroll;

            setScrollRotation(scrollY * 0.5);

            if (audioRef.current && isPlaying) {
                const newVolume = Math.max(0.1, 0.6 - (scrollPercentage * 0.5));
                audioRef.current.volume = newVolume;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isPlaying]);

    useEffect(() => {
        if (isPlaying && audioRef.current) {
            audioRef.current.play().catch(() => setIsPlaying(false));
        }
    }, [currentTrackIndex]);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(err => console.log("Interaction required"));
        }
        setIsPlaying(!isPlaying);
    };

    const nextTrack = (e) => {
        e.stopPropagation();
        setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    };

    const prevTrack = (e) => {
        e.stopPropagation();
        setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    };

    const categories = [
        { icon: <FaRocket />, title: "Getting Started", desc: "Learn the basics and get up and running in minutes." },
        { icon: <FaUserShield />, title: "Account & Security", desc: "Manage your profile, password, and security settings." },
        { icon: <FaTools />, title: "Technical Support", desc: "Troubleshoot common issues and optimize performance." },
        { icon: <FaQuestionCircle />, title: "Billing & Plans", desc: "Questions about your subscription and payments." }
    ];

    const popularArticles = [
        "How to optimize your resume for ATS?",
        "Setting up custom domains for your portfolio",
        "Integrating AI for suggested skills",
        "Managing multiple profiles",
        "Understanding our privacy policy",
        "Troubleshooting export failures"
    ];

    const videoTutorials = [
        { title: "Building your first resume", length: "5:20" },
        { title: "Advanced ATS optimization", length: "8:45" },
        { title: "Customizing Premium Templates", length: "12:10" }
    ];

    const faqs = [
        { q: "How do I create a new resume?", a: "To create a new resume, navigate to the Dashboard and click on 'Create New'. You can choose from our 6 premium templates and start filling in your details." },
        { q: "Can I download my resume in PDF format?", a: "Yes, once you finish editing, you can click the 'Export' button to download your resume as a high-quality PDF, ready for printing or applying." },
        { q: "How do I change my subscription plan?", a: "You can manage your subscription from the 'Settings' page under the 'Billing' tab. From there, you can upgrade, downgrade, or cancel at any time." },
        { q: "Is my data secure?", a: "Absolutely. We use industry-standard encryption to protect your data. Your personal information is never shared with third parties without your consent." }
    ];

    const suggestions = ["PDF Export", "Pricing", "AI Suggestions", "Reset Password"];

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');
        setTimeout(() => setFormStatus('success'), 1500);
    };

    return (
        <div className="support-container">
            <Nav />
            
            <audio 
                ref={audioRef} 
                src={playlist[currentTrackIndex].url} 
                loop={false}
                onEnded={() => setCurrentTrackIndex((prev) => (prev + 1) % playlist.length)}
            />

            {/* Floating Music Hub */}
            <div className="music-control">
                <div className="music-visualizer" onClick={togglePlay}>
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="bar" style={{ 
                            animationDelay: `${i * 0.15}s`, 
                            animationPlayState: isPlaying ? 'running' : 'paused',
                            height: isPlaying ? undefined : '3px'
                        }}></div>
                    ))}
                </div>
                
                <div className="track-info" onClick={togglePlay}>
                    <span className="track-name">{playlist[currentTrackIndex].title}</span>
                    <span className="track-status">{isPlaying ? 'Now Playing' : 'Paused'}</span>
                </div>

                <div className="playlist-controls">
                    <FaStepBackward className="control-btn" onClick={prevTrack} />
                    <div onClick={togglePlay} className="control-btn">
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </div>
                    <FaStepForward className="control-btn" onClick={nextTrack} />
                </div>
            </div>

            {/* Scroll-Synced Icon */}
            <div className="scroll-icon" style={{ transform: `translateY(-50%) rotate(${scrollRotation}deg)` }}>
                <FaMusic />
            </div>

            {/* Hero Section */}
            <section className="support-hero">
                <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-gray-900">How can we <span className="text-[#ffcb05]">help you?</span></h1>
                <p className="text-gray-600 text-xl max-w-2xl mx-auto mb-10">
                    Search our knowledge base or browse categories below to find answers to your questions.
                </p>
                <div className="search-box">
                    <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                    <input type="text" placeholder="Search for help, articles, and more..." />
                </div>
                <div className="suggestion-chips">
                    {suggestions.map((s, i) => (
                        <span key={i} className="chip">{s}</span>
                    ))}
                </div>
            </section>

            {/* Help Categories */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="category-grid">
                    {categories.map((cat, i) => (
                        <div key={i} className="category-card">
                            <div className="category-icon">{cat.icon}</div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{cat.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{cat.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Popular Articles */}
            <section className="popular-articles bg-gray-50/50">
                <div className="max-w-7xl mx-auto py-20 px-6">
                    <h2 className="text-3xl font-bold mb-10 text-gray-900 flex items-center gap-3">
                        <FaRocket className="text-[#ffcb05] text-2xl" /> 
                        Popular <span className="text-[#ffcb05]">Articles</span>
                    </h2>
                    <div className="article-list">
                        {popularArticles.map((article, i) => (
                            <a key={i} href="#" className="article-link">
                                <span className="text-gray-700 font-medium">{article}</span>
                                <FaChevronRight className="text-[#ffcb05]" />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Tutorials Section */}
            <section className="video-section">
                <h2 className="text-3xl font-bold mb-10 text-gray-900">Video <span className="text-[#ffcb05]">Tutorials</span></h2>
                <div className="video-grid">
                    {videoTutorials.map((video, i) => (
                        <div key={i} className="video-card">
                            <div className="video-thumbnail">
                                <FaPlayCircle className="play-icon" />
                                <span className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">{video.length}</span>
                            </div>
                            <div className="p-5">
                                <h4 className="font-bold text-lg mb-2">{video.title}</h4>
                                <p className="text-gray-500 text-sm">Learn the best practices in this short guide.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked <span className="text-[#ffcb05]">Questions</span></h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="faq-item">
                            <button className="faq-question" onClick={() => toggleFaq(i)}>
                                {faq.q}
                                {activeFaq === i ? <IoIosArrowUp className="text-[#ffcb05]" /> : <IoIosArrowDown className="text-gray-400" />}
                            </button>
                            {activeFaq === i && (
                                <div className="faq-answer">
                                    <p>{faq.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Feedback Section */}
            <section className="text-center py-16 border-t border-gray-100 mb-10">
                <p className="text-gray-600 mb-6 font-medium text-lg">Was this page helpful?</p>
                <div className="flex justify-center gap-6">
                    <button 
                        onClick={() => setFeedback('up')}
                        className={`flex items-center gap-2 px-8 py-3 rounded-full border text-lg transition-all ${feedback === 'up' ? 'bg-[#ffcb05] border-[#ffcb05] scale-110 shadow-lg' : 'bg-white border-gray-200 hover:border-[#ffcb05]'}`}
                    >
                        <FaThumbsUp /> Yes
                    </button>
                    <button 
                        onClick={() => setFeedback('down')}
                        className={`flex items-center gap-2 px-8 py-3 rounded-full border text-lg transition-all ${feedback === 'down' ? 'bg-gray-100 border-gray-300 scale-90' : 'bg-white border-gray-200 hover:border-gray-400'}`}
                    >
                        <FaThumbsDown /> No
                    </button>
                </div>
                {feedback && <p className="mt-6 text-green-600 font-bold text-xl animate-bounce">Thanks for your feedback! 🚀</p>}
            </section>

            {/* Support Ticket Section */}
            <section className="bg-gray-50 py-24 px-6">
                <div className="ticket-form-section">
                    <div className="text-center mb-12">
                        <FaTicketAlt className="text-5xl text-[#ffcb05] mx-auto mb-6" />
                        <h2 className="text-4xl font-extrabold mb-4">Submit a <span className="text-[#ffcb05]">Support Ticket</span></h2>
                        <p className="text-gray-550 max-w-md mx-auto">Can't find what you're looking for? Open a ticket and we'll get back to you within 24 hours.</p>
                    </div>

                    {formStatus === 'success' ? (
                        <div className="text-center py-10">
                            <FaCheckCircle className="text-7xl text-green-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold">Ticket Submitted Successfully!</h3>
                            <p className="text-gray-500 mt-2">Checking your email for confirmation.</p>
                            <button onClick={() => setFormStatus(null)} className="mt-8 text-[#ffcb05] font-bold underline">Submit another ticket</button>
                        </div>
                    ) : (
                        <form className="ticket-form" onSubmit={handleFormSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Your Name" required />
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <select required>
                                <option value="">Select Priority</option>
                                <option value="low">Low - General Inquiry</option>
                                <option value="medium">Medium - Technical Issue</option>
                                <option value="high">High - Account Access / Billing</option>
                            </select>
                            <textarea rows="5" placeholder="Describe your issue in detail..." required></textarea>
                            <button type="submit" disabled={formStatus === 'sending'} className="w-full bg-[#ffcb05] py-4 rounded-xl font-bold text-xl hover:shadow-2xl transition-all disabled:opacity-50">
                                {formStatus === 'sending' ? 'Sending...' : 'Submit Ticket'}
                            </button>
                        </form>
                    )}
                </div>
            </section>

            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Instant <span className="text-[#ffcb05]">Connection</span></h2>
                    <p className="text-gray-500">Sometimes you just need to talk to a human.</p>
                </div>
                <div className="contact-grid">
                    <div className="contact-card">
                        <FaEnvelope className="text-4xl text-[#ffcb05] mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-gray-900">Email Support</h3>
                        <p className="text-gray-600 text-sm mb-6">Response time: &lt; 2 hours</p>
                        <a href="mailto:support@genz.com" className="contact-btn">Send Email</a>
                    </div>
                    <div className="contact-card">
                        <FaDiscord className="text-4xl text-[#ffcb05] mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-gray-900">Discord Community</h3>
                        <p className="text-gray-600 text-sm mb-6">Join 5,000+ developers</p>
                        <a href="#" className="contact-btn">Join Server</a>
                    </div>
                    <div className="contact-card">
                        <FaPhoneAlt className="text-4xl text-[#ffcb05] mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-gray-900">Priority Call</h3>
                        <p className="text-gray-600 text-sm mb-6">For premium members</p>
                        <a href="tel:+1234567890" className="contact-btn">Call Now</a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
