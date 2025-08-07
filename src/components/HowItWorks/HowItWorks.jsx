import React from 'react';

const HowItWorks = () => {
  const styles = {
    container: {
      backgroundColor: 'black',
      color: '#ffffff',
      padding: '60px 0',
      // fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      width: '100%',
      minHeight: 'auto',
      '@media (min-width: 768px)': {
        padding: '80px 0'
      },
      '@media (min-width: 1024px)': {
        padding: '120px 0'
      }
    },
    wrapper: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 20px',
      '@media (min-width: 480px)': {
        padding: '0 30px'
      },
      '@media (min-width: 768px)': {
        padding: '0 40px'
      },
      '@media (min-width: 1024px)': {
        padding: '0 60px'
      }
    },
    header: {
      marginBottom: '40px',
      '@media (min-width: 768px)': {
        marginBottom: '60px'
      },
      '@media (min-width: 1024px)': {
        marginBottom: '80px'
      }
    },
    subtitle: {
      color: '#ffffff',
      fontSize: '14px',
      fontWeight: '400',
      marginBottom: '16px',
      letterSpacing: '0.5px',
      textTransform: 'none',
      '@media (min-width: 768px)': {
        fontSize: '15px',
        marginBottom: '20px'
      },
      '@media (min-width: 1024px)': {
        fontSize: '16px',
        marginBottom: '24px'
      }
    },
    title: {
      fontSize: '36px',
      fontWeight: '300',
      margin: '0 0 24px 0',
      lineHeight: '1.1',
      letterSpacing: '-1px',
      color: '#ffffff',
      '@media (min-width: 480px)': {
        fontSize: '42px',
        margin: '0 0 28px 0'
      },
      '@media (min-width: 768px)': {
        fontSize: '56px',
        margin: '0 0 36px 0',
        letterSpacing: '-1.5px'
      },
      '@media (min-width: 1024px)': {
        fontSize: '72px',
        margin: '0 0 42px 0',
        letterSpacing: '-2px'
      },
      '@media (min-width: 1200px)': {
        fontSize: '84px',
        margin: '0 0 48px 0',
        lineHeight: '0.95'
      }
    },
    description: {
      color: '#b8b8b8',
      fontSize: '16px',
      fontWeight: '300',
      lineHeight: '1.5',
      maxWidth: '100%',
      margin: '0',
      '@media (min-width: 480px)': {
        fontSize: '17px'
      },
      '@media (min-width: 768px)': {
        fontSize: '19px',
        maxWidth: '600px'
      },
      '@media (min-width: 1024px)': {
        fontSize: '21px',
        maxWidth: '800px'
      },
      '@media (min-width: 1200px)': {
        fontSize: '22px',
        maxWidth: '900px'
      }
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '40px',
      marginTop: '0',
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '50px'
      },
      '@media (min-width: 1024px)': {
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '60px'
      },
      '@media (min-width: 1200px)': {
        gap: '80px'
      }
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    iconContainer: {
      width: '50px',
      height: '50px',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      '@media (min-width: 768px)': {
        width: '55px',
        height: '55px',
        marginBottom: '24px'
      },
      '@media (min-width: 1024px)': {
        width: '60px',
        height: '60px',
        marginBottom: '32px'
      }
    },
    cardTitle: {
      fontSize: '22px',
      fontWeight: '400',
      marginBottom: '16px',
      lineHeight: '1.2',
      color: '#ffffff',
      '@media (min-width: 480px)': {
        fontSize: '24px'
      },
      '@media (min-width: 768px)': {
        fontSize: '25px',
        marginBottom: '18px'
      },
      '@media (min-width: 1024px)': {
        fontSize: '26px',
        marginBottom: '20px'
      },
      '@media (min-width: 1200px)': {
        fontSize: '28px'
      }
    },
    cardDescription: {
      color: '#b8b8b8',
      fontSize: '15px',
      lineHeight: '1.6',
      fontWeight: '300',
      '@media (min-width: 480px)': {
        fontSize: '16px'
      },
      '@media (min-width: 768px)': {
        fontSize: '17px'
      },
      '@media (min-width: 1024px)': {
        fontSize: '18px'
      }
    }
  };

  // More accurate SVG Icons with responsive sizing
  const StrategicVisionIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 50 50" fill="none">
      <rect x="4" y="4" width="18" height="18" stroke="white" strokeWidth="1.5" fill="none"/>
      <rect x="14" y="14" width="18" height="18" stroke="white" strokeWidth="1.5" fill="white"/>
    </svg>
  );

  const CreativeExcellenceIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 50 50" fill="none">
      <path d="M8 42 Q25 8 42 42" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <circle cx="42" cy="42" r="6" fill="white"/>
    </svg>
  );

  const ProvenResultsIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 50 50" fill="none">
      <polygon points="12,38 25,12 38,25 32,42" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      <circle cx="42" cy="16" r="5" fill="white"/>
    </svg>
  );

  const ClientCentricIcon = () => (
    <svg width="100%" height="100%" viewBox="0 0 50 50" fill="none">
      <circle cx="25" cy="25" r="12" stroke="white" strokeWidth="1.5" fill="none"/>
      <circle cx="38" cy="12" r="7" fill="white"/>
      <rect x="35" y="9" width="6" height="6" fill="#111111"/>
    </svg>
  );

  const cards = [
    {
      icon: <StrategicVisionIcon />,
      title: "Strategic Vision",
      description: "Every action is purposeful, aligned with your goals, and designed for measurable impact."
    },
    {
      icon: <CreativeExcellenceIcon />,
      title: "Creative Excellence", 
      description: "We bring fresh, innovative ideas to every project, ensuring your brand stands out in a crowded market."
    },
    {
      icon: <ProvenResultsIcon />,
      title: "Proven Results",
      description: "Our track record of successful campaigns and happy clients speaks volumes about our ability to deliver."
    },
    {
      icon: <ClientCentricIcon />,
      title: "Client-Centric Approach",
      description: "Your success is our priority. We listen, collaborate, and tailor solutions to fit your unique needs."
    }
  ];

  // Helper function to apply responsive styles (since we can't use CSS-in-JS media queries directly)
  const getResponsiveStyle = (baseStyle) => {
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
    
    if (screenWidth >= 1200) {
      return { ...baseStyle, ...baseStyle['@media (min-width: 1200px)'] };
    } else if (screenWidth >= 1024) {
      return { ...baseStyle, ...baseStyle['@media (min-width: 1024px)'] };
    } else if (screenWidth >= 768) {
      return { ...baseStyle, ...baseStyle['@media (min-width: 768px)'] };
    } else if (screenWidth >= 480) {
      return { ...baseStyle, ...baseStyle['@media (min-width: 480px)'] };
    }
    return baseStyle;
  };

  // Clean styles without media queries for inline styles
  const cleanStyles = {
    container: {
      backgroundColor: 'black',
      color: '#ffffff',
      padding: window?.innerWidth >= 1024 ? '120px 0' : window?.innerWidth >= 768 ? '80px 0' : '60px 0',
      // fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      width: '100%',
      minHeight: 'auto'
    },
    wrapper: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: window?.innerWidth >= 1024 ? '0 60px' : window?.innerWidth >= 768 ? '0 40px' : window?.innerWidth >= 480 ? '0 30px' : '0 20px'
    },
    header: {
      marginBottom: window?.innerWidth >= 1024 ? '80px' : window?.innerWidth >= 768 ? '60px' : '40px'
    },
    subtitle: {
      color: '#ffffff',
      fontSize: window?.innerWidth >= 1024 ? '16px' : window?.innerWidth >= 768 ? '15px' : '14px',
      fontWeight: '400',
      marginBottom: window?.innerWidth >= 1024 ? '24px' : window?.innerWidth >= 768 ? '20px' : '16px',
      letterSpacing: '0.5px',
      textTransform: 'none'
    },
    title: {
      fontSize: window?.innerWidth >= 1200 ? '84px' : window?.innerWidth >= 1024 ? '72px' : window?.innerWidth >= 768 ? '56px' : window?.innerWidth >= 480 ? '42px' : '36px',
      fontWeight: '300',
      margin: window?.innerWidth >= 1200 ? '0 0 48px 0' : window?.innerWidth >= 1024 ? '0 0 42px 0' : window?.innerWidth >= 768 ? '0 0 36px 0' : window?.innerWidth >= 480 ? '0 0 28px 0' : '0 0 24px 0',
      lineHeight: window?.innerWidth >= 1200 ? '0.95' : '1.1',
      letterSpacing: window?.innerWidth >= 1024 ? '-2px' : window?.innerWidth >= 768 ? '-1.5px' : '-1px',
      color: '#ffffff'
    },
    description: {
      color: '#b8b8b8',
      fontSize: window?.innerWidth >= 1200 ? '22px' : window?.innerWidth >= 1024 ? '21px' : window?.innerWidth >= 768 ? '19px' : window?.innerWidth >= 480 ? '17px' : '16px',
      fontWeight: '300',
      lineHeight: '1.5',
      maxWidth: window?.innerWidth >= 1200 ? '900px' : window?.innerWidth >= 1024 ? '800px' : window?.innerWidth >= 768 ? '600px' : '100%',
      margin: '0'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: window?.innerWidth >= 1024 ? 'repeat(4, 1fr)' : window?.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
      gap: window?.innerWidth >= 1200 ? '80px' : window?.innerWidth >= 1024 ? '60px' : window?.innerWidth >= 768 ? '50px' : '40px',
      marginTop: '0'
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    iconContainer: {
      width: window?.innerWidth >= 1024 ? '60px' : window?.innerWidth >= 768 ? '55px' : '50px',
      height: window?.innerWidth >= 1024 ? '60px' : window?.innerWidth >= 768 ? '55px' : '50px',
      marginBottom: window?.innerWidth >= 1024 ? '32px' : window?.innerWidth >= 768 ? '24px' : '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    cardTitle: {
      fontSize: window?.innerWidth >= 1200 ? '28px' : window?.innerWidth >= 1024 ? '26px' : window?.innerWidth >= 768 ? '25px' : window?.innerWidth >= 480 ? '24px' : '22px',
      fontWeight: '400',
      marginBottom: window?.innerWidth >= 1024 ? '20px' : window?.innerWidth >= 768 ? '18px' : '16px',
      lineHeight: '1.2',
      color: '#ffffff'
    },
    cardDescription: {
      color: '#b8b8b8',
      fontSize: window?.innerWidth >= 1024 ? '18px' : window?.innerWidth >= 768 ? '17px' : window?.innerWidth >= 480 ? '16px' : '15px',
      lineHeight: '1.6',
      fontWeight: '300'
    }
  };

  return (
    <div style={cleanStyles.container} data-aos="zoom-in-right">
      <div style={cleanStyles.wrapper}>
        <div style={cleanStyles.header}>
          <div style={cleanStyles.subtitle}>— How It Works</div>
          <h1 style={cleanStyles.title}>Why Choose ADM</h1>
          <p style={cleanStyles.description}>
            Partnering with Hawoca means choosing a team dedicated to your brand's success. Here's what sets us apart:
          </p>
        </div>
        
        <div style={cleanStyles.grid} data-aos="zoom-in-right">
          {cards.map((card, index) => (
            <div key={index} style={cleanStyles.card}>
              <div style={cleanStyles.iconContainer}>
                {card.icon}
              </div>
              <h3 style={cleanStyles.cardTitle}>{card.title}</h3>
              <p style={cleanStyles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;