import '../styles/Header.css';

const styles = {
    headerStyle: {
        background: 'pink',
    },
    headingStyle: {
        fontSize: '100px',
    },
};

// JSX curly braces used to evaluate the style object

function Header() {
    return (
        <header style={styles.headerStyle} className="header">
            <h1 style={styles.headingStyle}>Welcome</h1>
        </header>
    );
}

export default Header;
