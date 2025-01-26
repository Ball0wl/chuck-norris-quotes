import React from 'react';

const Content = ({ quote, onReloadQuote }) => {
    return (
        <main className="content-container">
            <div className="content-image-wrapper">
                <img src="/image/chuck.png"
                     alt="a picture of chuck norris sending you a brofist"/>
            </div>

            <div className="content-quote-wrapper">
                <h2 className="content-quote-title">Random Chuck Norris quote</h2>
                <p className="content-quote-text">{quote || 'loading...'}</p>
                <button className="content-quote-button"
                    onClick={onReloadQuote}>
                    Reload Quote
                </button>
            </div>
        </main>
    );
};

export default Content;