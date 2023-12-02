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
  titleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  title: {
    fontWeight: 500,
  },
  state: {
    textAlign: 'right',
    paddingRight: boxes.elementPadding,
    color: colors.light.darkGrey,
  },
  iconWrapper: {
    backgroundColor: colors.light.paleGrey,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: boxes.thumbnailRadius,
  },
  icon: {},
};

export default StyleSheet.create(styles);
