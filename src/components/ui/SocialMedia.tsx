import styled from 'styled-components';
import { useEffect, useRef } from 'react';

const SocialMediaContainer = styled.section`
  padding: 40px 0;
  background-color: #fff;
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
  
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const SocialMediaTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
  font-weight: 400;
  text-align: center;
`;

const FacebookWidget = styled.div`
  width: 100%;
  height: 350px;
  border: 1px solid #ddd;
  overflow: hidden;
  background-color: #f7f7f7;
  border-radius: 4px;
`;

const InstagramWidget = styled.div`
  width: 100%;
  height: 350px;
  border: 1px solid #ddd;
  overflow: hidden;
  background-color: #f7f7f7;
  border-radius: 4px;
`;

const SocialMedia = () => {
  const facebookRef = useRef<HTMLDivElement>(null);
  const instagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Facebook embed
    if (facebookRef.current) {
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v12.0';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      
      // Clean up any existing Facebook embeds
      const existingFBDiv = facebookRef.current.querySelector('.fb-page');
      if (existingFBDiv) {
        existingFBDiv.remove();
      }
      
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
      
      facebookRef.current.appendChild(fbDiv);
      document.body.appendChild(script);
    }
    
    // Instagram embed
    if (instagramRef.current) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      
      // Create new Instagram embed blockquote
      const instaBlockquote = document.createElement('blockquote');
      instaBlockquote.className = 'instagram-media';
      instaBlockquote.setAttribute('data-instgrm-permalink', 'https://www.instagram.com/marina188paraty/');
      instaBlockquote.setAttribute('data-instgrm-version', '14');
      instaBlockquote.style.maxWidth = '350px';
      instaBlockquote.style.width = '100%';
      instaBlockquote.style.margin = '0 auto';
      
      instagramRef.current.appendChild(instaBlockquote);
      document.body.appendChild(script);
    }
    
    // Cleanup function
    return () => {
      // Remove scripts when component unmounts
      const fbScript = document.querySelector('script[src*="facebook.net"]');
      if (fbScript) fbScript.remove();
      
      const instaScript = document.querySelector('script[src*="instagram.com/embed.js"]');
      if (instaScript) instaScript.remove();
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