import { useState, useEffect } from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const GoTopBtnStyled = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 8px 15px;
    background-color: #333;
    color: #fff;
    border-radius: 50%;
    border: 1px solid #fff;
`;

export default function GoTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const shouldBeVisible = scrollY > 700;

            setIsVisible(shouldBeVisible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {isVisible && (
                <GoTopBtnStyled onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </GoTopBtnStyled>
            )}
        </div>
    );
}
