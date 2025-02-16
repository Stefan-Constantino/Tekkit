import React from "react";
import SocialMediaIcons from "./Links";

function Footer() {
    return (
        <footer className="py-4 mt-auto">
            <div className="container mx-auto text-center">
                <p>&copy; 2025 Tekk-It. All rights reserved.</p>
                <SocialMediaIcons />
            </div>
        </footer>
    );
}

export default Footer;
