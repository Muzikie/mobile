import {StyleSheet} from 'react-native';
import {boxes, colors, fontFamilies, fontSizes} from '../../../config/stylesGuides';

const styles = {
  wrapper: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingBottom: boxes.doublePadding,
  },
  image: {
    marginTop: -1 * boxes.boxPadding,
    marginBottom: boxes.boxPadding,
  },
  descriptionWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
  },
  description: {
    fontSize: fontSizes.h3,
    color: colors.light.grey,
    lineHeight: 30,
    marginBottom: 0,
    paddingBottom: 0,
  },
  bold: {
    fontSize: fontSizes.h3,
    color: colors.light.purple,
    fontFamily: fontFamilies.poppinsMedium,
    lineHeight: 30,
    marginBottom: 0,
    paddingBottom: 0,
  },
};

export default StyleSheet.create(styles);
