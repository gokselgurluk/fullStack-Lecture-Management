package com.lecturemanagement.demo.api.service.impl;

import com.lecturemanagement.demo.api.entity.Lecture;
import com.lecturemanagement.demo.api.repository.ILectureRepository;
import com.lecturemanagement.demo.api.repository.IUserRepository;
import com.lecturemanagement.demo.api.service.ILectureService;
import com.lecturemanagement.demo.api.service.common.GeneralExeption;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LectureServiceImpl implements ILectureService {

    private ILectureRepository lectureRepository;

    public LectureServiceImpl(ILectureRepository lectureRepository) {
        this.lectureRepository = lectureRepository;
    }

    @Override
    public Lecture save(Lecture lecture) {
        if (StringUtils.isEmpty(lecture.getName())) {
            throw  new GeneralExeption("Name can not be empty");
        }
        if (lecture.getTeacher() == null) {
            throw  new GeneralExeption("Teacher can not empty");

        }
        return lectureRepository.save(lecture);
    }

    @Override
    public Lecture getById(Integer id) {
        return lectureRepository.findById(id).orElseThrow(()->new GeneralExeption("Lecture Not Found"));
    }

    @Override
    public List<Lecture> getAll() {
        return lectureRepository.findAll();
    }

    @Override
    public Page<Lecture> getAll(Pageable pageable) {
        return lectureRepository.findAll(pageable);
    }

    @Override
    public void delete(Integer id) {
        if (!lectureRepository.existsById(id)) {
            throw new GeneralExeption("Lecture Not Fount");
        }
        lectureRepository.deleteById(id);
    }
}
