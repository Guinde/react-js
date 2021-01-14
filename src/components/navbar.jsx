
const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between bg-danger" 
             style={{height: "8vh"}}>
            <span className="navbar-brand text-white">Super</span>
            <div>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
        </div>
       </nav>
    )
}

export default Navbar;