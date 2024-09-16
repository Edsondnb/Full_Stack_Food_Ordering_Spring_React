package com.backend.repository;

import com.backend.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {

    @Query("SELECT R FROM Restaurant r WHERE lower(r.name) LIKE lower(concat('%', :query, '%')) OR lower(r.cuisineType)" +
            "LIKE lower(concat ('%', :query, '%'))")
    List<Restaurant> fidBySearchQuery(String query);

    Restaurant findByOwnerId(Long userId);



}