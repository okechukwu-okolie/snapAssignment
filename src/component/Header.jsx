function Header(){
    return(
        <div className="header">
            <div className="headerTitleFlex">
                <h1>snap</h1>
                <ul>
                    <li>Features</li>
                    <li>Company</li>
                    <li>Career</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="headerLoginFlex">
                <h2>Login</h2>
                <button>Register</button>
            </div>
        </div>
    );
}

export default Header