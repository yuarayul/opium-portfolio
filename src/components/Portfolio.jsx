import { useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Album Art",
      category: "design",
      image: "/src/assets/BIRRPOSTER5 copy.jpg",
      description: "Album cover art made for BrrrMusic",
      tools: ["Photoshop", "Illustrator"]
    },
    {
      id: 20,
      title: "Poster Design",
      category: "design",
      image: "/src/assets/skullposter.JPG",
      description: "Poster Design Done for the Catalogue",
      tools: ["Photoshop", "Illustrator"]
    },
    {
      id: 21,
      title: "Poster Design",
      category: "design",
      image: "/src/assets/broken1.jpg",
      description: "Poster Design Done for the Catalogue",
      tools: ["Photoshop", "Illustrator"]
    },
    {
      id: 2,
      title: "Poster Design",
      category: "design",
      image: "/src/assets/bien.jpg",
      description: "Poster Design Done for the Catalogue",
      tools: ["Photoshop", "Illustrator"]
    },
    {
      id: 3,
      title: "Poster Design",
      category: "design",
      image: "/src/assets/lilmainaposter.jpg",
      description: "Poster Design Done for the Catalogue",
      tools: ["Photoshop", "Illustrator"]
    },
    {
      id: 4,
      title: "Poster Design",
      category: "design",
      image: "/src/assets/shakurposter.jpg",
      description: "Poster Design Done for the Catalogue",
      tools: ["Photoshop", "Illustrator"]
    },
    {
      id: 5,
      title: "Poster Design",
      category: "design",
      image: "/src/assets/shakurposter2.jpg",
      description: "Poster Design Done for the Catalogue",
      tools: ["Photoshop", "Illustrator"]
    },
    {
      id: 6,
      title: "Poster Design",
      category: "design",
      image: "/src/assets/nujabesposter2.jpg",
      description: "Poster Design Done for the Catalogue",
      tools: ["Photoshop", "Illustrator"]
    },
    {
      id: 7,
      title: "Poster Design",
      category: "design",
      image: "/src/assets/kdotposter3 .jpg",
      description: "Poster Design Done for the Catalogue",
      tools: ["Photoshop", "Illustrator"]
    },
    {
      id: 9,
      title: "Poster Design",
      category: "design",
      image: "/src/assets/schitz1.jpg",
      description: "Poster Design Done for the Catalogue",
      tools: ["Photoshop", "Illustrator"]
    },
    {
      id: 10,
      title: "Poster Design",
      category: "design",
      image: "/src/assets/megposter .jpg",
      description: "Poster Design Done for the Catalogue",
      tools: ["Photoshop", "Illustrator"]
    },
    {
      id: 11,
      title: "Poster Design",
      category: "design",
      image: "/src/assets/playboicarti.jpg",
      description: "Poster Design Done for the Catalogue",
      tools: ["Photoshop", "Illustrator"]
    },
    {
      id: 12,
      title: "Poster Design",
      category: "design",
      image: "/src/assets/ronaldoposter.jpg",
      description: "Poster Design Done for the Catalogue",
      tools: ["Photoshop", "Illustrator"]
    },
    {
      id: 13,
      title: "Poster Design",
      category: "design",
      image: "/src/assets/nboposter.jpg",
      description: "Poster Design Done for the Catalogue",
      tools: ["Photoshop", "Illustrator"]
    },
    {
      id: 14,
      title: "Poster Design",
      category: "design",
      image: "/src/assets/sahposter .jpg",
      description: "Poster Design Done for the Catalogue",
      tools: ["Photoshop", "Illustrator"]
    },
    {
      id: 15,
      title: "Poster Design",
      category: "design",
      image: "/src/assets/shadowyposter.jpg",
      description: "Poster Design Done for the Catalogue",
      tools: ["Photoshop", "Illustrator"]
    },
    {
      id: 16,
      title: "Poster Design",
      category: "design",
      image: "/src/assets/specops.png",
      description: "Poster Design Done for the Catalogue",
      tools: ["Photoshop", "Illustrator"]
    },
    {
      id: 17,
      title: "Poster Design",
      category: "design",
      image: "/src/assets/babayegaposter.jpg",
      description: "Poster Design Done for the Catalogue",
      tools: ["Photoshop", "Illustrator"]
    },
   
    // Add more portfolio items here
  ];

 // State to toggle between 'design' and 'video'
 const [activeCategory, setActiveCategory] = useState('design');

 // Filter items based on the selected category
 const filteredItems = portfolioItems.filter(item => item.category === activeCategory);

 return (
   <div className="portfolio-container">
     <h1 id="products-heading">Portfolio Works</h1>
     
     {/* Toggle Buttons */}
     <div className="portfolio-toggle" style={{ textAlign: 'center', marginBottom: '20px' }}>
       <button
         className={`toggle-btn ${activeCategory === 'design' ? 'active' : ''}`}
         onClick={() => setActiveCategory('design')}
         style={{
           marginRight: '10px',
           padding: '8px 16px',
           background: activeCategory === 'design' ? 'var(--primary-color)' : 'transparent',
           border: '1px solid var(--primary-color)',
           color: activeCategory === 'design' ? '#fff' : 'var(--primary-color)',
           cursor: 'pointer'
         }}
       >
         Graphic Designs
       </button>
       <button
         className={`toggle-btn ${activeCategory === 'video' ? 'active' : ''}`}
         onClick={() => setActiveCategory('video')}
         style={{
           padding: '8px 16px',
           background: activeCategory === 'video' ? 'var(--primary-color)' : 'transparent',
           border: '1px solid var(--primary-color)',
           color: activeCategory === 'video' ? '#fff' : 'var(--primary-color)',
           cursor: 'pointer'
         }}
       >
         Video Edits
       </button>
     </div>

     {/* Portfolio Items */}
     <div className="product-list">
       {filteredItems.map((item) => (
         <div key={item.id} className="product-item">
           <Link to={`/project/${item.id}`}>
             <img src={item.image} alt={item.title} />
             <h2>{item.title}</h2>
             <p>{item.description}</p>
             <div className="tools">
               {item.tools.map(tool => (
                 <span key={tool} className="tool-tag">{tool}</span>
               ))}
             </div>
           </Link>
         </div>
       ))}
     </div>
   </div>
 );
};

export default Portfolio;