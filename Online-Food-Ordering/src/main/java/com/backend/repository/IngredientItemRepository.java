package com.backend.repository;

import com.backend.model.IngredientsItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientItemRepository extends JpaRepository<IngredientsItem, Long> {



}
