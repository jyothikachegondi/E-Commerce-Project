import React from 'react'
import './ecom.css'
function Ecom1() {
  function navigateToPage(event, path) {
    event.preventDefault();
    window.location.href = path;
  }
  return (
    <div>
        <hr class="hr-text" data-content="Top categories to choose from"/>
        {/* <h1>Top categories to choose from</h1> */}
        <div id="fashion">
          <br/>
            <div id="text">
              <h1><b Style="font-size:50px;margin-left:-100px;">Be fashion forward</b></h1>
            </div>
            <div id="wstore"  onClick={(e) => navigateToPage(e, '/ws')}>
                <img src="https://images.meesho.com/images/marketing/1678691686252_400.webp" />
            </div>
            <div id="mstore" onClick={(e) => navigateToPage(e, '/ms')}>
                <img src="https://images.meesho.com/images/marketing/1678691699680_300.webp" />
            </div>
            <div id="kstore" onClick={(e) => navigateToPage(e, '/ks')}>
                <img src="https://images.meesho.com/images/marketing/1678691712594_300.webp" />
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div id="decoration">
          <br/>
           <div id="ess">
            <h1><b Style="font-size:50px;">Essentials</b></h1>
            <a href="https://www.meesho.com/essentials/pl/9ol"><button Style="background-color:violet;width:100px;height:50px;border-radius:20px">View All</button></a>
          </div>
          <div id="hdecor" onClick={(e) => navigateToPage(e, '/hd')}>
            <img src="https://images.meesho.com/images/marketing/1678691846068_200.webp" />
            
            </div>
          <div id="kapp">
           <a href="https://www.meesho.com/kitchen-accessories/pl/1i3z" ><img src="https://images.meesho.com/images/marketing/1678691832099_200.webp" /></a>
          </div>
          <div id="hcare">
           <a href="https://www.meesho.com/skincare/pl/5kw"> <img src="https://images.meesho.com/images/marketing/1678691796046_200.webp" /></a>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div id="newstyles">
          <br/>
          <div id="n1">
          <h1><b Style="font-size:50px;">NewStyles</b></h1>
         <a href="https://www.meesho.com/electronics/pl/45g"> <button id="b1" Style="background-color:violet;width:100px;height:50px;border-radius:20px">View All</button></a>
          </div>
        <div id="acce">
            <a href="https://www.meesho.com/accessories/pl/1k5q"><img src="https://images.meesho.com/images/marketing/1678691960553_200.webp" /></a>
            </div>
          <div id="foot">
            <a href="https://www.meesho.com/footwear/pl/3yb"><img src="https://images.meesho.com/images/marketing/1678691936892_200.webp" /></a>
          </div>
          <div id="elec">
            <a href="https://www.meesho.com/electronics/pl/45g"><img src="https://images.meesho.com/images/marketing/1678691925419_200.webp" /></a>
          </div>
        </div>
        <br/>
        <br/>
        <div>
        <h2>Products For You</h2>
         <div id="row1">
    <div id="img1">
    <img id="img" src="https://images.meesho.com/images/products/42182017/gtwro_400.webp" />
    <h3 id="name">Fancy Latest Women shirts</h3>
   <p id="cost"><b>₹268</b> onwards</p>
   <p id="delivery">Free Delivery </p>
   <p id="rating" Style="background-color:green; color : white;"> 3.9☆  81 Reviews</p>
   </div>
   <div id="img2">
   <img id="img" src="https://images.meesho.com/images/products/116954068/xhph2_400.webp" />
   <h3 id="name">Comfy Modern Men shirts</h3>
   <p id="cost"><b>₹266</b> onwards</p>
   <p id="delivery">Free Delivery </p>
   <p id="rating"  Style="background-color:green; color : white;">3.6☆  2665 Reviews</p>
   </div>
   <div id="img3">
   <img id="img" src="https://images.meesho.com/images/products/39795667/iu6p4_512.webp" />
   <h3 id="name">Trendy women silver watch</h3>
   <p id="cost"><b>₹68</b> onwards</p>
   <p id="delivery">Free Delivery</p>
   <p id="rating"  Style="background-color:green; color : white;">3.9☆ 87 Reviews</p>
   </div>
   <div id="img4">
   <img id="img" src="https://images.meesho.com/images/products/147541464/xdiot_400.webp" /> 
   <h3 id="name">essential Fridge Cover</h3>
   <p id="cost"><b>₹129</b> onwards</p>
   <p id="delivery">Free Delivery</p>
   <p id="rating"  Style="background-color:orange; color : white;">3.2☆ 4151 Reviews</p>
     </div>
     </div>
<div>
     <div id="row1">
    <div id="img1">
    <img id="img" src="https://images.meesho.com/images/products/59578636/7to43_400.webp" />
    <h3 id="name">Bluetooth Headphones</h3>
   <p id="cost"><b>₹245</b> onwards</p>
   <p id="delivery">Delivery ₹90</p>
   <p id="rating" Style="background-color:green; color : white;"> 3.8☆  81 Reviews</p>
   </div>
   <div id="img2">
   <img id="img" src="https://images.meesho.com/images/products/21005838/yd1tm_400.webp" />
   <h3 id="name">Designer Clothes Covers</h3>
   <p id="cost"><b>₹154</b> onwards</p>
   <p id="delivery">Free Delivery </p>
   <p id="rating"  Style="background-color:#013220; color : white;">4.0☆  2665 Reviews</p>
   </div>
   <div id="img3">
   <img id="img" src="https://images.meesho.com/images/products/20393758/htrro_400.webp" />
   <h3 id="name">Aakarsha Ensemble Kurtis</h3>
   <p id="cost"><b>₹309</b> onwards</p>
   <p id="delivery">Free Delivery</p>
   <p id="rating"  Style="background-color:#013220; color : white;">4.0☆ 87 Reviews</p>
   </div>
   <div id="img4">
   <img id="img" src="https://images.meesho.com/images/products/25515256/a6300_400.webp" /> 
   <h3 id="name">Graceful Wall clocks</h3>
   <p id="cost"><b>₹149</b> onwards</p>
   <p id="delivery">Delivery ₹77</p>
   <p id="rating"  Style="background-color:#013220; color : white;">4.0☆ 4151 Reviews</p>
     </div>
     </div>

     <div id="row1">
    <div id="img1">
    <img id="img" src="https://images.meesho.com/images/products/146593451/jpqbv_400.webp" />
    <h3 id="name">Kurti</h3>
   <p id="cost"><b>₹199</b> onwards</p>
   <p id="delivery">Delivery ₹77</p>
   <p id="rating" Style="background-color:#013220; color : white;"> 4.0☆  81 Reviews</p>
   </div>
   <div id="img2">
   <img id="img" src="https://images.meesho.com/images/products/311454431/ovoyn_400.webp" />
   <h3 id="name">Classy Bed Skirts</h3>
   <p id="cost"><b>₹366</b> onwards</p>
   <p id="delivery">Free Delivery </p>
   <p id="rating"  Style="background-color:#013220; color : white;">4.1☆  2665 Reviews</p>
   </div>
   <div id="img3">
   <img id="img" src="https://images.meesho.com/images/products/60856199/appvl_400.webp" />
   <h3 id="name">Lycra Lace border saree</h3>
   <p id="cost"><b>₹317</b> onwards</p>
   <p id="delivery">Free Delivery</p>
   <p id="rating"  Style="background-color:green; color : white;">3.7☆ 87 Reviews</p>
   </div>
   <div id="img4">
   <img id="img" src="https://images.meesho.com/images/products/156387711/dguki_512.webp" /> 
   <h3 id="name">Unique Fabulous Women Flipflops </h3>
   <p id="cost"><b>₹291</b> onwards</p>
   <p id="delivery">Free Delivery</p>
   <p id="rating"  Style="background-color:#013220; color : white;">4.1☆ 4151 Reviews</p>
     </div>
     </div>
    </div> 
    </div>
        </div>
    
  )
}

export default Ecom1