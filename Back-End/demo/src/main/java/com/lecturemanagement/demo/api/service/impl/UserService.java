package com.lecturemanagement.demo.api.service.impl;

import com.lecturemanagement.demo.api.entity.User;
import com.lecturemanagement.demo.api.entity.enums.Role;
import com.lecturemanagement.demo.api.repository.IUserRepository;
import com.lecturemanagement.demo.api.service.IUserService;
import com.lecturemanagement.demo.api.service.common.GeneralExeption;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService {

    private  IUserRepository userRepository ;

    public UserService(IUserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public User save(User user) {
        if (user.getId() == null) {
            if (user.getIdentityNo() == null || user.getIdentityNo().length() != 11) {
                throw new GeneralExeption("Invalid identity nu");
            }
            if(userRepository.existsByIdentityNo(user.getIdentityNo())){
                throw  new GeneralExeption("Identity no already exists!");
            }
        }

        return userRepository.save(user);
    }

    @Override
    public User getById(Integer id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isEmpty()) {
            throw  new GeneralExeption("User not found");
        }
        return user.get();
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public Page<User> getAll(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    @Override
    public void delete(Integer id) {
        if (userRepository.existsById(id)) {
            throw  new GeneralExeption("User Not Found");
        }
        userRepository.deleteById(id);

    }

    @Override
    public List<User> getUserByRole(Role role) {
        return userRepository.findAllByRole(role);
    }

    @Override
    public List<User> getPointialUsers(List<Integer> ids) {
        if (ids.isEmpty()) {
            return  getUserByRole(Role.STUDENT);
        }
        return  userRepository.findAllByRoleAndIdNotIn(Role.STUDENT,ids);
    }
}
