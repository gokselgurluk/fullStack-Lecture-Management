package com.lecturemanagement.demo.api.config;

import org.apache.catalina.startup.WebAnnotationSet;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CrossOriginConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer(){
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:5173") // İzin verilen domain
                        .allowedMethods("HEAD","GET","POST","PUT","DELETE","PATCH","OPTIONS");// İzin verilen HTTP metodları
                 }
            };
        }
    }

