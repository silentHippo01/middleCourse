import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextSize } from "shared/ui/Text/Text";
import { useCallback } from 'react';
import { AddCommentForm } from "features/addCommentForm";
import { CommentList } from "entities/Comment";
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';

interface ArticleDetailsCommentsProps {
    id: string;
    className?: string;
}

export const ArticleDetailsComments = (props: ArticleDetailsCommentsProps) => {
    const { 
        className,
        id,
     } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch]);
    
    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    })

    return (
        <VStack gap='16' className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Комментарии: ')}
            />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList isLoading={commentsIsLoading} comments={comments} />
        </VStack>
    );
};