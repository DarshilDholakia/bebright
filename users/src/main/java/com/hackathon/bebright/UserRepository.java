package com.hackathon.bebright;

import com.hackathon.bebright.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    User findByUsername(String username);
    List<User> findByOfficesContaining(String office);

    List<User> findByOfficesAndTeamsContaining(String office, String team);
}
