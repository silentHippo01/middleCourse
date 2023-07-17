import { useTranslation } from "react-i18next";
import cls from './ArticleImageBlockComponent.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { ArticleImageBlock } from "../../model/types/article";
import { Text, TextAlign } from "shared/ui/Text/Text";

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {

    const {
        className,
        block
    } = props;

    const {t} = useTranslation();

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [])}>
            <img src={block.src} className={cls.img} alt={block.title}/>
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER}/>
            )}
        </div>
    );
});