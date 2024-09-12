package com.backend.service;

import com.backend.model.User;
import com.backend.repository.UserRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    UserRespository userRespository;

    @Override
    public User findUserByJwtToken(String jwt) throws Exception {
        return null;
    }

    @Override
    public User findUserByEmail(String email) throws Exception {
        return null;
    }
}
