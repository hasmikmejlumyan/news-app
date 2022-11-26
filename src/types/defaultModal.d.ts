import {ReactNode} from "react";

export interface ModalType {
    refOutSide: RefObject<HTMLDivElement>;
    children?: ReactNode;
    visible: boolean;
}