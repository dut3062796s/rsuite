import * as React from 'react';

import { PropTypes, StandardProps } from './index';

export interface ButtonProps extends StandardProps {
  /** A button can have different appearances. */
  appearance?: 'default' | 'primary' | 'link' | 'subtle' | 'ghost';

  /** A button can show it is currently the active user selection */
  active?: boolean;

  /** You can use a custom element for this component */
  componentClass?: React.ReactType<ButtonProps>;

  /** A button can have different sizes */
  size?: PropTypes.Size;

  /** A button can have different colors */
  color?: PropTypes.Color;

  /** Primary content */
  children?: React.ReactNode;

  /** Display block buttons */
  block?: boolean;

  /** Providing a `href` will render an `<a>` element, _styled_ as a button */
  href?: string;

  /** A button can show a loading indicator */
  loading?: boolean;

  /** A button can show it is currently unable to be interacted with */
  disabled?: boolean;
}

declare const Button: React.ComponentType<ButtonProps>;

export default Button;
