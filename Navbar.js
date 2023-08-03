import React,{useState} from 'react'
import './navbar.css'


function Navbar() {
  
  function navigateToPage(event, path) {
    event.preventDefault();
    window.location.href = path;
  }
  return (
    <div>
        <nav class="navbar bg-body-primary bg-white" id="nav1">
  <div class="container-fluid bg-white text-dark">
    <a class="navbar-brand text-danger my-100" id="meesho" onClick={(e) => navigateToPage(e, '/')}><h1>meesho</h1></a>
    <form class="d-flex h-50" role="search">
      <input class="form-control me-2 bg-secondary h-100 " type="search" placeholder="Try saree,kurti or search" aria-label="Search" />
      <button class="btn btn-outline-success bg-warning  my-10" type="submit" id="search">Search</button>
    </form>
  </div>
</nav><hr />
        <nav class="navbar navbar-expand-lg bg-body-primary">
  <div class="container-fluid bg-white">
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item text-dark ">
        <a href="/women-ethnic" className="nav-link active text-dark" aria-current="page"
                  onClick={(e) => navigateToPage(e, '/women')} > Women Ethnic</a>      
        </li>

        <li class="nav-item">
          <a class="nav-link active text-dark" href="./Women-Western" onClick={(e) => navigateToPage(e, '/western')}>Women Western</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="./Men" onClick={(e) => navigateToPage(e, '/men')}>Men</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="./Kids" onClick={(e) => navigateToPage(e, '/kids')}>Kids</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="./homekitchen" onClick={(e) => navigateToPage(e, '/hk')}>Home&Kitchen</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="./beautyhealth" onClick={(e) => navigateToPage(e, '/bh')}>Beauty&Health</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="./jewelley" onClick={(e) => navigateToPage(e, '/ja')}>Jewellery&Accessories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="./bags" onClick={(e) => navigateToPage(e, '/bf')}>Bags&Footwear</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link text-dark" href="./cart" onClick={(e) => navigateToPage(e, '/c')}>Cart</a>
        </li> */}
      </ul>
    </div>
  </div>
  
</nav>
<hr/>
    </div>
  )
}

export default Navbar