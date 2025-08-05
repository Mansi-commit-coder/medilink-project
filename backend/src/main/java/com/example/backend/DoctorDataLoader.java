package com.example.backend;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.List;

@Component
public class DoctorDataLoader {

    private final DoctorRepository doctorRepository;

    public DoctorDataLoader(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    @PostConstruct
    public void loadData() {
        try {
            if (doctorRepository.count() == 0) { // Avoid duplication
                ObjectMapper mapper = new ObjectMapper();
                InputStream is = getClass().getResourceAsStream("/doctors.json");
                List<Doctor> doctors = mapper.readValue(is, new TypeReference<List<Doctor>>() {});
                doctorRepository.saveAll(doctors);
                System.out.println("Doctors imported successfully.");
            }
        } catch (Exception e) {
            System.err.println("Error loading doctor data: " + e.getMessage());
        }
    }
}

