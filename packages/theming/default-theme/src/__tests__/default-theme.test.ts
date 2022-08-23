import lightAliasTokens from '@fluentui-react-native/design-tokens-windows/light/tokens-aliases.json';
import darkAliasTokens from '@fluentui-react-native/design-tokens-windows/dark/tokens-aliases.json';
import { hcAliasTokens } from '../highContrast/tokens-alias';
import { getAliasTokens } from '../getTokens';

const getAliasTokensTable = [
  ['light', lightAliasTokens],
  ['dark', darkAliasTokens],
  ['highContrast', hcAliasTokens],
];

it.concurrent.each(getAliasTokensTable)('getAliasTokens test', async (mode, tokens) => {
  expect(getAliasTokens(mode)).toBe(tokens);
});
