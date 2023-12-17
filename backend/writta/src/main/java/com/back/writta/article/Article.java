package com.back.writta.article;

import com.back.writta.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Type;
import org.springframework.format.annotation.DateTimeFormat;
import io.hypersistence.utils.hibernate.type.array.ListArrayType;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Setter
@Table(name = "article")
@JsonIgnoreProperties(value = {
        "dislikedUsers",
        "likedUsers",
})
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
    private String context;
    private String description;
    private Boolean draft;
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @JsonFormat(pattern="dd-MM-yyyy")
    private LocalDate publishedDate;

    @Column(unique=true)
    private String url;
    @Column(unique = true)
    private String shortUrl;

    @JsonBackReference()
    @ManyToOne
    @JoinColumn(name = "user_id")
    public User user;

    @Type(ListArrayType.class)
    @Column(
            name = "disliked_ids",
            columnDefinition = "Integer[]"
    )
    public List<Integer> dislikedUsers;

    @Type(ListArrayType.class)
    @Column(
            name = "liked_ids",
            columnDefinition = "Integer[]"
    )
    public List<Integer> likedUsers;
}
