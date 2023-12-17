package com.back.writta.comment;

import com.back.writta.article.Article;
import com.back.writta.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

import static com.back.writta.utils.utilitis.getAlphaNumericString;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final UserRepository userRepository;

    public Comment createComment(Comment comment) {
        commentRepository.save(comment);
        return comment;
    }

    public void deleteComment(Integer id) {
        commentRepository.deleteCommentById(id);
    }
}
