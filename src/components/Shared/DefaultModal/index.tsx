// Types
import { ModalType } from '../../../types/defaultModal';

// Styles
import styles from './defaultModal.module.scss';


const DefaultModal = (props: ModalType) => {
    const {visible, refOutSide, children} = props;

    return (
        <>
            {visible && (
                <div ref={refOutSide} className={styles['modal-overlay']}>
                    <div onClick={(e) => e.stopPropagation()} className={styles['modal-box']}>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}

export default DefaultModal;
