package com.backend.controller;


import com.backend.model.Food;
import com.backend.model.Restaurant;
import com.backend.model.User;
import com.backend.request.CreateFoodRequest;
import com.backend.response.MessageResponse;
import com.backend.service.FoodService;
import com.backend.service.RestaurantService;
import com.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/food")
public class AdminFoodController {

    @Autowired
    private FoodService foodService;

    @Autowired
    private UserService userService;

    @Autowired
    private RestaurantService restaurantService;

    @PostMapping
    public ResponseEntity<Food> createFood(@RequestBody CreateFoodRequest req,
                                           @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        Restaurant restaurant = restaurantService.findRestaurantById(req.getRestaurantId());
        Food food = foodService.createFood(req, req.getCategory(), restaurant);

        return new ResponseEntity<>(food, HttpStatus.CREATED);

    }

    @PostMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteFood(@PathVariable Long id,
                                                      @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);

        foodService.deleteFood(id);

        MessageResponse res = new MessageResponse();
        res.setMessage("Food deleted successfully");

        return new ResponseEntity<>(res,HttpStatus.CREATED);

    }

    @PostMapping("/{id}")
    public ResponseEntity<Food> updateFoodAvailabilityStatus(@PathVariable Long id,
                                                      @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);

        Food food = foodService.updateAvailabilityStatus(id);

        MessageResponse res = new MessageResponse();
        res.setMessage("Food deleted successfully");

        return new ResponseEntity<>(food,HttpStatus.CREATED);

    }


}
