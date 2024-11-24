package com.lecturemanagement.demo.api.repository;

import com.lecturemanagement.demo.api.entity.User;
import com.lecturemanagement.demo.api.entity.enums.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IUserRepository extends JpaRepository<User,Integer> {
    boolean existsByIdentityNo(String identityNo);
    List<User> findAllByRole(Role role);

    List<User> findAllByRoleAndIdIsNotIn(Role role,List<Integer> idList);

}