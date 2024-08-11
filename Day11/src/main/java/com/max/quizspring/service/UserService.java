package com.max.quizspring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.max.quizspring.model.User;

import com.max.quizspring.repo.UserRepo;
@Service
public class UserService {
    @Autowired
    private UserRepo urepo;
    
    public User addUsers(User user){
        return urepo.save(user);
    }
   
    public List<User> getUsers(){
        return urepo.findAll();
    }
   
    
    public User findUserByEmail(String email){
        return urepo.findUserByEmail(email); 
    }
    public String deleteUser(Long uid){
        urepo.deleteById(uid);
        return "user deleted successfully" + uid;
    }

}
