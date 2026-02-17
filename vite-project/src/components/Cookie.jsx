import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";

const Cookie = () => {
    return (
        <div>
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                declineButtonText="Reject"
                enableDeclineButton={true}
                cookieName="myAppCookieConsent"
                style={{ background: "#2B373B"}}
                buttonStyle={{ background: "#4CAF50", color: "white", borderRadius: "10px" }}
                declineButtonStyle={{ background: "#f44336", color: "white", borderRadius: "10px" }}
                
                onAccept={() => {
                    console.log("Consent accepted!");
                }}
                
                onDecline={() => {
                    console.log("Consent rejected!");
                }}
                expires={0.000694}
                debug={true} // Add this to force show the banner
            >
                This website uses cookies to enhance the user experience.{" "}
                <span style={{ fontSize: "16px" }}>By clicking "Accept", you consent to use of all cookies. You can read our private policy{" "} 
                    <Link 
                        to="/privacy-policy" 
                        style={{ color: "#4CAF50", textDecoration: "underline" }}
                    >
                        here.
                    </Link>
                </span>
            </CookieConsent>
        </div>
    );
};

export default Cookie;