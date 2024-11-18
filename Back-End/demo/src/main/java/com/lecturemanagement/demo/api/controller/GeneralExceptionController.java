package com.lecturemanagement.demo.api.controller;

import com.lecturemanagement.demo.api.service.common.GeneralExeption;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GeneralExceptionController {

    @ExceptionHandler(value= GeneralExeption.class)
    public ResponseEntity<ErrorMessage> exception(GeneralExeption exception){

        return  new ResponseEntity<>(new ErrorMessage(exception.getMessage()), HttpStatus.BAD_REQUEST);

    }
}
@Getter
@Setter
@AllArgsConstructor
class ErrorMessage{
    private String errorMessage;
}