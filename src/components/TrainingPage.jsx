import React, { useState } from 'react';
import { Button, Progress, usePlatform, ButtonGroup, Div } from '@vkontakte/vkui';
import article1Pages from './articles/article-1';
import article2Pages from './articles/article-2';
import article3Pages from './articles/article-3';
import article4Pages from "./articles/article-4";

const TrainingPage = ({ material, openModal, onFinish, selectedBanner }) => {
    const [progress, setProgress] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    usePlatform();

    const handleNextPage = () => {
        let pages;
        switch (selectedBanner) {
            case 1:
                pages = article1Pages;
                break;
            case 2:
                pages = article2Pages;
                break;
            case 3:
                pages = article3Pages;
                break;
            case 4:
                pages = article4Pages;
                break;
            default:
                pages = article1Pages;
        }

        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
            setProgress(((currentPage + 1) / (pages.length - 1)) * 100);
        }
    };

    const handleGoBack = () => {
        let pages;
        switch (selectedBanner) {
            case 1:
                pages = article1Pages;
                break;
            case 2:
                pages = article2Pages;
                break;
            case 3:
                pages = article3Pages;
                break;
            case 4:
                pages = article4Pages;
                break;
            default:
                pages = article1Pages;
        }

        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
            setProgress(((currentPage - 1) / (pages.length - 1)) * 100);
        }
    };

    const handleFinish = () => {
        openModal('congratulation');
    };

    const pages = (() => {
        switch (selectedBanner) {
            case 1:
                return article1Pages;
            case 2:
                return article2Pages;
            case 3:
                return article3Pages;
            case 4:
                return article4Pages;

            default:
                return article1Pages;
        }
    })();

    const isLastPage = currentPage === pages.length - 1;

    return (
        <Div>
            <Progress value={progress} />
            <div>
                {React.createElement(pages[currentPage], { onNextPage: handleNextPage })}
            </div>
            <ButtonGroup style={{ marginTop: "10px" }} mode="horizontal" gap="m" stretched>
                {currentPage > 0 && (
                    <Button size="l" mode="outline" onClick={handleGoBack}>Назад</Button>
                )}
                {!isLastPage && (
                    <Button size="l" mode="commerce" onClick={handleNextPage}>Читать далее</Button>
                )}
                {isLastPage && (
                    <Button size="l" mode="primary" onClick={handleFinish}>Завершить</Button>
                )}
            </ButtonGroup>
        </Div>
    );
};

export default TrainingPage;
