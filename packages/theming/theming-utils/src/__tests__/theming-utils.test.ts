import { getCurrentAppearance } from '../';
import { mapPipelineToTheme, mapFontPipelineToTheme } from '../mapPipelineToTheme';
import { mapPipelineToShadow } from '../mapPipelineToShadow';
import lightAliasTokens from '@fluentui-react-native/design-tokens-windows/light/tokens-aliases.json';
import darkAliasTokens from '@fluentui-react-native/design-tokens-windows/dark/tokens-aliases.json';
import { hcAliasTokens } from '../../../default-theme/src/highContrast/tokens-alias';
import colorfulAliasTokens from '@fluentui-react-native/design-tokens-win32/colorful/tokens-aliases.json';
import darkGrayAliasTokens from '@fluentui-react-native/design-tokens-win32/darkgray/tokens-aliases.json';
import blackAliasTokens from '@fluentui-react-native/design-tokens-win32/black/tokens-aliases.json';
import lightShadowTokens from '@fluentui-react-native/design-tokens-windows/light/tokens-shadow.json';
import darkShadowTokens from '@fluentui-react-native/design-tokens-windows/dark/tokens-shadow.json';
import hcShadowTokens from '@fluentui-react-native/design-tokens-win32/hc/tokens-shadow.json';

const fallBackAppearance = 'light';

const getCurrentAppearanceTable = [
  ['light', 'light'],
  ['dark', 'dark'],
  ['highContrast', 'highContrast'],
  ['dynamic', 'dark'],
  [undefined, fallBackAppearance],
];

beforeAll(() => {
  jest.mock('react-native/Libraries/Utilities/Appearance', () => ({
    getColorScheme: () => 'dark',
  }));
});

it.concurrent.each(getCurrentAppearanceTable)('getCurrentAppearance(%s, %s)', async (appearance: any, finalAppearance: any) => {
  expect(getCurrentAppearance(appearance, fallBackAppearance)).toBe(finalAppearance);
});

describe('mapPipelineToTheme test', () => {
  it('lightAliasTokens', () => {
    const aliasColorTokens = mapPipelineToTheme(lightAliasTokens);
    expect(aliasColorTokens).toMatchSnapshot();
  });

  it('darkAliasTokens', () => {
    const aliasColorTokens = mapPipelineToTheme(darkAliasTokens);
    expect(aliasColorTokens).toMatchSnapshot();
  });

  it('hcAliasTokens', () => {
    const aliasColorTokens = mapPipelineToTheme(hcAliasTokens);
    expect(aliasColorTokens).toMatchSnapshot();
  });
});

describe('mapFontPipelineToTheme test', () => {
  it('colorfulAliasTokens', () => {
    const fontTheme = mapFontPipelineToTheme(colorfulAliasTokens);
    expect(fontTheme).toMatchSnapshot();
  });

  it('darkGrayAliasTokens', () => {
    const fontTheme = mapFontPipelineToTheme(darkGrayAliasTokens);
    expect(fontTheme).toMatchSnapshot();
  });

  it('blackAliasTokens', () => {
    const fontTheme = mapFontPipelineToTheme(blackAliasTokens);
    expect(fontTheme).toMatchSnapshot();
  });

  it('hcAliasTokens', () => {
    const fontTheme = mapFontPipelineToTheme(hcAliasTokens);
    expect(fontTheme).toMatchSnapshot();
  });
});

describe('mapPipelineToShadow test', () => {
  it('lightShadowTokens.shadow', () => {
    const fontTheme = mapPipelineToShadow(lightShadowTokens.shadow);
    expect(fontTheme).toMatchSnapshot();
  });

  it('darkShadowTokens.shadow', () => {
    const fontTheme = mapPipelineToShadow(darkShadowTokens.shadow);
    expect(fontTheme).toMatchSnapshot();
  });

  it('hcShadowTokens.shadow', () => {
    const fontTheme = mapPipelineToShadow(hcShadowTokens.shadow);
    expect(fontTheme).toMatchSnapshot();
  });
});
