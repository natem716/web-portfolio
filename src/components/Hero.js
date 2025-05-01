import styled from 'styled-components';
import SocialLinks from './SocialLinks';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px 40px 20px;
  background: #f8fafc;
  min-height: 100vh;
`;

const Headshot = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 32px;
  border: 4px solid #e2e8f0;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
`;

const Headline = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  color: #1e293b;
`;

const Subheadline = styled.p`
  font-size: 1.25rem;
  color: #475569;
  text-align: center;
  margin-bottom: 32px;
`;

const CTAGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 32px;
`;

const CTAButton = styled.a`
  padding: 12px 28px;
  border-radius: 24px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  color: #fff;
  background: #2563eb;
  transition: background 0.2s;
  &:hover {
    background: #1d4ed8;
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <Headshot src="/headshot.jpg" alt="Nathan Miller headshot" />
      <Headline>
        Hi, I&apos;m Nathan Miller — Business & Data Analyst <span style={{fontWeight:400}}>(also dabbling in Software Engineering)</span>
      </Headline>
      <Subheadline>
        I turn data into insights and build tools that drive operational efficiency.
      </Subheadline>
      <CTAGroup>
        <CTAButton href="#projects">View Projects</CTAButton>
        <CTAButton href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Résumé</CTAButton>
      </CTAGroup>
      <SocialLinks />
    </HeroSection>
  );
} 