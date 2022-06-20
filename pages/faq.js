import React from 'react';
import Header from "../component/header";
import './CSS/faq.css'

const faq = () => {
    return (
        <div>
            <Header />
            <div className="faq">
                <h1>faq</h1>
                <div className="faqQuestion">
                    <h2>Les jouets sont-ils chinois ?</h2>
                    <p>Oui</p>
                </div>
                <div className="faqQuestion">
                    <h2>Les jouets sont-ils respectueux de l'environnement ?</h2>
                    <p>Non</p>
                </div>
                <div className="faqQuestion">
                    <h2>Vendez-vous des couches ?</h2>
                    <p>Non</p>
                </div>
            </div>
        </div>
    );
};

export default faq;