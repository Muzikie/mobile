import {StyleSheet} from 'react-native';
import {boxes, colors} from '../../config/stylesGuides';

const styles = {
  container: {
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 12,
  },
  rowNoWrap: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  title: {
    fontWeight: 500,
    height: 40,
  },
  box: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: boxes.thumbnailRadius,
    borderColor: colors.light.paleGrey,
    borderWidth: 8,
  },
  selected: {
    backgroundColor: colors.light.fadeSuccess,
    borderColor: colors.light.fadeSuccess,
  },
};

export default StyleSheet.create(styles);
