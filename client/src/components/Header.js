function Header(props) {
    return (
        <div>
            <header className="heading">
                <h1>{props.title}</h1>
                <h2>{props.children}</h2>
            </header>
        </div>
    );
}

export default Header;