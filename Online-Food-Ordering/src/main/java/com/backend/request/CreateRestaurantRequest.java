package com.backend.request;


import com.backend.model.Address;
import com.backend.model.ContactInformation;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class CreateRestaurantRequest {

    private Long id;
    private String name;
    private String description;
    private String cuisineType;
    private Address address;
    private ContactInformation contactInformation;
    private String opningHours;
    private List<String>images;
}
