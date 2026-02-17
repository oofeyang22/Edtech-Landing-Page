import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container" style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
            {/* Add back to home link */}
            <div style={{ marginBottom: '20px' }}>
                <Link 
                    to="/" 
                    style={{ 
                        color: "#4CAF50", 
                        textDecoration: "underline",
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px'
                    }}
                >
                    ← Back to Home
                </Link>
            </div>

            <h1 className="font-extrabold">Privacy Policy</h1>
            <p className="font-semibold mb-2">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
                <h2 className="font-extrabold">Introduction</h2>
                <p className="mb-2">Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information when you use our website.</p>
            </section>

            <section>
                <h2 className="font-extrabold">Cookies</h2>
                <p className="mb-2">We use cookies to enhance your browsing experience. Cookies are small text files that are stored on your device when you visit our website. They help us remember your preferences and understand how you use our site.</p>
            </section>

            <section>
                <h2 className="font-extrabold">Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc list-inside mb-2">
                    <li>Personal information you voluntarily provide (name, email, etc.)</li>
                    <li>Usage data through cookies and similar technologies</li>
                    <li>Device information and browser type</li>
                </ul>
            </section>

            <section>
                <h2 className="font-extrabold">How We Use Your Information</h2>
                <p>We use the collected information to:</p>
                <ul className="list-disc list-inside mb-2">
                    <li>Provide and maintain our services</li>
                    <li>Improve user experience</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Communicate with you about updates and offers</li>
                </ul>
            </section>

            <section>
                <h2 className="font-extrabold">Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at: privacy@example.com</p>
            </section>

            {/* Optional: Add a button at the bottom */}
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
                <Link 
                    to="/" 
                    style={{ 
                        backgroundColor: "#4CAF50",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        textDecoration: "none",
                        display: 'inline-block'
                    }}
                >
                    Return to Homepage
                </Link>
            </div>
        </div>
    );
};

export default PrivacyPolicy;