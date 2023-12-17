package com.back.writta.user;

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
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query(value = "SELECT * from users d where d.username=:username",
            nativeQuery = true)
    Optional<User> findByEmail(@Param("username") String username);

    @Modifying
    @Transactional
    @Query(value = "DELETE from users d where d.id=:id",
            nativeQuery = true)
    void deleteUserById(@Param("id") Integer id);

    @Query(value = "SELECT * from users d where d.id=:id",
            nativeQuery = true)
    Optional<User> getUserById(@Param("id") Integer id);
}
