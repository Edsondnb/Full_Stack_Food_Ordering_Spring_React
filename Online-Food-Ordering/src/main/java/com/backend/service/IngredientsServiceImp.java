package com.backend.service;


import com.backend.model.IngredientCategory;
import com.backend.model.IngredientsItem;
import com.backend.repository.IngredientCategoryRepository;
import com.backend.repository.IngredientItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientsServiceImp implements IngredientsService {

    @Autowired
    private IngredientItemRepository ingredientItemRepository;

    @Autowired
    private IngredientCategoryRepository ingredientCategoryRepository;


    @Override
    public IngredientsService createIngredientsCategory(String name, Long restaurantId) throws Exception {
        return null;
    }

    @Override
    public IngredientCategory findIngredientsCategoryById(Long id) throws Exception {
        return null;
    }

    @Override
    public List<IngredientCategory> findIngredientCategoryByRestaurantId(Long id) throws Exception {
        return List.of();
    }

    @Override
    public IngredientsItem createIngredientItem(Long restaurantId, String ingredientName, Long categoryId) throws Exception {
        return null;
    }

    @Override
    public List<IngredientsItem> findRestaurantsIngredients(Long restaurantId) {
        return List.of();
    }

    @Override
    public IngredientsItem updateStock(Long id) throws Exception {
        return null;
    }
}
