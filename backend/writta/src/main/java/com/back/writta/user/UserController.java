package com.back.writta.user;

import com.back.writta.config.Endpoints;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = {Endpoints.userEndpoint})
@RequiredArgsConstructor
public class UserController {
}
