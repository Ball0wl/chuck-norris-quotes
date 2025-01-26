import { useEffect, useState } from 'react';
import Header from '../src/components/Header';
import Content from '../src/components/Content';
import Footer from '../src/components/Footer';
import Styles from "../styles/globals.css";

const App = () => {
    const [visitorCount, setVisitorCount] = useState(0);
    const [quote, setQuote] = useState('');


    // Erhöhe Besucheranzahl und Speicher Variable
    useEffect(() => {
        // Abrufen des Zählerwerts aus localStorage
        const count = parseInt(localStorage.getItem('visitorCount'), 10) || 0;
        console.log('Current visitor count from localStorage:', count);

        // Hochzählen und Speichern
        const updatedCount = count + 1;
        localStorage.setItem('visitorCount', updatedCount);
        console.log('Updated visitor count:', updatedCount);

        // Zustand aktualisieren
        setVisitorCount(updatedCount);
    }, []);

    // Zieh ein zufälliges Chuck Norris Zitat aus der Kategorie dev
    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random?category=dev')
            .then(response => response.json())
            .then(data => setQuote(data.value))
            .catch(error => console.error('Error fetching quote:', error));
    }, []);

    const fetchQuote = async () => {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random?category=dev');
            const data = await response.json();
            setQuote(data.value);
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };

    // Function to reload the quote
    const onReloadQuote = () => {
        fetchQuote();
    };

    // Fetch a quote when the component mounts
    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
                <Content quote={quote} onReloadQuote={onReloadQuote} />
            <Footer visitorCount={visitorCount} />

        </div>
    );

};


export default App;