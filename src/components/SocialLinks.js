import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const SocialRow = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
`;

const IconLink = styled.a`
  color: #334155;
  font-size: 2rem;
  transition: color 0.2s;
  &:hover {
    color: #2563eb;
  }
`;

export default function SocialLinks() {
  return (
    <SocialRow>
      <IconLink href="https://www.linkedin.com/in/YOUR-LINKEDIN" target="_blank" aria-label="LinkedIn">
        <FaLinkedin />
      </IconLink>
      <IconLink href="https://github.com/YOUR-GITHUB" target="_blank" aria-label="GitHub">
        <FaGithub />
      </IconLink>
      <IconLink href="mailto:YOUR-EMAIL@example.com" aria-label="Email">
        <FaEnvelope />
      </IconLink>
    </SocialRow>
  );
} 