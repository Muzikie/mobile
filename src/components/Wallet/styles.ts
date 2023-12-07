import {Themes} from '../../context/presetsContext/types';
import {boxes, colors} from '../../config/stylesGuides';

const styles = (theme: Themes) => ({
  wrapper: {
    width: '100%',
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
    alignItems: 'center',
    marginTop: boxes.boxPadding,
  },
  info: {
    flex: 1,
    backgroundColor: colors[theme].white,
    borderRadius: boxes.boxBorderRadius,
  },
  copied: {
    position: 'absolute',
    top: boxes.boxPadding - 1,
    right: boxes.boxPadding,
    color: colors[theme].purple,
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  label: {
    color: colors[theme].grey,
    paddingBottom: boxes.elementPadding,
    textAlign: 'center',
  },
  addressContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: boxes.boxPadding,
    paddingBottom: boxes.doublePadding,
  },
  address: {
    color: colors[theme].purple,
    letterSpacing: 1,
    textAlign: 'center',
  },
  balanceContainer: {
    marginTop: boxes.doublePadding,
    paddingBottom: boxes.elementPadding,
  },
  balance: {
    color: colors[theme].purple,
    textAlign: 'center',
  },
});

export default styles;
