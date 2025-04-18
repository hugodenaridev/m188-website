import styled from 'styled-components';
import { colors, borderRadius, shadows, spacing } from '../../styles/designSystem';

export interface CardProps {
  elevation?: 'none' | 'low' | 'medium' | 'high';
  noPadding?: boolean;
  bordered?: boolean;
  backgroundColor?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const getShadow = (elevation: 'none' | 'low' | 'medium' | 'high') => {
  switch (elevation) {
    case 'none':
      return 'none';
    case 'low':
      return shadows.sm;
    case 'medium':
      return shadows.md;
    case 'high':
      return shadows.lg;
    default:
      return shadows.sm;
  }
};

const CardContainer = styled.div<CardProps>`
  background-color: ${props => props.backgroundColor || colors.ui.surface};
  border-radius: ${borderRadius.lg};
  box-shadow: ${props => getShadow(props.elevation || 'low')};
  border: ${props => props.bordered ? `1px solid ${colors.ui.border}` : 'none'};
  padding: ${props => props.noPadding ? '0' : spacing[4]};
  transition: box-shadow 0.3s ease;
  overflow: hidden;
  
  ${props => props.onClick && `
    cursor: pointer;
    
    &:hover {
      box-shadow: ${getShadow(props.elevation === 'high' ? 'high' : 'medium')};
    }
  `}
`;

export const Card = ({
  elevation = 'low',
  noPadding = false,
  bordered = false,
  backgroundColor,
  children,
  className,
  onClick,
}: CardProps) => {
  return (
    <CardContainer
      elevation={elevation}
      noPadding={noPadding}
      bordered={bordered}
      backgroundColor={backgroundColor}
      className={className}
      onClick={onClick}
    >
      {children}
    </CardContainer>
  );
};

// Subcomponents for structure
const CardHeader = styled.div`
  padding: ${props => props.className?.includes('no-padding') ? '0' : `${spacing[4]} ${spacing[4]} 0`};
  margin-bottom: ${spacing[4]};
  border-bottom: ${props => props.className?.includes('divider') ? `1px solid ${colors.ui.divider}` : 'none'};
  padding-bottom: ${props => props.className?.includes('divider') ? spacing[4] : '0'};
`;

const CardTitle = styled.h3`
  margin-bottom: ${spacing[2]};
`;

const CardSubtitle = styled.div`
  color: ${colors.text.secondary};
  margin-bottom: ${spacing[1]};
`;

const CardContent = styled.div`
  padding: ${props => props.className?.includes('no-padding') ? '0' : `0 ${spacing[4]}`};
`;

const CardMedia = styled.div<{ aspectRatio?: string }>`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: ${props => props.aspectRatio || '56.25%'}; /* Default 16:9 aspect ratio */
  background-size: cover;
  background-position: center;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardFooter = styled.div`
  padding: ${props => props.className?.includes('no-padding') ? '0' : `0 ${spacing[4]} ${spacing[4]}`};
  margin-top: ${spacing[4]};
  border-top: ${props => props.className?.includes('divider') ? `1px solid ${colors.ui.divider}` : 'none'};
  padding-top: ${props => props.className?.includes('divider') ? spacing[4] : '0'};
  display: flex;
  justify-content: ${props => props.className?.includes('end') ? 'flex-end' : 
    props.className?.includes('center') ? 'center' : 
    props.className?.includes('between') ? 'space-between' : 'flex-start'};
  gap: ${spacing[2]};
`;

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Content = CardContent;
Card.Media = CardMedia;
Card.Footer = CardFooter;

export default Card; 