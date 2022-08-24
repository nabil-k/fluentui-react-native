import { createAppleTheme } from '../createAppleTheme';
import { ThemeReference } from '@fluentui-react-native/theme';
import { createDefaultTheme } from '@fluentui-react-native/default-theme';

describe('apple-theme tests', () => {
  it('createAppleTheme test', () => {
    expect(createAppleTheme).toBe(new ThemeReference(createDefaultTheme()));
  });
});
