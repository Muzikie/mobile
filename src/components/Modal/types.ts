import {ModalContent} from '../../context/modalContext/types';

export interface ModalProps {
  data: ModalContent | null;
  hide: () => void;
  isVisible: boolean;
}
