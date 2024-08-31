import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext'

export const Private = () => {
    const {store, actions} = useContext(Context);

    useEffect (() => {
        actions.getInvoices();
    }, [])

    return (
        <>
            <div></div>

            <button
                onClick={() => {actions.logout()}}
            >Logout</button>
        </>
    );
}