import {StyleSheet} from 'react-native';
import {
  boxes,
  colors,
  fontFamilies,
  fontSizes,
} from '../../../config/stylesGuides';

const styles = {
  container: {
    width: '100%',
    marginTop: boxes.boxPadding,
    marginBottom: boxes.boxPadding,
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  info: {
    paddingLeft: boxes.elementPadding,
  },
  title: {
    width: '100%',
    color: colors.light.purple,
    fontSize: fontSizes.h4,
    fontFamily: fontFamilies.poppinsMedium,
    paddingBottom: 4,
  },
  submitter: {
    color: colors.light.lightGrey,
    fontSize: fontSizes.base,
    fontFamily: fontFamilies.poppinsRegular,
  },
  artist: {
    color: colors.light.darkGrey,
    fontSize: fontSizes.base,
    fontFamily: fontFamilies.poppinsRegular,
  },
  link: {
    flex: 1,
    height: '100%',
  },
  thumbnail: {
    width: 66,
    height: 66,
    borderRadius: boxes.thumbnailRadius,
    // marginRight: boxes.boxPadding,
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    color: colors.light.darkGrey,
    fontSize: fontSizes.base,
    fontFamily: fontFamilies.poppinsRegular,
  },
  rankWrapper: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  hashTag: {
    color: colors.light.purple,
    fontSize: fontSizes.h4,
    fontFamily: fontFamilies.poppinsRegular,
    paddingTop: 3,
    paddingRight: 2,
  },
  rank: {
    color: colors.light.purple,
    fontSize: fontSizes.h1,
    fontFamily: fontFamilies.poppinsRegular,
  },
};

export default StyleSheet.create(styles);
