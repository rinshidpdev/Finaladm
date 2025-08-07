import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blog1 from '../../assets/blog1.png';
import blogw1 from '../../assets/blogw1.jpg';
import blogw2 from '../../assets/d1.jpg';
import blogs1 from '../../assets/blogs1.jpg';
import blogs2 from '../../assets/blogSocial.jpg';
import blogc1 from '../../assets/content2.jpg';
import blogc2 from '../../assets/content1.jpg';
import brandbg from '../../assets/brandBG.jpg';
import brandbg2 from '../../assets/brandbg2.jpg';
import blogf from '../../assets/blogCreat.jpg';


const BlogM = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample blog data - you can replace this with your actual data source
  const blogPosts = {
    1: {
      id: 1,
      image: blogf,
      date: "Feb 25, 2025",
      readTime: "8 min read",
      category: "Digital Marketing",
      title: "Why Businesses Need Creative Advertising Agencies for Digital Growth",
      excerpt: "Check out the blog to understand how creative advertising agencies play a crucial role in digital growth by crafting compelling brand narratives, engaging content, and innovative campaigns that capture audience attention.",
      content: [
        {
          type: "paragraph",
          text: "In today's rapidly evolving digital landscape, businesses are constantly seeking innovative ways to stand out from the competition and connect with their target audience. Creative advertising agencies have emerged as essential partners in this journey, offering specialized expertise and fresh perspectives that can transform a brand's digital presence."
        },
        {
          type: "heading",
          text: "The Digital Revolution and Its Impact on Advertising"
        },
        {
          type: "paragraph",
          text: "The digital revolution has fundamentally changed how consumers interact with brands. Traditional advertising methods are no longer sufficient to capture attention in an oversaturated market. Creative advertising agencies understand these nuances and leverage cutting-edge technologies, data analytics, and creative storytelling to create campaigns that resonate with modern consumers."
        },
        {
          type: "image",
          src: blog1,
          alt: "Digital advertising strategy visualization"
        },
        {
          type: "heading",
          text: "Key Benefits of Partnering with Creative Agencies"
        },
        {
          type: "paragraph",
          text: "Creative advertising agencies bring several unique advantages to businesses looking to accelerate their digital growth:"
        },
        {
          type: "list",
          items: [
            "Strategic brand positioning and narrative development",
            "Multi-channel campaign coordination and execution",
            "Access to latest design trends and creative technologies",
            "Data-driven insights and performance optimization",
            "Cost-effective resource allocation and expertise"
          ]
        },
        {
          type: "paragraph",
          text: "These agencies don't just create advertisements; they craft comprehensive digital experiences that guide customers through every stage of the buyer's journey. From initial brand awareness to final conversion, creative agencies ensure consistency and impact across all touchpoints."
        },
        {
          type: "heading",
          text: "Innovative Approaches to Digital Campaigns"
        },
        {
          type: "paragraph",
          text: "Modern creative agencies employ various innovative approaches to maximize digital growth. Interactive content, personalized messaging, influencer collaborations, and immersive brand experiences are just a few of the strategies they use to engage audiences in meaningful ways."
        },
        {
          type: "paragraph",
          text: "By partnering with a creative advertising agency, businesses can focus on their core competencies while leaving the complex world of digital marketing to the experts. This collaboration often results in accelerated growth, improved brand recognition, and stronger customer relationships."
        }
      ],
      author: {
        name: "Marketing Expert",
        bio: "Digital marketing specialist with 10+ years of experience in creative advertising and brand strategy."
      }
    },
    2: {
      id: 2,
      image: blogw1,
      date: "Feb 18, 2025",
      readTime: "6 min read",
      category: "Web Development",
      title: "Web Design Service: Development & Rebranding - A Complete Guide",
      excerpt: "Revamping your website is essential for businesses today to enhance functionality and stay competitive in the market. Explore the key factors that influence website redesign costs and make informed decisions for your digital transformation.",
      content: [
        {
          type: "paragraph",
          text: "Website redesign and rebranding have become critical components of modern business strategy. As digital landscapes evolve and user expectations rise, companies must regularly evaluate and update their web presence to remain competitive and relevant."
        },
        {
          type: "heading",
          text: "Understanding the Need for Website Redesign"
        },
        {
          type: "paragraph",
          text: "Several factors indicate when your website needs a comprehensive redesign. These include outdated design elements, poor mobile responsiveness, slow loading times, declining search engine rankings, and changing business objectives or target audiences."
        },
        {
          type: "image",
          src: blogw2,
          alt: "Website redesign process illustration"
        },
        {
          type: "heading",
          text: "Key Elements of Successful Web Redesign"
        },
        {
          type: "list",
          items: [
            "User experience (UX) optimization and interface design",
            "Mobile-first responsive design implementation",
            "Search engine optimization (SEO) integration",
            "Content strategy and information architecture",
            "Performance optimization and loading speed enhancement"
          ]
        },
        
        {
          type: "paragraph",
          text: "A successful website redesign goes beyond aesthetic improvements. It involves strategic planning, thorough analysis of user behavior, and implementation of best practices in web development and digital marketing."
        }
      ],
      author: {
        name: "Web Development Team",
        bio: "Experienced web developers and designers specializing in modern web technologies and user experience design."
      }
    },

    // Add more blog posts as needed
    3:{
  id: 2,
  image: blogs1, // replace with your actual image import
  date: "Aug 7, 2025",
  readTime: "7 min read",
  category: "Social Media Marketing",
  title: "Social Media Marketing Trends to Watch in 2025",
  excerpt: "Explore the key social media trends shaping 2025 – from AI-driven personalization to micro-content strategies and immersive brand storytelling. Stay ahead of the curve with insights that matter.",
  content: [
    {
      type: "paragraph",
      text: "As we step into 2025, social media continues to evolve at a rapid pace, reshaping how brands interact with audiences online. Marketers must stay agile and updated with emerging trends to stay competitive and relevant in a crowded digital space."
    },
    {
      type: "heading",
      text: "1. AI-Powered Personalization"
    },
    {
      type: "paragraph",
      text: "Artificial intelligence is revolutionizing how content is delivered. Platforms like Instagram, TikTok, and LinkedIn are leveraging AI to offer hyper-personalized experiences. Brands are using AI tools to craft individualized content journeys, automate customer support, and optimize ad targeting in real-time."
    },
    {
      type: "heading",
      text: "2. Short-Form and Snackable Content"
    },
    {
      type: "paragraph",
      text: "Short-form videos remain dominant. With attention spans shrinking, platforms favor quick, impactful content. Brands that can tell their story in 15-30 seconds will thrive in formats like Instagram Reels, YouTube Shorts, and TikTok."
    },
    {
      type: "image",
      src: blogs2, // make sure to import or link to this image
      alt: "Short-form content dominating social platforms"
    },
    {
      type: "heading",
      text: "3. Social Commerce on the Rise"
    },
    {
      type: "paragraph",
      text: "Social commerce is expected to grow significantly in 2025, especially across platforms like Instagram, Facebook, and TikTok Shop. Users now expect to discover, evaluate, and purchase products without leaving the app, making seamless shopping integrations essential for eCommerce brands."
    },
    {
      type: "heading",
      text: "4. Authenticity Over Aesthetics"
    },
    {
      type: "paragraph",
      text: "The trend is shifting from highly curated feeds to raw, authentic content. Brands that show vulnerability, behind-the-scenes moments, and real customer stories build stronger connections and trust with their audience."
    },
    {
      type: "heading",
      text: "5. Influencer Collaborations Evolve"
    },
    {
      type: "paragraph",
      text: "Micro and nano influencers are gaining popularity due to higher engagement rates and community trust. In 2025, brands are expected to collaborate more with niche creators who can drive genuine conversations rather than just impressions."
    },
    {
      type: "paragraph",
      text: "Staying ahead in social media marketing requires adaptability, creativity, and data-driven decision making. The brands that embrace these evolving trends will be the ones that not only reach but resonate with their target audience."
    }
  ],
  author: {
    name: "Social Media Strategist",
    bio: "Experienced digital strategist specializing in social media trends, audience engagement, and brand storytelling."
  }
},

 // Add more blog posts as needed
 4:{
  id: 4,
  image: brandbg2, // replace with the correct image import
  date: "Aug 7, 2025",
  readTime: "6 min read",
  category: "Branding & Design",
  title: "Brand Identity Design: Creating Memorable Visual Experiences",
  excerpt: "Discover how effective brand identity design builds strong emotional connections with your audience. Learn the key elements that make visual branding unforgettable in today’s digital-first world.",
  content: [
    {
      type: "paragraph",
      text: "Brand identity design goes beyond just a logo or color scheme — it's about creating a cohesive and memorable visual experience that communicates a brand's values, tone, and personality. In 2025, where attention spans are short and competition is fierce, a strong visual identity is critical for standing out and staying relevant."
    },
    {
      type: "heading",
      text: "Understanding Brand Identity"
    },
    {
      type: "paragraph",
      text: "Brand identity includes everything visual that represents a brand — logos, typography, colors, graphics, packaging, and even how visuals are used across social media and marketing materials. A consistent and unique identity builds recognition and trust over time."
    },
    {
      type: "heading",
      text: "Key Components of Effective Brand Identity"
    },
    {
      type: "list",
      items: [
        "A memorable logo that reflects the brand’s essence",
        "A distinct color palette that evokes emotion and recognition",
        "Typography that aligns with the brand’s tone (e.g., playful, formal, modern)",
        "Visual language and style that ensures consistency across platforms",
        "Branded templates for social media, presentations, packaging, etc."
      ]
    },
    {
      type: "image",
      src: brandbg, // replace with actual image
      alt: "Visual elements of brand identity design"
    },
    {
      type: "heading",
      text: "Why Visual Experience Matters"
    },
    {
      type: "paragraph",
      text: "Humans are visual creatures — we process images 60,000 times faster than text. A powerful brand identity triggers instant recall, fosters emotional connection, and shapes customer perception long before they read a word."
    },
    {
      type: "heading",
      text: "The Role of Designers in Brand Identity"
    },
    {
      type: "paragraph",
      text: "Graphic designers and brand strategists play a key role in crafting identities that are both functional and inspiring. Through moodboards, brand guidelines, and thoughtful experimentation, they ensure every element works harmoniously to tell a unified story."
    },
    {
      type: "paragraph",
      text: "In a world full of noise, a well-designed brand identity helps your business speak clearly and confidently. It’s not just about being seen — it's about being remembered."
    }
  ],
  author: {
    name: "Creative Director",
    bio: "Brand strategist and designer with 8+ years of experience building visual identities that leave lasting impressions."
  }
},

 // Add more blog posts as needed
 5:{
  id: 5,
  image: blogc1, // replace with your actual image import
  date: "Aug 7, 2025",
  readTime: "7 min read",
  category: "Content Marketing",
  title: "Content Marketing Strategies for B2B Companies",
  excerpt: "Learn how B2B companies can drive engagement, trust, and sales through effective content marketing strategies. From thought leadership to lead magnets, this guide covers key tactics for long-term success.",
  content: [
    {
      type: "paragraph",
      text: "Content marketing in the B2B world is no longer optional — it’s a vital strategy for building authority, educating prospects, and nurturing long-term client relationships. Unlike B2C, B2B buyers are more informed and deliberate, which makes high-value content an essential tool in the decision-making process."
    },
    {
      type: "heading",
      text: "Understanding B2B Buyer Behavior"
    },
    {
      type: "paragraph",
      text: "B2B buyers often go through longer sales cycles, involving multiple stakeholders. They rely heavily on content like case studies, whitepapers, and expert blogs to guide their decisions. Providing informative and trust-building content is key to moving leads through your funnel."
    },
    {
      type: "heading",
      text: "Effective B2B Content Strategies"
    },
    {
      type: "list",
      items: [
        "Publish educational blog posts and guides tailored to your niche",
        "Create detailed case studies showing real-world results",
        "Use whitepapers and eBooks as lead magnets",
        "Host webinars and LinkedIn live sessions to build authority",
        "Leverage email marketing for nurturing leads with valuable insights"
      ]
    },
    {
      type: "image",
      src: blogc2, // replace with your image asset
      alt: "B2B content strategy overview"
    },
    {
      type: "heading",
      text: "SEO and Distribution Channels"
    },
    {
      type: "paragraph",
      text: "No matter how valuable your content is, it won’t drive results if your audience can’t find it. That’s why B2B marketers must invest in SEO to rank for relevant keywords, and distribute content via LinkedIn, industry forums, and targeted email campaigns."
    },
    {
      type: "heading",
      text: "Measuring Success in B2B Content"
    },
    {
      type: "paragraph",
      text: "Key performance indicators (KPIs) for B2B content include lead generation, engagement time, download rates, and conversion paths. Tools like Google Analytics, HubSpot, and LinkedIn Analytics help track ROI and fine-tune strategies over time."
    },
    {
      type: "paragraph",
      text: "When done right, content marketing builds long-term relationships, establishes brand trust, and positions your company as an industry leader. In the B2B space, value-driven content isn’t just marketing — it’s your competitive edge."
    }
  ],
  author: {
    name: "B2B Marketing Consultant",
    bio: "Helping B2B companies scale through strategic content marketing, demand generation, and digital storytelling."
  }
}



  };

  const currentPost = blogPosts[id];

  if (!currentPost) {
    return (
      <div className="blog-detail-container">
        <div className="error-message">
          <h2>Blog post not found</h2>
          <button onClick={() => navigate('/blog')} className="back-button">
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'paragraph':
          return (
            <p key={index} className="blog-paragraph">
              {item.text}
            </p>
          );
        case 'heading':
          return (
            <h2 key={index} className="blog-subheading">
              {item.text}
            </h2>
          );
        case 'image':
          return (
            <div key={index} className="blog-content-image">
              <img src={item.src} alt={item.alt} />
            </div>
          );
        case 'list':
          return (
            <ul key={index} className="blog-list">
              {item.items.map((listItem, listIndex) => (
                <li key={listIndex}>{listItem}</li>
              ))}
            </ul>
          );
        default:
          return null;
      }
    });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: blogDetailStyles }} />
      <div className="blog-detail-container">
        {/* Navigation */}
        <div className="blog-nav">
          <button onClick={() => navigate('/blog')} className="back-button">
            ← Back to Blog
          </button>
        </div>

        {/* Hero Section */}
        <div className="blog-hero">
          <div className="blog-hero-image">
            <img src={currentPost.image} alt={currentPost.title} />
            <div className="blog-hero-overlay"></div>
          </div>
          <div className="blog-hero-content">
            <div className="blog-meta">
              <span className="blog-category">{currentPost.category}</span>
              <span className="blog-date">{currentPost.date}</span>
              <span className="blog-read-time">{currentPost.readTime}</span>
            </div>
            <h1 className="blog-hero-title">{currentPost.title}</h1>
            <p className="blog-hero-excerpt">{currentPost.excerpt}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="blog-content-wrapper">
          <div className="blog-content-main">
            {renderContent(currentPost.content)}
          </div>

          {/* Author Section */}
          <div className="blog-author">
            <div className="author-info">
              <h3>About the Author</h3>
              <h4>{currentPost.author.name}</h4>
              <p>{currentPost.author.bio}</p>
            </div>
          </div>
        </div>

        {/* Related Posts Section */}
        <div className="related-posts">
          <h3>Related Articles</h3>
          <div className="related-posts-grid">
            {Object.values(blogPosts)
              .filter(post => post.id !== parseInt(id))
              .slice(0, 2)
              .map(post => (
                <div key={post.id} className="related-post" onClick={() => navigate(`/blog/${post.id}`)}>
                  <div className="related-post-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="related-post-content">
                    <span className="related-post-date">{post.date}</span>
                    <h4>{post.title}</h4>
                    <p>{post.excerpt.substring(0, 100)}...</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

// CSS Styles
const blogDetailStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #000;
    color: #fff;
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
  }

  .blog-detail-container {
    min-height: 100vh;
    background-color: #000;
  }

  /* Navigation */
  .blog-nav {
    padding: 20px;
    max-width: 1350px;
    margin: 0 auto;
  }

  .back-button {
    background: transparent;
    color: #fff;
    border: 2px solid #333;
    padding: 12px 24px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .back-button:hover {
    background-color: #333;
    border-color: #fff;
  }

  /* Hero Section */
  .blog-hero {
    position: relative;
    height: 70vh;
    overflow: hidden;
    margin-bottom: 60px;
  }

  .blog-hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .blog-hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .blog-hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
  }

  .blog-hero-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 60px 20px;
    max-width: 1350px;
    margin: 0 auto;
    z-index: 2;
  }

  .blog-meta {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .blog-category,
  .blog-date,
  .blog-read-time {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    backdrop-filter: blur(10px);
  }

  .blog-category {
    background-color: rgba(255, 255, 255, 0.2);
    font-weight: bold;
  }

  .blog-hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .blog-hero-excerpt {
    font-size: 1.2rem;
    color: #ccc;
    max-width: 800px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  /* Content Section */
  .blog-content-wrapper {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .blog-content-main {
    margin-bottom: 60px;
  }

  .blog-paragraph {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 24px;
    color: #ddd;
  }

  .blog-subheading {
    font-size: 2.2rem;
    font-weight: 600;
    margin: 40px 0 24px 0;
    color: #fff;
    border-left: 4px solid #fff;
    padding-left: 20px;
  }

  .blog-content-image {
    margin: 40px 0;
    text-align: center;
  }

  .blog-content-image img {
    width: 100%;
    max-width: 800px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }

  .blog-list {
    margin: 24px 0;
    padding-left: 20px;
  }

  .blog-list li {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 12px;
    color: #ddd;
    position: relative;
  }

  .blog-list li::marker {
    color: #fff;
  }

  /* Author Section */
  .blog-author {
    background-color: #111;
    padding: 40px;
    border-radius: 12px;
    border: 1px solid #333;
    margin-bottom: 60px;
  }

  .author-info h3 {
    color: #fff;
    font-size: 1.4rem;
    margin-bottom: 16px;
  }

  .author-info h4 {
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 12px;
  }

  .author-info p {
    color: #bbb;
    font-size: 1rem;
    line-height: 1.6;
  }

  /* Related Posts */
  .related-posts {
    max-width: 1350px;
    margin: 0 auto;
    padding: 60px 20px;
    border-top: 1px solid #333;
  }

  .related-posts h3 {
    font-size: 2rem;
    margin-bottom: 30px;
    color: #fff;
    text-align: center;
  }

  .related-posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 30px;
  }

  .related-post {
    background-color: #111;
    border: 1px solid #333;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .related-post:hover {
    transform: translateY(-5px);
    border-color: #fff;
  }

  .related-post-image {
    width: 100%;
    height: 250px;
    overflow: hidden;
  }

  .related-post-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .related-post:hover .related-post-image img {
    transform: scale(1.05);
  }

  .related-post-content {
    padding: 24px;
  }

  .related-post-date {
    color: #999;
    font-size: 14px;
  }

  .related-post-content h4 {
    color: #fff;
    font-size: 1.3rem;
    margin: 12px 0;
    line-height: 1.3;
  }

  .related-post-content p {
    color: #bbb;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  /* Error Message */
  .error-message {
    text-align: center;
    padding: 100px 20px;
  }

  .error-message h2 {
    color: #fff;
    margin-bottom: 30px;
  }

  /* Responsive Design */
  @media screen and (max-width: 768px) {
    .blog-hero {
      height: 50vh;
    }

    .blog-hero-title {
      font-size: 2.2rem;
    }

    .blog-hero-excerpt {
      font-size: 1rem;
    }

    .blog-meta {
      gap: 10px;
    }

    .blog-subheading {
      font-size: 1.8rem;
    }

    .related-posts-grid {
      grid-template-columns: 1fr;
    }

    .blog-author {
      padding: 24px;
    }

    .blog-hero-content {
      padding: 40px 20px;
    }
  }

  @media screen and (max-width: 480px) {
    .blog-hero-title {
      font-size: 1.8rem;
    }

    .blog-paragraph,
    .blog-list li {
      font-size: 1rem;
    }

    .blog-subheading {
      font-size: 1.5rem;
      padding-left: 15px;
    }
  }
`;

export default BlogM;