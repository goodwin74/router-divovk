import React, {createContext, useCallback, useContext, useEffect, useRef, useState} from 'react';
import styles from './index.module.css';

// Создаем контекст
export const DIVOVKContext = createContext();

// Провайдер контекста
export const DIVOVKProvider = ({ children }) => {
    const [blockHistory, setBlockHistory] = useState([]);
    const previousBlockHistoryRef = useRef(blockHistory); // Ссылка на предыдущее значение

    let qS = useCallback((selector) => {
        return document.querySelector(selector);
    }, []);
    let animList = {
        default: {
            open: (id)=>{
                qS(`#${id}`).style.display='block';
                setTimeout(()=>{
                    qS(`#${id}`).style.zIndex = previousBlockHistoryRef.current.length+1;
                    qS(`#${id}`).style.transform='translate(0%,0%)';
                    qS(`#${id}`).children[0].style.transform='translate(0%,0%)';
                },100);
            },
            close:(id)=>{
                qS(`#${id}`).children[0].style.transform='';
                setTimeout(()=>{
                    qS(`#${id}`).style.transform='';
                    qS(`#${id}`).style.zIndex='-1';
                    qS(`#${id}`).style.display='none';
                },400);
            },
            init:(id,z)=>{
                qS(`#${id}`).style.display='block';
                qS(`#${id}`).style.zIndex = z;
                qS(`#${id}`).style.transform='translate(0%,0%)';
                qS(`#${id}`).children[0].style.transform='translate(0%,0%)';
            }
        }
    };

    const updateHash = (history) => {
        const hash = history.join('/');
        window.location.hash = hash || '';
    };

    const showBlock = (id) => {
        const newHistory = [...previousBlockHistoryRef.current, id];
        updateHash(newHistory);
    };

    const getBlockStyle = (id) => {
        const index = blockHistory.indexOf(id);
        if (index === -1) {
            return {};
        }
        return {
            zIndex: index + 1,
        };
    };

    // Реакция на изменения в URL
    useEffect(() => {
        const handleHashChange = (init) => {
            init = init || false;
            const hash = window.location.hash.slice(1); // Убираем символ #
            const historyFromHash = hash.split('/').filter(Boolean); // Разделяем по "/"

            // Определяем, что произошло: открытие или закрытие
            if (historyFromHash.length > previousBlockHistoryRef.current.length) {
                animList['default'].open(historyFromHash[historyFromHash.length-1]);
            } else if (historyFromHash.length < previousBlockHistoryRef.current.length) {
                animList['default'].close(previousBlockHistoryRef.current[previousBlockHistoryRef.current.length-1]);
            }
            if(init===true && previousBlockHistoryRef.current.length > 0){
                previousBlockHistoryRef.current.forEach((id,i)=>{
                    animList['default'].init(id,i+2);
                });

            }
            setBlockHistory(historyFromHash);

            // Обновляем ссылку на предыдущее значение
            previousBlockHistoryRef.current = historyFromHash;
        };

        // Инициализация при первой загрузке
        const initialHash = window.location.hash.slice(1);
        previousBlockHistoryRef.current = initialHash.split('/').filter(Boolean); // Устанавливаем начальное значение
        handleHashChange(true);

        // Подписываемся на изменения hash
        window.addEventListener('hashchange', handleHashChange);

        // Очистка подписки при размонтировании компонента
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    // Значение контекста
    const contextValue = {
        blockHistory,
        showBlock,
        getBlockStyle,
    };

    return (
        <DIVOVKContext.Provider value={contextValue}>
            {children}
        </DIVOVKContext.Provider>
    );
};

export const ActivityBlock = ({id, children, activityStyle, activityContStyle}) => {

    return (
        <>
            <div id={id} className={styles.activity} style={activityStyle}>
                <div className={styles.activityCont} style={activityContStyle}>
                    {children}
                </div>
            </div>
        </>
    )
}


export const BtnToBlock = ({id,toId,children,style,className}) => {
    const {showBlock} = useContext(DIVOVKContext);
    return (
        <>
            <button id={id} style={style} className={className} onClick={()=>showBlock(toId)}>{children}</button>
        </>
    )
}

