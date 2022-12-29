import {ReactNode} from "react";

export interface IModalType {
    refOutSide: RefObject<HTMLDivElement>;
    children?: ReactNode;
    title: string;
    visible: boolean;
    onClose: () => void;
}