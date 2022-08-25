import { createAppleTheme } from '../createAppleTheme';
import { ThemeReference } from '@fluentui-react-native/theme';
import { createDefaultTheme } from '@fluentui-react-native/default-theme';
import { createMacOSColorAliasTokens, createMacOSShadowAliasTokens } from '../createMacOSAliasTokens';
import { mapPipelineToTheme, mapPipelineToShadow } from '@fluentui-react-native/theming-utils';
import { getMacOSAliasTokens, getMacOSShadowTokens } from '../getMacOSTokens';
import macOSLightAliasTokens from '@fluentui-react-native/design-tokens-macos/light/tokens-aliases.json';
import macOSDarkAliasTokens from '@fluentui-react-native/design-tokens-macos/dark/tokens-aliases.json';
import macOSLightHCAliasTokens from '@fluentui-react-native/design-tokens-macos/hclight/tokens-aliases.json';
import macOSDarkHCAliasTokens from '@fluentui-react-native/design-tokens-macos/hcdark/tokens-aliases.json';
import macOSLightShadowTokens from '@fluentui-react-native/design-tokens-macos/light/tokens-shadow.json';
import macOSDarkShadowTokens from '@fluentui-react-native/design-tokens-macos/dark/tokens-shadow.json';
import macOSLightHCShadowTokens from '@fluentui-react-native/design-tokens-macos/hclight/tokens-shadow.json';
import macOSDarkHCShadowTokens from '@fluentui-react-native/design-tokens-macos/hcdark/tokens-shadow.json';
import { getIsHighContrast, setIsHighContrast } from '../appleHighContrast.macos';

const macOsAliasTokensTable = [
  ['light', true, macOSLightHCAliasTokens],
  ['light', false, macOSLightAliasTokens],
  ['dark', true, macOSDarkHCAliasTokens],
  ['dark', false, macOSDarkAliasTokens],
  ['highContrast', null, null],
];

const macOsAliasShadowTokensTable = [
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

  it.concurrent.each(macOsAliasTokensTable)('getMacOSAliasTokens test', async (mode: any, isHighContrast: any, tokens: any) => {
    if (mode !== 'highContrast') {
      expect(getMacOSAliasTokens(mode, isHighContrast)).toBe(tokens);
    } else {
      expect(() => getMacOSAliasTokens(mode, isHighContrast)).toThrow();
    }
  });

  it.concurrent.each(macOsAliasShadowTokensTable)('getMacOSShadowTokens test', async (mode: any, isHighContrast: any, tokens: any) => {
    if (mode !== 'highContrast') {
      expect(getMacOSShadowTokens(mode, isHighContrast)).toBe(tokens);
    } else {
      expect(() => getMacOSShadowTokens(mode, isHighContrast)).toThrow();
    }
  });

  it('isHighContrastEnabled test', () => {
    setIsHighContrast(false);
    expect(getIsHighContrast()).toBe(false);
    setIsHighContrast(true);
    expect(getIsHighContrast()).toBe(true);
  });

  it.concurrent.each(macOsAliasTokensTable)('createMacOSColorAliasTokens test', async (mode: any, isHighContrast: any, tokens: any) => {
    if (mode !== 'highContrast') {
      expect(createMacOSColorAliasTokens(mode, isHighContrast)).toEqual(mapPipelineToTheme(tokens));
    } else {
      expect(() => createMacOSColorAliasTokens(mode, isHighContrast)).toThrow();
    }
  });

  it.concurrent.each(macOsAliasShadowTokensTable)(
    'createMacOSShadowAliasTokens test',
    async (mode: any, isHighContrast: any, tokens: any) => {
      if (mode !== 'highContrast') {
        expect(createMacOSShadowAliasTokens(mode, isHighContrast)).toEqual(mapPipelineToTheme(tokens));
      } else {
        expect(() => createMacOSShadowAliasTokens(mode, isHighContrast)).toThrow();
      }
    },
  );
});
