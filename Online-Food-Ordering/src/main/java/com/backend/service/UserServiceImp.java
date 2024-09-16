package com.backend.service;

import com.backend.config.JwtProvider;
import com.backend.model.User;
import com.backend.repository.UserRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    UserRespository userRespository;

    @Autowired
    private JwtProvider jwtProvider;


    @Override
    public User findUserByJwtToken(String jwt) throws Exception {
        String email = jwtProvider.getEmailFromJwtToken(jwt);
        User user = findUserByEmail(email);
        return user;

    }

    @Override
    public User findUserByEmail(String email) throws Exception {
        User user = userRespository.findByEmail(email);

        if(user == null){
            throw new Exception("User not found");
        }


        return user;
    }
}
