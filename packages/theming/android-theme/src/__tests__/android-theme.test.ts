import { createAndroidTheme } from '../createAndroidTheme';
import { getAndroidTheme } from '../androidTheme';
import { getAndroidPalette, androidPaletteDark, androidPaletteLight } from '../colorsBase';
import { ThemeReference } from '@fluentui-react-native/theme';

const themeOptions = { paletteName: 'TaskPane', appearance: 'dynamic' };

beforeAll(() => {
  jest.mock('react-native/Libraries/Utilities/Appearance', () => ({
    getColorScheme: () => 'dark',
    addChangeListener: () => null,
  }));
});

describe('android-theme tests', () => {
  it('getAndroidPalette test', () => {
    expect(getAndroidPalette('light')).toEqual(androidPaletteLight);
    expect(getAndroidPalette('dark')).toEqual(androidPaletteDark);
  });

  it('createAndroidTheme test', () => {
    const tt = new ThemeReference({} as any, () => {
      return getAndroidTheme('dark');
    });
    const rr = createAndroidTheme(themeOptions);

    expect(JSON.stringify({ ...rr })).toBe(JSON.stringify({ ...tt }));
  });
});
