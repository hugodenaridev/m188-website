import styled from 'styled-components';

const SocialMediaContainer = styled.section`
  padding: 60px 0;
  background-color: #fff;
`;

const SocialMediaWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 20px;
`;

const SocialMediaColumn = styled.div`
  flex: 1;
  min-width: 300px;
  margin: 0 15px 30px;
`;

const SocialMediaTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
  font-weight: 400;
  text-align: center;
`;

const FacebookWidget = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  overflow: hidden;
`;

const InstagramWidget = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  overflow: hidden;
`;

const YouTubeWidget = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  overflow: hidden;
`;

// This would normally be an actual embed using the platform's embed code
const PlaceholderEmbed = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
  font-style: italic;
`;

const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <SocialMediaWrapper>
        <SocialMediaColumn>
          <SocialMediaTitle>Curta nossa página no Facebook!</SocialMediaTitle>
          <FacebookWidget>
            <PlaceholderEmbed>
              {/* This would be replaced with actual Facebook embed code */}
              <div>Facebook Page Embed</div>
            </PlaceholderEmbed>
          </FacebookWidget>
        </SocialMediaColumn>
        
        <SocialMediaColumn>
          <SocialMediaTitle>Siga-nos no Instagram</SocialMediaTitle>
          <InstagramWidget>
            <PlaceholderEmbed>
              {/* This would be replaced with actual Instagram embed code */}
              <div>Instagram Feed Embed</div>
            </PlaceholderEmbed>
          </InstagramWidget>
        </SocialMediaColumn>
        
        <SocialMediaColumn>
          <SocialMediaTitle>Confira nossos vídeos no Youtube</SocialMediaTitle>
          <YouTubeWidget>
            <PlaceholderEmbed>
              {/* This would be replaced with actual YouTube embed code */}
              <div>YouTube Channel Embed</div>
            </PlaceholderEmbed>
          </YouTubeWidget>
        </SocialMediaColumn>
      </SocialMediaWrapper>
    </SocialMediaContainer>
  );
};

export default SocialMedia; 