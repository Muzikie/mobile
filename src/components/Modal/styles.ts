import {Themes} from '../../context/presetsContext/types';
import {boxes, colors, fontFamilies} from '../../config/stylesGuides';

const styles = (theme: Themes) => ({
  modal: {
    margin: 0,
    position: 'relative',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
  },
  container: {
    width: '100%',
    paddingVertical: boxes.boxPadding,
    paddingHorizontal: boxes.boxPadding * 1.5,
    borderTopLeftRadius: boxes.boxBorderRadius,
    borderTopRightRadius: boxes.boxBorderRadius,
    backgroundColor: colors[theme].white,
  },
  shadow: {
    shadowColor: colors[theme].purple,
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
    backgroundColor: colors[theme].fadeBeige,
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
    color: colors[theme].purple,
    fontFamily: fontFamilies.poppinsSemiBold,
    maxWidth: '90%',
  },
  description: {
    textAlign: 'left',
    marginBottom: 20,
    lineHeight: 20,
    color: colors[theme].darkGrey,
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
});

export default styles;
