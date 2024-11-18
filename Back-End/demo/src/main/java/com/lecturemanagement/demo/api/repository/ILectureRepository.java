package com.lecturemanagement.demo.api.repository;

import com.lecturemanagement.demo.api.entity.Lecture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ILectureRepository extends JpaRepository<Lecture,Integer>{


}
