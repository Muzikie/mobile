import {StyleSheet} from 'react-native';
import {boxes, colors, fontFamilies} from '../../config/stylesGuides';

const styles = {
  wrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 100,
  },
  container: {
    paddingVertical: boxes.boxPadding,
    paddingHorizontal: boxes.boxPadding * 1.5,
    borderTopLeftRadius: boxes.boxBorderRadius,
    borderTopRightRadius: boxes.boxBorderRadius,
    backgroundColor: colors.light.white,
  },
  shadow: {
    shadowColor: colors.light.purple,
    shadowOffset: {
      width: 0,
      height: (-1 * boxes.shadowHeight) / 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: boxes.shadowHeight,
  },
  closeButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  closeButton: {
    width: 35,
    height: 35,
    backgroundColor: colors.light.fadeBeige,
    borderRadius: boxes.thumbnailRadius,
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    textAlign: 'left',
    marginBottom: 5,
    marginTop: boxes.elementPadding,
    color: colors.light.purple,
    fontFamilies: fontFamilies.poppinsSemiBold,
    maxWidth: '90%',
  },
  description: {
    textAlign: 'left',
    marginBottom: 20,
    lineHeight: 20,
    color: colors.light.darkGrey,
    maxWidth: '100%',
  },
  actionBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  secondaryButton: {
    maxWidth: '40%',
    width: 120,
  },
  primaryButton: {
    maxWidth: '40%',
    width: 120,
  },
};

export default StyleSheet.create(styles);
