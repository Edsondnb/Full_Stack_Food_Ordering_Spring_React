package com.backend.service;

import com.backend.model.Category;
import com.backend.model.Food;
import com.backend.model.Restaurant;
import com.backend.request.CreateFoodRequest;

import java.util.List;

public interface FoodService {

    public Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant);

    void deleteFood(Long foodId) throws Exception;

    public List<Food> getRestaurantsFood(Long restaurantId,
                                         boolean isVegetarian,
                                         boolean isNonveg,
                                         boolean isSeasonal,
                                         String foodCategory);

    public List<Food> searchFood(String keywork);

    public Food findFoodById(Long foodId) throws Exception;

    public Food updateAvailabilityStatus(Long foodId) throws Exception;


}
