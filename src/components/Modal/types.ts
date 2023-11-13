import {ModalContent} from '../../context/modalContext/types';

export interface ModalProps {
  data: ModalContent;
  hide: () => void;
}
