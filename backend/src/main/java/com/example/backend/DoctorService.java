package com.example.backend;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {
    private final DoctorRepository repository;

    public DoctorService(DoctorRepository repository) {
        this.repository = repository;
    }

    public List<Doctor> getDoctors(String city, String specialization) {
        return repository.findByAddressContainingIgnoreCaseAndSpecializationContainingIgnoreCase(city, specialization);
    }
}
