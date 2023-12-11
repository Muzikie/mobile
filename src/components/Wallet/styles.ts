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
    backgroundColor: colors[theme].neutralZero,
    borderRadius: boxes.boxBorderRadius,
  },
  copied: {
    position: 'absolute',
    top: boxes.boxPadding - 1,
    right: boxes.boxPadding,
    color: colors[theme].primaryStrong,
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  label: {
    color: colors[theme].neutralMild,
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
    color: colors[theme].primaryStrong,
    letterSpacing: 1,
    textAlign: 'center',
  },
  balanceContainer: {
    marginTop: boxes.doublePadding,
    paddingBottom: boxes.elementPadding,
  },
  balance: {
    color: colors[theme].primaryStrong,
    textAlign: 'center',
  },
});

export default styles;
