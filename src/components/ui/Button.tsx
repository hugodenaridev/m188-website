import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, typography, spacing, shadows, borderRadius } from '../../styles/designSystem';

type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'text' | 'gradient';
type ButtonSize = 'small' | 'medium' | 'large';
type IconPosition = 'left' | 'right';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  disabled?: boolean;
  to?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  className?: string;
  children: ReactNode;
}

// Define props for styled components
interface StyledButtonProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
  $hasIcon: boolean;
  $iconPosition: IconPosition;
  $disabled?: boolean;
}

const buttonSizes = {
  small: css`
    padding: ${spacing[1]} ${spacing[3]};
    font-size: ${typography.fontSize.sm};
  `,
  medium: css`
    padding: ${spacing[2]} ${spacing[4]};
    font-size: ${typography.fontSize.base};
  `,
  large: css`
    padding: ${spacing[3]} ${spacing[6]};
    font-size: ${typography.fontSize.lg};
  `,
};

const buttonVariants = {
  primary: css`
    background-color: ${colors.primary.main};
    color: ${colors.text.inverse};
    border: 2px solid ${colors.primary.main};
    
    &:hover:not(:disabled) {
      background-color: ${colors.primary.dark};
      border-color: ${colors.primary.dark};
    }
    
    &:active:not(:disabled) {
      background-color: ${colors.primary.dark};
      border-color: ${colors.primary.dark};
    }
  `,
  
  secondary: css`
    background-color: ${colors.secondary.main};
    color: ${colors.text.inverse};
    border: 2px solid ${colors.secondary.main};
    
    &:hover:not(:disabled) {
      background-color: ${colors.secondary.dark};
      border-color: ${colors.secondary.dark};
    }
    
    &:active:not(:disabled) {
      background-color: ${colors.secondary.dark};
      border-color: ${colors.secondary.dark};
    }
  `,
  
  outlined: css`
    background-color: transparent;
    color: ${colors.primary.main};
    border: 2px solid ${colors.primary.main};
    
    &:hover:not(:disabled) {
      background-color: ${colors.primary.main}10;
    }
    
    &:active:not(:disabled) {
      background-color: ${colors.primary.main}20;
    }
  `,
  
  text: css`
    background-color: transparent;
    color: ${colors.primary.main};
    border: 2px solid transparent;
    padding-left: ${spacing[2]};
    padding-right: ${spacing[2]};
    
    &:hover:not(:disabled) {
      background-color: ${colors.primary.main}10;
    }
    
    &:active:not(:disabled) {
      background-color: ${colors.primary.main}20;
    }
  `,
  
  gradient: css`
    background: linear-gradient(135deg, ${colors.primary.main}, ${colors.ocean.medium});
    color: ${colors.text.inverse};
    border: none;
    
    &:hover:not(:disabled) {
      background: linear-gradient(135deg, ${colors.primary.dark}, ${colors.ocean.deep});
      box-shadow: ${shadows.md};
    }
    
    &:active:not(:disabled) {
      background: linear-gradient(135deg, ${colors.primary.dark}, ${colors.ocean.deep});
    }
  `,
};

const ButtonBase = css<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.medium};
  border-radius: ${borderRadius.md};
  transition: all 0.2s ease-in-out;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  text-decoration: none;
  box-shadow: ${shadows.sm};
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  gap: ${spacing[2]};
  
  ${props => buttonSizes[props.$size]}
  ${props => buttonVariants[props.$variant]}
  
  ${props => props.$hasIcon && props.$iconPosition === 'left' && css`
    flex-direction: row;
  `}
  
  ${props => props.$hasIcon && props.$iconPosition === 'right' && css`
    flex-direction: row-reverse;
  `}
  
  ${props => props.$disabled && css`
    opacity: 0.6;
    pointer-events: none;
    box-shadow: none;
  `}
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${colors.primary.light}60;
  }
`;

const StyledButton = styled.button<StyledButtonProps>`
  ${ButtonBase}
`;

const StyledAnchor = styled.a<StyledButtonProps>`
  ${ButtonBase}
`;

const StyledLink = styled(Link)<StyledButtonProps>`
  ${ButtonBase}
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  disabled = false,
  to,
  href,
  type = 'button',
  onClick,
  className,
  children,
  ...rest
}) => {
  const hasIcon = !!icon;
  const buttonProps = {
    $variant: variant,
    $size: size,
    $fullWidth: fullWidth,
    $hasIcon: hasIcon,
    $iconPosition: iconPosition,
    $disabled: disabled
  };
  
  // Router Link
  if (to) {
    return (
      <StyledLink
        to={to}
        {...buttonProps}
        className={className}
        onClick={disabled ? undefined : onClick}
        {...rest}
      >
        {icon}
        {children}
      </StyledLink>
    );
  }
  
  // External Link
  if (href) {
    return (
      <StyledAnchor
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...buttonProps}
        className={className}
        onClick={disabled ? undefined : onClick}
        {...rest}
      >
        {icon}
        {children}
      </StyledAnchor>
    );
  }
  
  // Regular Button
  return (
    <StyledButton
      type={type}
      {...buttonProps}
      disabled={disabled}
      className={className}
      onClick={onClick}
      {...rest}
    >
      {icon}
      {children}
    </StyledButton>
  );
};

export default Button; 