package com.back.writta.comment;

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
@Table(name = "comment")
public class Comment {

    @Id
    @GeneratedValue
    private Integer id;

    private String commentText;
    @JsonFormat(pattern="dd-MM-yyyy")
    private Date publishedDate;

    @JsonBackReference()
    @ManyToOne
    @JoinColumn(name = "user_id")
    public User user;

}
