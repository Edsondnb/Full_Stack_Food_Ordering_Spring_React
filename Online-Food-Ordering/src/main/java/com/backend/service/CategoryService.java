package com.backend.service;

import com.backend.model.Category;

import java.util.List;

public interface CategoryService {

    public Category createCategory(String name, Long userId) throws Exception;

    public List<Category> findCategoryByRestauranId(Long id) throws Exception;

    public Category findCategoryById(Long id) throws Exception;




}
