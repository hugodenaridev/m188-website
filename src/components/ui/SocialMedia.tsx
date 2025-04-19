// Extend window interface for Facebook and Instagram SDKs
declare global {
  interface Window {
    FB?: {
      XFBML: { parse: (node?: HTMLElement) => void }
    };
    instgrm?: {
      Embeds: { process: () => void }
    };
  }
}

import styled from 'styled-components';
import { useEffect, useRef } from 'react';

import { colors } from '../../styles/designSystem';

const SocialMediaContainer = styled.section`
  color: #fff;
  padding: 40px 0;
  background: ${colors.primary.main};
`;

const SocialMediaWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 20px;
`;

const SocialMediaColumn = styled.div`
  min-width: 280px;
  max-width: 450px;
  margin: 0 15px 30px;
  color: #fff;
  
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const SocialMediaTitle = styled.h3`
  color: #fff;
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 400;
  text-align: center;
`;

const FacebookWidget = styled.div`
  width: 100%;
  height: 350px;
  border: 1px solid #ddd;
  overflow: hidden;
  background: ${colors.primary.main};
  border-radius: 4px;
`;

const InstagramWidget = styled.div`
  width: 100%;
  height: 350px;
  border: 1px solid #ddd;
  overflow: hidden;
  background: ${colors.primary.main};
  border-radius: 4px;
`;

const SocialMedia = () => {
  const facebookRef = useRef<HTMLDivElement>(null);
  const instagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  // Store refs in local variables for cleanup
  const fbNode = facebookRef.current;
  const instaNode = instagramRef.current;

  // --- FACEBOOK EMBED ---
  if (fbNode) {
    // Clean up previous embed
    fbNode.innerHTML = '';
    // Create new Facebook embed div
    const fbDiv = document.createElement('div');
    fbDiv.className = 'fb-page';
    fbDiv.setAttribute('data-href', 'https://www.facebook.com/marina188paraty');
    fbDiv.setAttribute('data-tabs', 'timeline');
    fbDiv.setAttribute('data-width', '');
    fbDiv.setAttribute('data-height', '350');
    fbDiv.setAttribute('data-small-header', 'true');
    fbDiv.setAttribute('data-adapt-container-width', 'true');
    fbDiv.setAttribute('data-hide-cover', 'false');
    fbDiv.setAttribute('data-show-facepile', 'false');
    fbNode.appendChild(fbDiv);
    // Add fb-root if not present
    if (!document.getElementById('fb-root')) {
      const fbRoot = document.createElement('div');
      fbRoot.id = 'fb-root';
      document.body.appendChild(fbRoot);
    }
    // Load SDK if not already present
    if (!window.FB) {
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v12.0';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        if (window.FB && window.FB.XFBML) {
          window.FB.XFBML.parse(fbNode);
        }
      };
      document.body.appendChild(script);
    } else {
      // If SDK already loaded, re-parse
      if ('XFBML' in window.FB) {
        window.FB.XFBML.parse(fbNode);
      }
    }
  }
  // --- INSTAGRAM EMBED ---
  if (instaNode) {
    // Clean up previous embed
    instaNode.innerHTML = '';
    // Create new Instagram embed blockquote
    const instaBlockquote = document.createElement('blockquote');
    instaBlockquote.className = 'instagram-media';
    instaBlockquote.setAttribute('data-instgrm-permalink', 'https://www.instagram.com/marina188paraty/');
    instaBlockquote.setAttribute('data-instgrm-version', '14');
    instaBlockquote.style.maxWidth = '350px';
    instaBlockquote.style.width = '100%';
    instaBlockquote.style.margin = '0 auto';
    instaNode.appendChild(instaBlockquote);
    // Load SDK if not already present
    if (!window.instgrm) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => {
        if (window.instgrm && window.instgrm.Embeds) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    } else {
      // If SDK already loaded, re-process
      if ('Embeds' in window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }
  }
  // Cleanup function
  return () => {
    // Clean up widgets (do not remove SDK scripts to avoid reload issues)
    if (fbNode) fbNode.innerHTML = '';
    if (instaNode) instaNode.innerHTML = '';
  };
}, []);

  return (
    <SocialMediaContainer id="social-media">
      <SocialMediaWrapper>
        <SocialMediaColumn>
          <SocialMediaTitle>Curta nossa página no Facebook!</SocialMediaTitle>
          <FacebookWidget ref={facebookRef}>
            {/* Facebook embed will be inserted here by useEffect */}
            <div id="fb-root"></div>
          </FacebookWidget>
        </SocialMediaColumn>
        
        <SocialMediaColumn>
          <SocialMediaTitle>Siga-nos no Instagram</SocialMediaTitle>
          <InstagramWidget ref={instagramRef}>
            {/* Instagram embed will be inserted here by useEffect */}
          </InstagramWidget>
        </SocialMediaColumn>
      </SocialMediaWrapper>
    </SocialMediaContainer>
  );
};

export default SocialMedia; 