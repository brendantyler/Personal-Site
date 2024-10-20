function Header(props) {
    return (
        <header id="pageHeader" className="sticky" >
            <div className="header-items container flexbox">
                <h1 id="logo">BRENDAN GALMAN <span>FULLSTACK DEV</span></h1>
                <nav id="headerNav">
                    <ul>
                        <li><a className="btn btn-2" href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;