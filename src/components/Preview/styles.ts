import {StyleSheet} from 'react-native';
import {
  boxes,
  colors,
  fontSizes,
  fontFamilies,
} from '../../config/stylesGuides';

const styles = {
  wrapper: {
    borderWidth: 1,
    borderColor: 'transparent',
    marginTop: boxes.boxPadding,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: boxes.boxPadding,
    borderWidth: 1,
    borderColor: 'transparent',
    paddingBottom: boxes.boxPadding / 3,
  },
  image: {
    height: 70,
    width: 70,
    borderWidth: 1,
    borderColor: colors.light.white,
    borderRadius: boxes.thumbnailRadius,
    overflow: 'hidden',
  },
  placeholder: {
    marginTop: boxes.boxPadding,
    marginBottom: boxes.elementPadding,
  },
  title: {
    width: '100%',
    color: colors.light.purple,
    fontSize: fontSizes.h4,
    fontFamily: fontFamilies.poppinsMedium,
    paddingBottom: 4,
  },
  album: {
    color: colors.light.lightGrey,
    fontSize: fontSizes.base,
    fontFamily: fontFamilies.poppinsRegular,
    paddingLeft: boxes.elementPadding / 2,
  },
  artist: {
    color: colors.light.darkGrey,
    fontSize: fontSizes.base,
    fontFamily: fontFamilies.poppinsRegular,
    paddingLeft: boxes.elementPadding / 2,
  },
};

export default StyleSheet.create(styles);
