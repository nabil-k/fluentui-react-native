import * as React from 'react';
import { ViewProps, ViewStyle, ColorValue, Animated } from 'react-native';
import { TextProps } from '@fluentui-react-native/experimental-text';
import { FontTokens, IBorderTokens, IColorTokens, IShadowTokens, LayoutTokens } from '@fluentui-react-native/tokens';
import { IFocusable, IWithPressableOptions, InteractionEvent } from '@fluentui-react-native/interactive-hooks';
import { IViewProps } from '@fluentui-react-native/adapters';
import { IPressableState, IWithPressableEvents } from '@fluentui-react-native/interactive-hooks';

export const switchName = 'Switch';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonAppearance = 'primary' | 'subtle';
export type ButtonShape = 'rounded' | 'circular' | 'square';

export interface SwitchTokens extends LayoutTokens, FontTokens, IBorderTokens, IShadowTokens, IColorTokens {
  /**
   * Track color
   */
  background?: ColorValue;

  /**
   * Thumb color
   */
  thumb?: ColorValue;

  /**
   * Stroke color
   */
  stroke?: ColorValue;

  justifyContent?: ViewStyle['justifyContent'];

  /**
   * The icon color.
   */
  iconColor?: ColorValue;

  /**
   * The size of the icon.
   */
  iconSize?: number;

  /**
   * The weight of the lines used when drawing the icon.
   */
  iconWeight?: number;

  /**
   * The width of the button.
   */
  width?: ViewStyle['width'];

  /**
   * The amount of spacing between an icon and the content when iconPosition is set to 'before', in pixels
   */
  spacingIconContentBefore?: number;

  /**
   * The amount of spacing between an icon and the content when iconPosition is set to 'after', in pixels
   */
  spacingIconContentAfter?: number;

  /**
   * States that can be applied to a button
   */
  hovered?: SwitchTokens;
  focused?: SwitchTokens;
  pressed?: SwitchTokens;
  disabled?: SwitchTokens;
  checked?: SwitchTokens;
  toggleOn?: SwitchTokens;
  toggleOff?: SwitchTokens;
}

export interface SwitchProps extends Omit<IWithPressableOptions<ViewProps>, 'onPress'> {
  componentRef?: React.RefObject<IFocusable>;

  onChange?: (e: InteractionEvent, checked: boolean) => void;

  defaultChecked?: boolean;

  checked?: boolean;

  label?: string;

  offText?: string;

  onString?: string;

  labelPosition?: 'before' | 'above' | 'after';
}

export type SwitchState = IPressableState & { toggleOn?: boolean; toggleOff?: boolean };

export interface SwitchInfo {
  props: IWithPressableEvents<SwitchProps & React.ComponentPropsWithRef<any>>;
  state: SwitchState;
}

export interface SwitchSlotProps {
  root: React.PropsWithRef<IViewProps>;
  label: TextProps;
  track: React.PropsWithRef<IViewProps>;
  thumb: Animated.AnimatedProps<IViewProps>;
}

export interface SwitchType {
  props: SwitchProps;
  tokens: SwitchTokens;
  slotProps: SwitchSlotProps;
}
