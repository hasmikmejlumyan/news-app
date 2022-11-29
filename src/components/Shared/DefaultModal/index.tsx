// Types
import { IModalType } from '../../../types/defaultModal';

// images
import closeIcon from '../../../assets/images/close.svg';

// Styles
import styles from './defaultModal.module.scss';


const DefaultModal = (props: IModalType) => {
    const {visible, refOutSide, title, onClose, children} = props;

    return (
        <>
            {visible && (
                <div ref={refOutSide} className={`${styles['modal-overlay']} shadow-2xl`}>
                    <div onClick={(e) => e.stopPropagation()} className={styles['modal-box']}>
                        <h2 className={styles['modal-title']}>{title}</h2>
                        <span onClick={onClose} className={styles['close-modal-box']}><img src={closeIcon} /></span>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}

export default DefaultModal;
