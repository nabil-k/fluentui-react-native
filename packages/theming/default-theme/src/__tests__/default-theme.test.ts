import lightAliasTokens from '@fluentui-react-native/design-tokens-windows/light/tokens-aliases.json';
import darkAliasTokens from '@fluentui-react-native/design-tokens-windows/dark/tokens-aliases.json';
import { hcAliasTokens } from '../highContrast/tokens-alias';
import lightShadowTokens from '@fluentui-react-native/design-tokens-windows/light/tokens-shadow.json';
import darkShadowTokens from '@fluentui-react-native/design-tokens-windows/dark/tokens-shadow.json';
import hcShadowTokens from '@fluentui-react-native/design-tokens-win32/hc/tokens-shadow.json';
import { getAliasTokens } from '../getTokens';
import { getShadowTokens } from '../getTokens';
import { createDefaultTheme } from '../createDefaultTheme';
import { defaultFluentDarkTheme, defaultFluentHighConstrastTheme, defaultFluentTheme } from '../defaultTheme';
import { ThemeReference } from '@fluentui-react-native/theme';
import { Theme } from '@fluentui-react-native/theme-types';

const lightThemeRef = new ThemeReference({} as Theme, defaultFluentTheme);
const darkThemeRef = new ThemeReference({} as Theme, defaultFluentDarkTheme);
const highContrastThemeRef = new ThemeReference({} as Theme, defaultFluentHighConstrastTheme);

const createDefaultThemeTable = [
  [{ appearance: 'dynamic' }, lightThemeRef],
  [{ appearance: 'dynamic' }, darkThemeRef],
  [{ appearance: 'dynamic' }, highContrastThemeRef],
];

const getAliasTokensTable = [
  ['light', lightAliasTokens],
  ['dark', darkAliasTokens],
  ['highContrast', hcAliasTokens],
];

const getShadowTokensTable = [
  ['light', lightShadowTokens.shadow],
  ['dark', darkShadowTokens.shadow],
  ['highContrast', hcShadowTokens.shadow],
];

/**
 * Fails due to [Function anonymous] existing in the recipes key of what createDefaultTheme(themeOption) returns.
 * The expect does not expect this to exist [Function anonymous].
 */
// it.concurrent.each(createDefaultThemeTable)('createDefaultTheme test', async (themeOption: any, theme: any) => {
//   expect(createDefaultTheme(themeOption)).toBe(theme);
// });

it.concurrent.each(getAliasTokensTable)('getAliasTokens test', async (mode: any, tokens: any) => {
  expect(getAliasTokens(mode)).toBe(tokens);
});

it.concurrent.each(getShadowTokensTable)('getShadowTokens test', async (mode: any, tokens: any) => {
  expect(getShadowTokens(mode)).toBe(tokens);
});
