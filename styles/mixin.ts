/**
 * Author : Ryan
 * Date : 2022-03-03
 * Desc : mixin
 */

import { url } from 'inspector';
import { css } from 'styled-components';

//Type of Flex Set
export type TJustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type TAlignItems = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';

export type TFlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

//Flex Set
export const flexSet = (
  justifyContent?: TJustifyContent,
  alignItems?: TAlignItems,
  flexDirection?: TFlexDirection,
) => css`
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

//Type of Font Weight
export type TFontWeight = 100 | 300 | 400 | 500 | 700 | 900;

//Font Set
export const fontSet = (
  fontSize: number = 13,
  fontWeight: TFontWeight = 400,
  lineHeight?: number,
) => css`
  font-size: ${fontSize}px;
  font-weight: ${fontWeight};
  line-height: ${lineHeight}px;
`;

//Background Set
export const backgroundSet = (url: string, size: string = 'cover') => css`
  background-image: url(${url});
  background-size: ${size};
  background-repeat: no-repeat;
  background-position: center center;
`;
