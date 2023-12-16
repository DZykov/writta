package com.back.writta.user;

import com.back.writta.token.Token;
import com.back.writta.token.TokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;

    public User createEmptyUser() {
        User u = User.builder().build();
        u.setRole(Role.USER);
        return u;
    }

    public User getUserById(Integer id) {
        if (userRepository.findById(id).isEmpty()) {
            return createEmptyUser();
        }
        return userRepository.findById(id).get();
    }

    public User getUserByName(String email) {
        if (userRepository.findByEmail(email).isEmpty()) {
            return createEmptyUser();
        }
        return userRepository.findByEmail(email).get();
    }

    public User updateUserBio(Integer id, String bio) {
        if (userRepository.findById(id).isEmpty()) {
            return createEmptyUser();
        }

        User userNew = userRepository.findById(id).get();
        // NOTE: changing username/email requires regenerating JWT tokens for this entity, and sending that Token back to user.
        userNew.setBio(bio);
        userRepository.save(userNew);
        return userNew;
    }

    private Collection<Token> revokeAllUserTokensByUserId(Integer id) {
        var validUserTokens = tokenRepository.findAllValidTokenByUser(id);
        if (validUserTokens.isEmpty())
            return new ArrayList<>();
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        return tokenRepository.saveAll(validUserTokens);
    }

    protected User deleteUserById(Integer id) {
        if (userRepository.findById(id).isEmpty()) {
            return createEmptyUser();
        }

        var validUserTokens = revokeAllUserTokensByUserId(id);
        tokenRepository.deleteAll(validUserTokens);
        // TODO: article, comments
        // Should be deleted last, carts and token tables have user id key as foreign
        userRepository.deleteUserById(id);

        return createEmptyUser();
    }

    public User blockUserById(Integer id, boolean block) {
        if (userRepository.findById(id).isEmpty()) {
            return createEmptyUser();
        }
        revokeAllUserTokensByUserId(id);
        User user = userRepository.findById(id).get();
        user.setNonLocked(block);
        user.setEnabled(block);
        userRepository.save(user);
        return user;
    }

    public User createUser(User user, String password) {
        if (userRepository.findByEmail(user.getUsername()).isPresent()){
            return createEmptyUser();
        }
        user.setPassword(passwordEncoder.encode(password));
        user.setNonLocked(true);
        user.setEnabled(true);
        userRepository.save(user);
        return user;
    }

    public void logoutUser(String jwt){
        var storedToken = tokenRepository.findByToken(jwt)
                .orElse(null);
        if (storedToken != null) {
            storedToken.setExpired(true);
            storedToken.setRevoked(true);
            tokenRepository.save(storedToken);
            SecurityContextHolder.clearContext();
        }
    }
}
