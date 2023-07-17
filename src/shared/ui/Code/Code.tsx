import { ReactNode, memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Code.module.scss'
import { Button, ButtonTheme } from "../Button/Button";
import CopyIcon from 'shared/assets/icon/copyBtnIcon.svg';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {

    const {
        className,
        text,
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text])


    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
                <CopyIcon className={cls.copyIcon}/>
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
