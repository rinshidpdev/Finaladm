import React from 'react';

const HowItWorks = () => {
  const styles = {
    container: {
      backgroundColor: 'black',
      color: '#ffffff',
      padding: '120px 0',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      width: '100%',
      minHeight: 'auto'
    },
    wrapper: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 60px'
    },
    header: {
      marginBottom: '80px'
    },
    subtitle: {
      color: '#ffffff',
      fontSize: '16px',
      fontWeight: '400',
      marginBottom: '24px',
      letterSpacing: '0.5px',
      textTransform: 'none'
    },
    title: {
      fontSize: '84px',
      fontWeight: '300',
      margin: '0 0 48px 0',
      lineHeight: '0.95',
      letterSpacing: '-2px',
      color: '#ffffff'
    },
    description: {
      color: '#b8b8b8',
      fontSize: '22px',
      fontWeight: '300',
      lineHeight: '1.5',
      maxWidth: '900px',
      margin: '0'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '80px',
      marginTop: '0'
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    iconContainer: {
      width: '60px',
      height: '60px',
      marginBottom: '32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    cardTitle: {
      fontSize: '28px',
      fontWeight: '400',
      marginBottom: '20px',
      lineHeight: '1.2',
      color: '#ffffff'
    },
    cardDescription: {
      color: '#b8b8b8',
      fontSize: '18px',
      lineHeight: '1.6',
      fontWeight: '300'
    }
  };

  // More accurate SVG Icons based on the image
  const StrategicVisionIcon = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <rect x="4" y="4" width="18" height="18" stroke="white" strokeWidth="1.5" fill="none"/>
      <rect x="14" y="14" width="18" height="18" stroke="white" strokeWidth="1.5" fill="white"/>
    </svg>
  );

  const CreativeExcellenceIcon = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <path d="M8 42 Q25 8 42 42" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <circle cx="42" cy="42" r="6" fill="white"/>
    </svg>
  );

  const ProvenResultsIcon = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <polygon points="12,38 25,12 38,25 32,42" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      <circle cx="42" cy="16" r="5" fill="white"/>
    </svg>
  );

  const ClientCentricIcon = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
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

  return (
    <div style={styles.container} data-aos="zoom-in-right">
      <div style={styles.wrapper}>
        <div style={styles.header}>
          <div style={styles.subtitle}>— How It Works</div>
          <h1 style={styles.title}>Why Choose ADM</h1>
          <p style={styles.description}>
            Partnering with Hawoca means choosing a team dedicated to your brand's success. Here's what sets us apart:
          </p>
        </div>
        
        <div style={styles.grid} data-aos="zoom-in-right">
          {cards.map((card, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.iconContainer}>
                {card.icon}
              </div>
              <h3 style={styles.cardTitle}>{card.title}</h3>
              <p style={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;