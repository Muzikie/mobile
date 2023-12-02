import {StyleSheet} from 'react-native';
import {boxes, colors} from '../../config/stylesGuides';

const styles = {
  wrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 100,
  },
  container: {
    padding: boxes.boxPadding,
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
    width: '100%',
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
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
    marginBottom: 20,
    fontWeight: 600,
  },
  description: {
    textAlign: 'left',
    marginBottom: 20,
    lineHeight: 20,
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
