package com.lecturemanagement.demo.api.service;

import com.lecturemanagement.demo.api.entity.User;
import com.lecturemanagement.demo.api.entity.enums.Role;

import java.util.List;

public interface IUserService extends IService<User> {
    List<User> getUserByRole(Role role);

    List<User> getPointialUsers(List<Integer> ids);

}
