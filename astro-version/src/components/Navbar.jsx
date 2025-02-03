const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <a href="/" className="navbar-item" title="Logo">
          Home
        </a>
      </div>
      <div className="navbar-start">
        <a className="navbar-item" href="/about-us">
          About Us
        </a>
        <a className="navbar-item" href="/membership">
          Membership
        </a>
         <a className="navbar-item" href="/meetings">
          Meetings
        </a>
          <a className="navbar-item" href="/library">
          Library
        </a>
          <a className="navbar-item" href="/workshops">
          Workshops
        </a>
          <a className="navbar-item" href="/exhibits">
          Exhibits
        </a>
          <a className="navbar-item" href="/resources">
          Resources
        </a>
          <a className="navbar-item" href="/links">
          Links
        </a>
          <a className="navbar-item" href="mailto:gvcalligraphy@gmail.com">
          Contact Us
        </a>
      </div>
      <div className="navbar-end"></div>
    </div>
  </nav>
)

export default Navbar
