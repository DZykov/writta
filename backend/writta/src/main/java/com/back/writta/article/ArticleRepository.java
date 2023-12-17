package com.back.writta.article;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Integer>  {

    @Modifying
    @Transactional
    @Query(value = "DELETE from article d where d.id=:id",
            nativeQuery = true)
    void deleteArticleById(@Param("id") Integer id);

    @Query(value = "SELECT * from article d where d.id=:id",
            nativeQuery = true)
    Optional<Article> getArticleById(@Param("id") Integer id);

    @Query(value = "SELECT * from article d where d.url=:url",
            nativeQuery = true)
    Optional<Article> getArticleByURL(@Param("url") String url);

    @Query(value = "SELECT * from article d where d.short_url=:short_url",
            nativeQuery = true)
    Optional<Article> getArticleByShortURL(@Param("short_url") String short_url);

    @Query(value = "SELECT * from article d where d.user_id=:user_id",
            nativeQuery = true)
    List<Article> getArticlesByUserId(@Param("user_id") Integer user_id);

    @Query(value = "DELETE from article d where d.user_id=:user_id",
            nativeQuery = true)
    void deleteArticlesByUserId(@Param("user_id") Integer user_id);

}
