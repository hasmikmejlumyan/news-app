import { useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";

// Shared
import DefaultModal from '../../Shared/DefaultModal';

// Hooks
import useOnClickOutside from "../../../Hooks/useOnClickOutside";


const Login = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const ref = useRef<HTMLDivElement>(null);

    const action = String(searchParams.get('query'));
    const visible = /^(login)$/i.test(action);

    const clickOutsideHandler = () => {
        setSearchParams();
    };

    useOnClickOutside(ref, clickOutsideHandler);


    return (
        <>
            <Link to={'/homepage/?query=login'}>Log in</Link>

            <DefaultModal visible={visible} refOutSide={ref}>
                <form>
                    <input type='text'/>
                    <button>submit</button>
                </form>
            </DefaultModal>
        </>
    )
};

export default Login;