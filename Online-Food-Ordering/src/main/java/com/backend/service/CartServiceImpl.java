package com.backend.service;

import com.backend.model.Cart;
import com.backend.model.CartItem;
import com.backend.model.Food;
import com.backend.model.User;
import com.backend.repository.CartItemRepository;
import com.backend.repository.CartRepository;
import com.backend.repository.FoodRepository;
import com.backend.request.AddCartItemRequest;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class CartServiceImpl implements CartService{

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private FoodService foodService;


    @Override
    public CartItem addItemToCart(AddCartItemRequest req, String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        Food food = foodService.findFoodById(req.getFoodId());

        Cart cart = cartRepository.findByCustomerId(user.getId());

        for (CartItem cartItem : cart.getItem()){
            if(cartItem.getFood().equals(food)){
                int newQuantity = cartItem.getQuantity()+ req.getQuantity();
                return  updateCartItemQuantity(cartItem.getId(), newQuantity);
            }
        }

        CartItem newCartItem = new CartItem();
        newCartItem.setFood(food);
        newCartItem.setCart(cart);
        newCartItem.setQuantity(req.getQuantity());
        newCartItem.setTotalPrice(req.getFoodId()*food.getPrice());

        CartItem savedCartItem = cartItemRepository.save(newCartItem);

        cart.getItem().add(savedCartItem);

        return savedCartItem;
    }

    @Override
    public CartItem updateCartItemQuantity(Long cartItemId, int quantity) throws Exception {
        Optional<CartItem> cartItemOptional = cartItemRepository.findById(cartItemId);

        if(cartItemOptional.isEmpty()){
            throw new Exception("cart item not found");
        }

        CartItem item = cartItemOptional.get();
        item.setQuantity(quantity);

        //5*100=500
        item.setTotalPrice(item.getFood().getPrice()*quantity);

        return cartItemRepository.save(item);
    }

    @Override
    public Cart removeItemFromCart(Long cartItemId, String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);

        Cart cart = cartRepository.findByCustomerId(user.getId());

        Optional<CartItem> cartItemOptional = cartItemRepository.findById(cartItemId);

        if(cartItemOptional.isEmpty()){
            throw new Exception("cart item not found");
        }

        CartItem item = cartItemOptional.get();

        cart.getItem().remove(item);

        return cart;
    }

    @Override
    public Long calculateCartTotals(Cart cart) throws Exception {
        Long total = 0L;

        for (CartItem cartItem : cart.getItem()){
            total += cartItem.getFood().getPrice()*cartItem.getQuantity();

        }
        return total;
    }

    @Override
    public Cart findCartById(Long id) throws Exception {
        Optional<Cart> optionalCart = cartRepository.findById(id);

        if(optionalCart.isEmpty()){
            throw new Exception("cart not found whit id " + id);
        }
        return optionalCart.get();
    }

    @Override
    public Cart findCartByUserId(Long userId) throws Exception {

        return cartRepository.findByCustomerId(userId);
    }

    @Override
    public Cart clearCart(Long userId) throws Exception {
        Cart cart = findCartByUserId(userId);
        cart.getItem().clear();

        return cartRepository.save(cart);
    }
}
