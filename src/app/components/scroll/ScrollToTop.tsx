import React, {useEffect, Fragment} from 'react';
import {withRouter} from 'react-router-dom';

function ScrollToTop({history, children}: any) {

    useEffect(() => {
        const unListen = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unListen();
        }
    }, [history]);

    return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);