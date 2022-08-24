import { createAppleTheme } from '../createAppleTheme';
import { ThemeReference } from '@fluentui-react-native/theme';
import { createDefaultTheme } from '@fluentui-react-native/default-theme';
import { createMacOSColorAliasTokens } from '../createMacOSAliasTokens';
import { getMacOSAliasTokens, getMacOSShadowTokens } from '../getMacOSTokens';
import macOSLightAliasTokens from '@fluentui-react-native/design-tokens-macos/light/tokens-aliases.json';
import macOSDarkAliasTokens from '@fluentui-react-native/design-tokens-macos/dark/tokens-aliases.json';
import macOSLightHCAliasTokens from '@fluentui-react-native/design-tokens-macos/hclight/tokens-aliases.json';
import macOSDarkHCAliasTokens from '@fluentui-react-native/design-tokens-macos/hcdark/tokens-aliases.json';
import macOSLightShadowTokens from '@fluentui-react-native/design-tokens-macos/light/tokens-shadow.json';
import macOSDarkShadowTokens from '@fluentui-react-native/design-tokens-macos/dark/tokens-shadow.json';
import macOSLightHCShadowTokens from '@fluentui-react-native/design-tokens-macos/hclight/tokens-shadow.json';
import macOSDarkHCShadowTokens from '@fluentui-react-native/design-tokens-macos/hcdark/tokens-shadow.json';

const getMacOsAliasTokensTable = [
  ['light', true, macOSLightHCAliasTokens],
  ['light', false, macOSLightAliasTokens],
  ['dark', true, macOSDarkHCAliasTokens],
  ['dark', false, macOSDarkAliasTokens],
  ['highContrast', null, null],
];

const getMacOsAliasShadowTokensTable = [
  ['light', true, macOSLightHCShadowTokens.shadow],
  ['light', false, macOSLightShadowTokens.shadow],
  ['dark', true, macOSDarkHCShadowTokens.shadow],
  ['dark', false, macOSDarkShadowTokens.shadow],
  ['highContrast', null, null],
];

describe('apple-theme tests', () => {
  // it('createAppleTheme test', () => {
  //   // expect(createAppleTheme()).toEqual(createDefaultTheme());
  //   expect(true).toBe(true);
  //   console.log(createAppleTheme());
  //   console.log(createDefaultTheme());
  // });

  it.concurrent.each(getMacOsAliasTokensTable)('getMacOSAliasTokens test', async (mode: any, isHighContrast: any, tokens: any) => {
    if (mode !== 'highContrast') {
      expect(getMacOSAliasTokens(mode, isHighContrast)).toBe(tokens);
    } else {
      expect(() => getMacOSAliasTokens(mode, isHighContrast)).toThrow();
    }
  });

  it.concurrent.each(getMacOsAliasShadowTokensTable)('getMacOSShadowTokens test', async (mode: any, isHighContrast: any, tokens: any) => {
    if (mode !== 'highContrast') {
      expect(getMacOSShadowTokens(mode, isHighContrast)).toBe(tokens);
    } else {
      expect(() => getMacOSShadowTokens(mode, isHighContrast)).toThrow();
    }
  });
});
