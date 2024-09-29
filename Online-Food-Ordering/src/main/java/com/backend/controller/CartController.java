package com.backend.controller;

import com.backend.model.Cart;
import com.backend.model.CartItem;
import com.backend.request.AddCartItemRequest;
import com.backend.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CartController {

    @Autowired
    private CartService cartService;

    public ResponseEntity<CartItem> addItemToCart(@RequestBody AddCartItemRequest req,
                                                  @RequestHeader ("Authorization") String jwt) throws Exception {

        CartItem cartItem = cartService.addItemToCart(req, jwt);
        return new ResponseEntity<>(cartItem, HttpStatus.OK);
    }


}
