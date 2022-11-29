// Types
import { IModalType } from '../../../types/defaultModal';

// Styles
import styles from './defaultModal.module.scss';


const DefaultModal = (props: IModalType) => {
    const {visible, refOutSide, title, children} = props;

    return (
        <>
            {visible && (
                <div ref={refOutSide} className={`${styles['modal-overlay']} shadow-2xl`}>
                    <div onClick={(e) => e.stopPropagation()} className={styles['modal-box']}>
                        <h2 className={styles['modal-title']}>{title}</h2>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}

export default DefaultModal;
