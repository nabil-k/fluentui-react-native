import lightAliasTokens from '@fluentui-react-native/design-tokens-windows/light/tokens-aliases.json';
import darkAliasTokens from '@fluentui-react-native/design-tokens-windows/dark/tokens-aliases.json';
import { hcAliasTokens } from '../highContrast/tokens-alias';
import lightShadowTokens from '@fluentui-react-native/design-tokens-windows/light/tokens-shadow.json';
import darkShadowTokens from '@fluentui-react-native/design-tokens-windows/dark/tokens-shadow.json';
import hcShadowTokens from '@fluentui-react-native/design-tokens-win32/hc/tokens-shadow.json';
import { getAliasTokens } from '../getTokens';
import { getShadowTokens } from '../getTokens';

const getAliasTokensTable = [
  ['light', lightAliasTokens],
  ['dark', darkAliasTokens],
  ['highContrast', hcAliasTokens],
];

it.concurrent.each(getAliasTokensTable)('getAliasTokens test', async (mode: any, tokens: any) => {
  expect(getAliasTokens(mode)).toBe(tokens);
});

const getShadowTokensTable = [
  ['light', lightShadowTokens.shadow],
  ['dark', darkShadowTokens.shadow],
  ['highContrast', hcShadowTokens.shadow],
];

it.concurrent.each(getShadowTokensTable)('getShadowTokens test', async (mode: any, tokens: any) => {
  expect(getShadowTokens(mode)).toBe(tokens);
});
