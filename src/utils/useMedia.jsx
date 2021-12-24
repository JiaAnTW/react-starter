import { useState, useEffect, useCallback } from 'react';

const deviceSize = {
    tablet: 768,
    mobile: 576,
};

function useMedia() {
    const [device, setDevice] = useState('PC');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleWindowWidth = useCallback(() => {
        setWindowWidth(window.innerWidth);
    }, [setWindowWidth]);

    useEffect(() => {
        window.addEventListener('resize', handleWindowWidth);
        return () => {
            window.removeEventListener('resize', handleWindowWidth);
        };
    }, []);

    useEffect(() => {
        const { tablet, mobile } = deviceSize;
        if (windowWidth > tablet && device !== 'PC') setDevice('PC');
        else if (windowWidth <= tablet && windowWidth > 576 && device !== 'tablet')
            setDevice('tablet');
        else if (windowWidth <= mobile && device !== 'mobile') setDevice('mobile');
    }, [windowWidth, device]);

    return device;
}

export default useMedia;
