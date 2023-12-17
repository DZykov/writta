package com.back.writta.comment;

import com.back.writta.article.Article;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Integer> {

    @Modifying
    @Transactional
    @Query(value = "DELETE from comment d where d.id=:id",
            nativeQuery = true)
    void deleteCommentById(@Param("id") Integer id);

    @Query(value = "SELECT * from comment d where d.id=:id",
            nativeQuery = true)
    Optional<Comment> getCommentById(@Param("id") Integer id);

    @Query(value = "SELECT * from comment d where d.article_id=:article_id",
            nativeQuery = true)
    List<Comment> getCommentsByArticleId(@Param("article_id") Integer article_id);

    @Query(value = "DELETE from comment d where d.user_id=:user_id",
            nativeQuery = true)
    void deleteCommentsByUserId(@Param("user_id") Integer user_id);
}
