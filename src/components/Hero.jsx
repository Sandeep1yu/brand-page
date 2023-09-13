import React from 'react'

const HeroSection = () => {
  return (
    <main className='hero container'>
        <div className='hero_content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora assumenda voluptas tenetur ducimus corrupti debitis illo molestiae cupiditate placeat ipsa!</p>
        <div className="hero_btn">
            <button>Shop Now</button>
            <button className='secondry_btn'>Category</button>
        </div>
        <div className="shopping">
            <p>Also available on</p>
        </div>
        <div className="brand_icons">
            <img src="https://clipartcraft.com/images/amazon-logo-transparent-background-3.png" alt="Amazon-logo" />

            <img src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-transparent-png-download-0.png" alt="Flipkart-logo" />
            
        </div>
        </div>
        
        <div className='hero_image'>
            <img src="https://pngimg.com/uploads/running_shoes/running_shoes_PNG5823.png" alt="Shoes-image" />
        </div>
    </main>
  )
}

export default HeroSection;