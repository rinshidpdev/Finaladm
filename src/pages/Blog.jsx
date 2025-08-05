import React, { useState } from 'react';
import blog1 from '../assets/blog1.png'

const BlogPosts = () => {
  const [showMore, setShowMore] = useState(false);
  
  // Blog post data
  const initialPosts = [
    {
      id: 1,
      image: blog1,
      date: "Feb 25, 2025",
      title: "Why Businesses Need Creative Advertising Agencies for Digital Growth",
      excerpt: "Check out the blog to understand how creative advertising agencies play a crucial role in digital growth by crafting compelling brand narratives, engaging content, and innovative campaigns that capture audience attention."
    },
    {
      id: 2,
      image: blog1,
      date: "Feb 18, 2025",
      title: "Web Design Service: Development & Rebranding - A Complete Guide",
      excerpt: "Revamping your website is essential for businesses today to enhance functionality and stay competitive in the market. Explore the key factors that influence website redesign costs and make informed decisions for your digital transformation."
    }
  ];
  
  const morePosts = [
    {
      id: 3,
      image: blog1,
      date: "Feb 10, 2025",
      title: "Social Media Marketing Trends to Watch in 2025",
      excerpt: "Stay ahead of the curve with the latest social media marketing strategies that are reshaping how brands connect with their audience. Learn about emerging platforms and techniques to boost your online presence."
    },
    {
      id: 4,
      image: blog1,
      date: "Feb 5, 2025",
      title: "Brand Identity Design: Creating Memorable Visual Experiences",
      excerpt: "Discover how effective brand identity design can set your business apart from competitors and create lasting impressions. Explore the essential elements of visual branding that resonate with your target audience."
    },
    {
      id: 5,
      image: blog1,
      date: "Jan 28, 2025",
      title: "Content Marketing Strategies for B2B Companies",
      excerpt: "Learn how B2B companies can leverage content marketing to generate qualified leads and establish thought leadership in their industry. Find practical tips for creating valuable content that converts."
    }
  ];
  
  const handleLoadMore = () => {
    setShowMore(true);
  };
  
  return (
    <div className="blog-container">
      <div className="blog-grid">
        {/* Initial Posts */}
        {initialPosts.map(post => (
          <div key={post.id} className="blog-post">
            <div className="blog-image-container">
              <img 
                src={post.image} 
                alt={post.title} 
                className="blog-image"
              />
            </div>
            <div className="blog-content">
              <div className="blog-date">{post.date}</div>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
            </div>
          </div>
        ))}
        
        {/* More Posts (shown after button click) */}
        {showMore && morePosts.map(post => (
          <div key={post.id} className="blog-post">
            <div className="blog-image-container">
              <img 
                src={post.image} 
                alt={post.title} 
                className="blog-image"
              />
            </div>
            <div className="blog-content">
              <div className="blog-date">{post.date}</div>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Load More Button */}
      {!showMore && (
        <div className="load-more-container">
          <button className="load-more-button" onClick={handleLoadMore}>
            ...
          </button>
        </div>
      )}
    </div>
  );
};

// CSS for the component

const styles = `
 body {
  margin: 0;
  padding: 0;
  background-color: #000;
}
.blog-container {
  max-width: 1350px;
  margin: 0 auto;
  padding: 20px;
   min-height: 150vh !important;
   
  font-family: Arial, sans-serif;
}

.blog-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 40px;
  
}

.blog-post {
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: #fff;
  overflow: hidden;
  border: .5px solid #fff;
   height: 700px; /* Increased height */
  transition: all 0.3s ease;
}

.blog-image-container {
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.blog-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

.blog-post:hover .blog-image {
  transform: scale(1.05);
}

.blog-content {
  padding: 50px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  transition: all 0.3s ease;
}

/* White background on hover effect */
.blog-post:hover .blog-content {
  background-color: #fff;
  color: #000;
}

.blog-post:hover .blog-excerpt {
  color: #555;
}

.blog-date {
  color: #999;
  font-size: 14px;
  margin-bottom: 15px;
  transition: color 0.3s ease;
}

.blog-post:hover .blog-date {
  color: #666;
}

.blog-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
  line-height: 1.2;
}

.blog-excerpt {
  color: #999;
  font-size: 16px;
  line-height: 1.6;
  transition: color 0.3s ease;
}

.load-more-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 40px;
   border: 2px solid #fffff;
}

.load-more-button {
  background-color: #000;
  color: #fff;
  border: 2px solid #333;
  padding: 12px 50px;
  font-size: 20px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.load-more-button:hover {
  background-color: #333;
}
/* Responsive styles - FIXED FOR MOBILE */
@media screen and (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .blog-post {
    height: auto;
    min-height: 650px;
    margin-bottom: 20px;
  }
  
  .blog-image-container {
    height: 300px;
    display: block;
    width: 100%;
  }
  
  .blog-image {
    display: block;
    width: 100%;
    height: 50%;
    
  }
  
  .blog-content {
    height: auto;
    min-height: 200px;
    padding: 20px;
  }
  
  .blog-title {
    font-size: 24px;
    margin-bottom: 15px;
  }
  
  .blog-excerpt {
    font-size: 15px;
    line-height: 1.6;
  }
  
  .load-more-button {
    padding: 12px 30px;
    font-size: 14px;
  }
}
`;

const StyleSheet = () => (
  <style dangerouslySetInnerHTML={{ __html: styles }} />
);

const BlogPostsWithLoadMore = () => (
  <>
    <StyleSheet />
    <BlogPosts />
  </>
);

export default BlogPostsWithLoadMore;