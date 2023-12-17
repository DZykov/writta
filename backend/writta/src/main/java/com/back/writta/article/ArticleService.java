package com.back.writta.article;

import com.back.writta.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

import static com.back.writta.utils.utilitis.getAlphaNumericString;

@Service
@RequiredArgsConstructor
public class ArticleService {

    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;

    public Article createArticle(Article article) {
        if (articleRepository.getArticleByURL(article.getUrl()).isPresent()){
            return null;
        }
        String short_url = getAlphaNumericString(5);
        while (articleRepository.getArticleByShortURL(short_url).isPresent()) {
            short_url = getAlphaNumericString(5);
        }
        article.setShortUrl(short_url);
        LocalDate localDate = LocalDate.now();
        article.setPublishedDate(localDate);
        articleRepository.save(article);
        return article;
    }

    public Article updateArticle(Article article, Integer id) {
        if (articleRepository.getArticleById(id).isEmpty()){
            return null;
        }
        Article article1 = articleRepository.getArticleById(id).get();
        LocalDate localDate = LocalDate.now();
        article1.setPublishedDate(localDate);
        article1.setArticlePhoto(article.getArticlePhoto());
        article1.setArticleName(article.getArticleName());
        article1.setContext(article.getContext());
        articleRepository.save(article1);
        return article;
    }

    public void deleteArticle(Integer id) {
        if (articleRepository.getArticleById(id).isEmpty()){
            return;
        }
        articleRepository.deleteArticleById(id);
    }

    public Article getArticle(Integer id) {
        if (articleRepository.getArticleById(id).isEmpty()){
            return null;
        }
        Article article = articleRepository.getArticleById(id).get();
        article.setViews(article.getViews()+1);
        article.setReads(article.getReads()+1);
        articleRepository.save(article);
        return article;
    }

    public Article getShortArticle(Integer id) {
        if (articleRepository.getArticleById(id).isEmpty()){
            return null;
        }
        Article article = articleRepository.getArticleById(id).get();
        article.setViews(article.getViews()+1);
        article.setContext("");
        articleRepository.save(article);
        return article;
    }

    public void likeArticle(Integer article_id, Integer user_id) {
        if (articleRepository.getArticleById(article_id).isEmpty()){
            return;
        }
        if (userRepository.getUserById(user_id).isEmpty()){
            return;
        }
        Article article = articleRepository.getArticleById(article_id).get();
        if (article.getLikedUsers().contains(user_id)){
            article.setLikes(article.getLikes()-1);
            article.getLikedUsers().remove(Integer.valueOf(user_id));
        } else {
            article.setLikes(article.getLikes()+1);
            article.getLikedUsers().add(user_id);
            if (article.getDislikedUsers().contains(user_id)) {
                article.setDislikes(article.getDislikes()-1);
                article.getDislikedUsers().remove(Integer.valueOf(user_id));
            }
        }
        articleRepository.save(article);
    }
}
