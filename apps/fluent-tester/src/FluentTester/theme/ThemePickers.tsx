import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@fluentui-react-native/experimental-text';
import { lightnessOptions, testerTheme } from './CustomThemes';
import { themeChoices, ThemeNames } from './applyTheme';
import { brandOptions, OfficeBrand } from './applyBrand';
import { ThemeOptions } from '@fluentui-react-native/theme-types';
import { MenuPicker } from '../TestComponents/Common/MenuPicker';

export const themePickerStyles = StyleSheet.create({
  pickerRoot: {
    flexDirection: 'row',
  },

  picker: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
  },

  dropdown: {
    height: 30,
    width: 120,
    fontSize: 12,
  },
});

type PartPickerEntry = { label: string; value: string };

type PartPickerProps = {
  initial: string;
  contents: PartPickerEntry[];
  onChange: (value: string) => void;
};

export const PartPicker: React.FunctionComponent<PartPickerProps> = (props: PartPickerProps) => {
  const { initial, contents, onChange } = props;
  const [selected, setSelected] = React.useState(initial);
  const onValueChange = React.useCallback(
    (label: string, value: string) => {
      setSelected(label);
      onChange(value);
      console.log(value);
    },
    [setSelected, onChange],
  );

  return <MenuPicker selected={selected} style={themePickerStyles.dropdown} onChange={onValueChange} collection={contents} />;
};

const PickerLabel = Text.customize({ variant: 'bodySemibold' });

export const ThemePickers: React.FunctionComponent = () => {
  const onBrandChange = React.useCallback((newBrand: string) => {
    testerTheme.brand = newBrand as OfficeBrand;
  }, []);

  const onThemeSelected = React.useCallback((newTheme: string) => {
    testerTheme.themeName = newTheme as ThemeNames;
  }, []);

  const onAppearanceChange = React.useCallback((newAppearance: string) => {
    testerTheme.appearance = newAppearance as ThemeOptions['appearance'];
  }, []);

  return (
    <View style={themePickerStyles.pickerRoot}>
      <View style={themePickerStyles.picker}>
        <PickerLabel>Theme: </PickerLabel>
        <PartPicker initial={testerTheme.themeName} onChange={onThemeSelected} contents={themeChoices} />
      </View>

      <View style={themePickerStyles.picker}>
        <PickerLabel>Light/Dark: </PickerLabel>
        <PartPicker initial={testerTheme.appearance} onChange={onAppearanceChange} contents={lightnessOptions} />
      </View>

      <View style={themePickerStyles.picker}>
        <PickerLabel>Brand: </PickerLabel>
        <PartPicker initial={testerTheme.brand} onChange={onBrandChange} contents={brandOptions} />
      </View>
    </View>
  );
};
