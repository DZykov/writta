package com.back.writta.article;

import com.back.writta.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;
import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Setter
@Table(name = "article")
public class Article {

    @Id
    @GeneratedValue
    private Integer id;

    private String articleName;
    private String articlePhoto;
    private Integer likes;
    private Integer dislikes;
    private Integer views;
    private Integer reads;
    @JsonFormat(pattern="dd-MM-yyyy")
    private Date publishedDate;

    @Column(unique=true)
    private String url;
    @Column(unique = true)
    private String shortUrl;

    @JsonBackReference()
    @ManyToOne
    @JoinColumn(name = "user_id")
    public User user;
}
