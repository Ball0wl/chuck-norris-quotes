export default function Footer({ visitorCount }) {
    return (
        <footer className="footer-container">
            <p className="footer-text">Visitor count: {visitorCount}</p>
        </footer>
    );
}