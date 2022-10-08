package com.hackathon.bebright;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data //does getters and setters, toString etc for you
@AllArgsConstructor //creates a constructor with all arguments
@NoArgsConstructor
@Document(collection = "user") //enables us to specify that this class will be a collection (tables in mongoDb)
// Documents (data entries/rows) are stored in a collection
public class User {

    @Id
    private String userId;
    @Indexed(unique = true)
    private String username;
    private String password;
    private String profilePicURL;
    private String office;
    private String team;
    // TODO: add interest relationship here OR add User relationship in Interest Entity
}
