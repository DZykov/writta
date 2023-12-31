package com.back.writta.config;

import lombok.Getter;

public final class Endpoints {

    private Endpoints(){

    }

    // Paths
    static public final String baseUrl = "/api";
    @Getter
    static public final String allEndings = "/**";
    @Getter static public final String auth = "/auth";
    @Getter static public final String secured = "/secured";
    @Getter static public final String general = "/general";
    @Getter static public final String user = "/user";
    @Getter static public final String chats = "/chats";
    @Getter static public final String comments = "/comments";
    @Getter static public final String article = "/article";
    @Getter static public final String feed = "/feed";
    @Getter static public final String search = "/search";
    @Getter static public final String logout = "/logout";

    // Endpoints
    @Getter static public final String generalEndpoint = baseUrl + general;
    @Getter static public final String securedEndpoint = baseUrl + secured;
    @Getter static public final String authEndpoint = baseUrl + auth;
    @Getter static public final String userEndpoint = baseUrl + user;
    @Getter static public final String chatsEndpoint = baseUrl + chats;
    @Getter static public final String commentsEndpoint = baseUrl + comments;
    @Getter static public final String articleEndpoint = baseUrl + article;
    @Getter static public final String feedEndpoint = baseUrl + feed;
    @Getter static public final String searchEndpoint = baseUrl + search;
    @Getter static public final String logoutEndpoint = baseUrl + logout;

}
