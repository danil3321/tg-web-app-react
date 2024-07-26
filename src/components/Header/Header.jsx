import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css'



const Header = () => {
    const {user, onClose, tg} = useTelegram();

    return (

        <div className={"header"}>
            <button onClick={onClose}>Закрыть</button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;