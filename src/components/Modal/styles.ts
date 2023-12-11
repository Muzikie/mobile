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
    paddingBottom: boxes.boxPadding,
    paddingHorizontal: boxes.boxPadding * 1.5,
    borderTopLeftRadius: boxes.boxBorderRadius,
    borderTopRightRadius: boxes.boxBorderRadius,
    backgroundColor: colors[theme].neutralZero,
    borderTopWidth: 1,
    borderTopColor: colors[theme].neutralZero,
  },
  shadow: {
    shadowColor: colors[theme].primaryStrong,
    shadowOffset: {
      width: 0,
      height: (-1 * boxes.shadowHeight) / 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: boxes.shadowHeight,
  },
  closeButton: {
    width: 35,
    height: 35,
    backgroundColor: colors[theme].secondaryMild,
    borderRadius: boxes.thumbnailRadius,
    marginTop: boxes.elementPadding,
    position: 'absolute',
    top: boxes.elementPadding,
    right: boxes.boxPadding,
    zIndex: 10,
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  actionBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});

export default styles;
