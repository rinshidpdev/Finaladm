
import React, { useState } from 'react';
import cl1 from '../assets/cl1.png'
import cl2 from '../assets/cl2.png'
import cl3 from '../assets/cl3.png'
import cl4 from '../assets/cl4.png'
import cl5 from '../assets/cl5.png'
import cl6 from '../assets/cl6.jpg'
import cl7 from '../assets/cl7.jpg'
import f1 from '../assets/f1.jpg'

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('Featured');
  
  // Sample data for companies
 const companies = [
    { id: 1, name: 'Petronas', category: 'Featured', imageUrl: cl1, link: '#' },
    { id: 2, name: 'Company', category: 'Technology', imageUrl: '/api/placeholder/600/450', link: '#' },
    { id: 3, name: 'Easy Life', category: 'Featured', imageUrl: cl2, link: '#' },
    { id: 4, name: 'Layerz', category: 'Food & Beverage', imageUrl: f1, link: '#' },
    { id: 14, name: 'Flipz', category: 'Food & Beverage', imageUrl: 'https://www.moonbox.ae/wp-content/uploads/2023/11/Flipz_cover.jpg', link: '#' },
    { id: 5, name: 'Chikkala', category: 'Packaging', imageUrl: 'https://www.moonbox.ae/wp-content/uploads/2023/09/Chickalala_cover.jpg', link: '#' },
    { id: 6, name: 'Strom', category: 'Featured', imageUrl: cl3, link: '#' },
    { id: 7, name: 'Travel Co', category: 'Travel & Leisure', imageUrl: '/api/placeholder/600/450', link: '#' },
    { id: 8, name: 'Corp Inc', category: 'Corporate', imageUrl: '/api/placeholder/600/450', link: '#' },
    { id: 9, name: 'Fashion', category: 'Fashion & Beauty', imageUrl: '/api/placeholder/600/450', link: '#' },
    { id: 10, name: 'Rock Petrolium', category: 'Featured', imageUrl: cl4, link: '#' },
    { id: 11, name: 'DART', category: 'Featured', imageUrl: cl5, link: '#' },
    { id: 12, name: 'Museum of Candy', category: 'Featured', imageUrl: cl6, link: '#' },
    { id: 13, name: 'Mirfa', category: 'Featured', imageUrl: cl7, link: '#' },
    { id: 15, name: 'The Health Bank', category: 'Group', imageUrl: 'https://www.moonbox.ae/wp-content/uploads/2023/02/THB_COVER.png', link: '#' },
    { id: 16, name: 'Mahalo Ukulele Festival', category: 'Events & Sports', imageUrl: 'https://www.moonbox.ae/wp-content/uploads/2023/09/Mahalo_cover.jpg', link: '#' },
  ];
  // Categories for the filter buttons
  const categories = [
    'Featured', 'Food & Beverage', 'Packaging', 'Group', 'Events & Sports',
    'Industrial', 'Travel & Leisure', 'Corporate', 'Fashion & Beauty', 'Health', 'Financial',
    'Technology', 'Property & Real Estate', 'Education'
  ];
  
  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };
  
  // Filter companies based on active category
  const filteredCompanies = companies.filter(company => company.category === activeCategory);
  
  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '100%',
      margin: '0 auto'
    }}>
      {/* CSS for responsive design */}
      <style>{`
        .category-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 40px;
        }
        
        .category-button {
          padding: 10px 16px;
          border: 1px solid #444;
          background-color: transparent;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
        }
        
        .category-button.active {
          background-color: #fff;
          color: #000;
        }
        
        .grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          width: 100%;
        }
        
        .card-container {
          position: relative;
          overflow: hidden;
          height: 450px;
          cursor: pointer;
        }
        
        .card-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 30px;
        }
        
        .company-name {
          font-size: 2.6rem;
          font-weight: bold;
          // margin: 0;
          margin-top: 270px;
        }
        
        .view-more {
          display: flex;
          align-items: center;
          font-size: 18px;
        }
        
        .arrow {
          margin-left: 8px;
        }
        
        .card-container:hover .card-overlay {
          opacity: 1;
        }
        
        .card-container:hover img {
          transform: scale(1.05);
        }
        
        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .grid-container {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .company-name {
            font-size: 2.5rem;
          }
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .grid-container {
            grid-template-columns: 1fr;
          }
          
          .card-container {
            height: 350px;
          }
          
          .company-name {
            font-size: 2rem;
            margin-top:140px;
          }
          
          .category-button {
            padding: 8px 12px;
            font-size: 12px;
          }
        }
        
        /* Small Mobile */
        @media (max-width: 480px) {
          .category-container {
            gap: 5px;
          }
          
          .category-button {
            padding: 6px 10px;
            font-size: 11px;
          }
          
          .card-container {
            height: 250px;
          }
          
          .card-overlay {
            padding: 15px;
          }
          
          .company-name {
            font-size: 1.5rem;
          }
          
          .view-more {
            font-size: 14px;
          }
        }
      `}</style>
      
      {/* Category Navigation */}
      <div className="category-container">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`category-button ${activeCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Company Cards Grid */}
      <div className="grid-container">
        {filteredCompanies.length > 0 ? (
          filteredCompanies.map((company) => (
            <div key={company.id} className="card-container">
              <img src={company.imageUrl} alt={company.name} />
              
              <div className="card-overlay">
                <h3 className="company-name">{company.name}</h3>
                <div className="view-more">
                  <span>View More</span>
                  <svg 
                    className="arrow"
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div style={{ gridColumn: 'span 3', textAlign: 'center', padding: '50px' }}>
            No companies found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;