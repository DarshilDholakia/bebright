package com.hackathon.bebright.posts;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data // does getters and setters, toString etc for you
@AllArgsConstructor // creates a constructor with all arguments
@NoArgsConstructor
@Document(collection = "post") // enables us to specify that this class will be a collection (tables equivalent in mongoDb)
public class Post {

    @Id
    private String postId;
    private String userId;
    private String description;
    private String imageURL;
    private Integer likes;
    private List<String> comments;
    private LocalDateTime createdAt;

    public Post(String userId, String description, String imageURL) {
        this.userId = userId;
        this.description = description;
        this.imageURL = imageURL;
        this.likes = 0;
        this.comments = new ArrayList<>();
        this.createdAt = LocalDateTime.now();
    }

    public Post(String userId, String description) {
        this.userId = userId;
        this.description = description;
        this.likes = 0;
        this.comments = new ArrayList<>();
        this.createdAt = LocalDateTime.now();
    }
}
