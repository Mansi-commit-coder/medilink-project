package com.example.backend;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doctors")
@CrossOrigin(origins = "*")  // Allow frontend to access
public class DoctorController {
    private final DoctorService service;

    public DoctorController(DoctorService service) {
        this.service = service;
    }

    @GetMapping
    public List<Doctor> getDoctors(
            @RequestParam String city,
            @RequestParam String specialization
    ) {
        return service.getDoctors(city, specialization);
    }
}
