import styled from 'styled-components';
import { containers, spacing } from '../../styles/designSystem';

interface ContainerProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'none';
  fluid?: boolean;
  noGutters?: boolean;
  centerContent?: boolean;
  className?: string;
  children: React.ReactNode;
}

const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  
  // Apply max-width based on size prop
  max-width: ${props => {
    if (props.fluid || props.maxWidth === 'full') return '100%';
    if (props.maxWidth === 'none') return 'none';
    return props.maxWidth ? containers[props.maxWidth] : containers.lg;
  }};
  
  // Apply padding (gutters)
  padding-left: ${props => props.noGutters ? '0' : spacing[4]};
  padding-right: ${props => props.noGutters ? '0' : spacing[4]};
  
  // Center content if needed
  ${props => props.centerContent && `
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
  
  // Responsive padding adjustments
  @media (min-width: ${containers.xl}) {
    padding-left: ${props => props.noGutters ? '0' : spacing[5]};
    padding-right: ${props => props.noGutters ? '0' : spacing[5]};
  }
  
  @media (max-width: ${containers.md}) {
    padding-left: ${props => props.noGutters ? '0' : spacing[3]};
    padding-right: ${props => props.noGutters ? '0' : spacing[3]};
  }
  
  @media (max-width: ${containers.sm}) {
    padding-left: ${props => props.noGutters ? '0' : spacing[2]};
    padding-right: ${props => props.noGutters ? '0' : spacing[2]};
  }
`;

const Container = ({
  maxWidth = 'lg',
  fluid = false,
  noGutters = false,
  centerContent = false,
  className,
  children
}: ContainerProps) => {
  return (
    <StyledContainer
      maxWidth={maxWidth}
      fluid={fluid}
      noGutters={noGutters}
      centerContent={centerContent}
      className={className}
    >
      {children}
    </StyledContainer>
  );
};

export default Container; 