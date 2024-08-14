

package com.app.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.annotation.Rollback;

import com.app.entities.UserEntity;
import com.app.repository.UserEntityRepository;

@Transactional
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
class UserEntityRepositoryTest {

    @Autowired
    private UserEntityRepository userRepo;

    @Autowired
    private PasswordEncoder enc;

    @Test
    void testAddUsers() {
        // Create a list of UserEntity instances without roles
        List<UserEntity> users = List.of(
            new UserEntity("John", "Doe", "john.doe@example.com", enc.encode("Jane@Dae111")),
            new UserEntity("Jane", "Doe", "jane.doe@example.com", enc.encode("Jone#Smith222")),
            new UserEntity("Bonoy", "Smith", "bonoy@gmail.com", enc.encode("Stylist#Pwd2"))
        );

        // Save all users and check the result
        List<UserEntity> savedUsers = userRepo.saveAll(users);
        assertEquals(3, savedUsers.size(), "The number of saved users should be 3");
    }
}
