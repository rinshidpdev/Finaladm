
import React, { useState } from 'react';
import cl1 from '../../assets/cl1.png'
import cl2 from '../../assets/cl2.png'
import cl3 from '../../assets/cl3.png'
import cl4 from '../../assets/cl4.png'
import cl5 from '../../assets/cl5.png'
import cl6 from '../../assets/cl6.jpg'
import cl7 from '../../assets/cl7.jpg'
import f1 from '../../assets/f1.jpg'
import fashion1 from '../../assets/beauty1.jpg'
import fashion2 from '../../assets/beauty2.jpg'
import fashion3 from '../../assets/beauty3.jpg'
import fashion4 from '../../assets/beauty4.jpg'
import fashion5 from '../../assets/beauty5.jpg'

import food1 from '../../assets/food1.jpg'
import food2 from '../../assets/food2.jpg'
import food3 from '../../assets/food3.jpg'
import food4 from '../../assets/food4.jpg'
import food5 from '../../assets/food5.jpg'
import food6 from '../../assets/food6.jpg'
import food7 from '../../assets/food7.jpg'
import health1 from '../../assets/health1.jpg'
import health2 from '../../assets/health2.jpg'
import health3 from '../../assets/health3.jpg'
import health4 from '../../assets/health4.jpg'
import health5 from '../../assets/health5.jpg'

import curtain1 from '../../assets/curtain1.jpg'
import curtain2 from '../../assets/curtain2.jpg'
import curtain3 from '../../assets/curtain3.jpg'
import curtain5 from '../../assets/curtain5.jpg'

import opticals1 from '../../assets/opticals1.jpg'
import opticals2 from '../../assets/opticals2.jpg'
import opticals3 from '../../assets/opticals3.jpg'

import education1 from '../../assets/education1.jpg'
import education2 from '../../assets/education2.jpg'
import education3 from '../../assets/education3.jpg'
import education4 from '../../assets/education4.jpg'
import education5 from '../../assets/education5.jpg'
import education6 from '../../assets/education6.jpg'

import cargo1 from '../../assets/cargo1.jpg'
import cargo2 from '../../assets/cargo2.jpg'
import cargo3 from '../../assets/cargo3.png'
import cargo4 from '../../assets/cargo4.jpg'
import cargo5 from '../../assets/cargo5.jpg'

import estate1 from '../../assets/est1.jpeg'
import estate2 from '../../assets/est2.jpeg'
import estate3 from '../../assets/est3.jpeg'
import estate4 from '../../assets/est4.jpeg'

const WorkDetails = () => {
  const [activeCategory, setActiveCategory] = useState('Featured');
  
  // Sample data for companies
 const companies = [
    { id: 1, name: 'Petronas', category: 'Featured', imageUrl: cl1, link: '#' },
    { id: 2, name: 'Company', category: 'Technology', imageUrl: '/api/placeholder/600/450', link: '#' },
    { id: 3, name: 'Easy Life', category: 'Featured', imageUrl: cl2, link: '#' },
    { id: 4, name: 'Layerz', category: 'Food & Beverage', imageUrl: f1, link: '#' },
    { id: 5, name: 'Layerz', category: 'Food & Beverage', imageUrl: food1, link: '#' },
    { id: 6, name: 'Layerz', category: 'Food & Beverage', imageUrl: food2, link: '#' },
    { id: 7, name: 'Layerz', category: 'Food & Beverage', imageUrl: food3, link: '#' },
    { id: 8, name: 'Layerz', category: 'Food & Beverage', imageUrl: food4, link: '#' },
    { id: 9, name: 'Layerz', category: 'Food & Beverage', imageUrl: food5, link: '#' },
    { id: 10, name: 'Layerz', category: 'Food & Beverage', imageUrl: food6, link: '#' },
    { id: 11, name: 'Layerz', category: 'Food & Beverage', imageUrl: food7, link: '#' },
    { id: 12, name: 'Flipz', category: 'Food & Beverage', imageUrl: '', link: '#' },
    { id: 13, name: 'Chikkala', category: 'Packaging', imageUrl: '', link: '#' },
    { id: 14, name: 'Strom', category: 'Featured', imageUrl: cl3, link: '#' },
    { id: 15, name: 'Travel Co', category: 'Travel & Leisure', imageUrl: '/api/placeholder/600/450', link: '#' },
    { id: 16, name: 'Corp Inc', category: 'Corporate', imageUrl: '/api/placeholder/600/450', link: '#' },
    { id: 17, name: 'Fashion', category: 'Fashion & Beauty', imageUrl: fashion1, link: '#' },
    { id: 18, name: 'Fashion', category: 'Fashion & Beauty', imageUrl: fashion2, link: '#' },
    { id: 19, name: 'Fashion', category: 'Fashion & Beauty', imageUrl: fashion3, link: '#' },
    { id: 20, name: 'Fashion', category: 'Fashion & Beauty', imageUrl: fashion4, link: '#' },
    { id: 21, name: 'Fashion', category: 'Fashion & Beauty', imageUrl: fashion5, link: '#' },
    { id: 22, name: 'Rock Petrolium', category: 'Featured', imageUrl: cl4, link: '#' },
    { id: 23, name: 'DART', category: 'Featured', imageUrl: cl5, link: '#' },
    { id: 24, name: 'Museum of Candy', category: 'Featured', imageUrl: cl6, link: '#' },
    { id: 25, name: 'Mirfa', category: 'Featured', imageUrl: cl7, link: '#' },
    { id: 26, name: 'The Health Bank', category: 'Group', imageUrl: 'https://www.moonbox.ae/wp-content/uploads/2023/02/THB_COVER.png', link: '#' },
    { id: 27, name: 'Mahalo Ukulele Festival', category: 'Events & Sports', imageUrl: 'https://www.moonbox.ae/wp-content/uploads/2023/09/Mahalo_cover.jpg', link: '#' },
    { id: 28, name: '', category: 'Health', imageUrl:health1 , link: '#' },
    { id: 29, name: '', category: 'Health', imageUrl:health2 , link: '#' },
    { id: 30, name: '', category: 'Health', imageUrl:health3 , link: '#' },
    { id: 31, name: '', category: 'Health', imageUrl:health4 , link: '#' },
    { id: 32, name: '', category: 'Health', imageUrl:health5 , link: '#' },

    { id: 33, name: '', category: 'Home & Decor', imageUrl:curtain1 , link: '#' },
    { id: 34, name: '', category: 'Home & Decor', imageUrl:curtain2 , link: '#' },
    { id: 35, name: '', category: 'Home & Decor', imageUrl:curtain3 , link: '#' },
    { id: 36, name: '', category: 'Home & Decor', imageUrl:curtain5 , link: '#' },

    { id: 37, name: '', category: 'Optical & Eyewear', imageUrl:opticals1 , link: '#' },
    { id: 38, name: '', category: 'Optical & Eyewear', imageUrl:opticals2 , link: '#' },
    { id: 39, name: '', category: 'Optical & Eyewear', imageUrl:opticals3 , link: '#' },

    { id: 40, name: '', category: 'Education', imageUrl:education1 , link: '#' },
    { id: 41, name: '', category: 'Education', imageUrl:education2 , link: '#' },
    { id: 43, name: '', category: 'Education', imageUrl:education3 , link: '#' },
    { id: 44, name: '', category: 'Education', imageUrl:education4 , link: '#' },
    { id: 45, name: '', category: 'Education', imageUrl:education5 , link: '#' },
    { id: 46, name: '', category: 'Education', imageUrl:education6 , link: '#' },

    { id: 47, name: '', category: 'Corporate', imageUrl:cargo1 , link: '#' },
    { id: 48, name: '', category: 'Corporate', imageUrl:cargo2 , link: '#' },
    { id: 49, name: '', category: 'Corporate', imageUrl:cargo3 , link: '#' },
    { id: 50, name: '', category: 'Corporate', imageUrl:cargo4 , link: '#' },
    { id: 51, name: '', category: 'Corporate', imageUrl:cargo5 , link: '#' },

    { id: 52, name: '', category: 'Property & Real Estate', imageUrl:estate1, link: '#' },
    { id: 53, name: '', category: 'Property & Real Estate', imageUrl:estate2, link: '#' },
    { id: 54, name: '', category: 'Property & Real Estate', imageUrl:estate3, link: '#' },
    { id: 55, name: '', category: 'Property & Real Estate', imageUrl:estate4, link: '#' },


    
  ];
  // Categories for the filter buttons
  const categories = [
    'Featured', 'Food & Beverage', 'Packaging',  'Events & Sports',
    'Industrial', 'Travel & Leisure', 'Corporate', 'Fashion & Beauty','Home & Decor','Optical & Eyewear', 'Health', 'Financial',
    'Property & Real Estate', 'Education'
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

export default WorkDetails;