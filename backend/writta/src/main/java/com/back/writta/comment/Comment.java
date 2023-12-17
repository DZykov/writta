package com.back.writta.comment;

import com.back.writta.article.Article;
import com.back.writta.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Setter
@Table(name = "comment")
public class Comment {

    @Id
    @GeneratedValue
    private Integer id;

    private String commentText;
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @JsonFormat(pattern="dd-MM-yyyy")
    private LocalDate publishedDate;

    @JsonBackReference()
    @ManyToOne
    @JoinColumn(name = "user_id")
    public User user;

    @JsonBackReference()
    @ManyToOne
    @JoinColumn(name = "article_id")
    public Article article;
}
