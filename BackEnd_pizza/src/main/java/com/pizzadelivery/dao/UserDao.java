package com.pizzadelivery.dao;

import com.pizzadelivery.pojos.User;

public interface UserDao {
	public User addUser(User user);

	public User updateCreds(User updateCust);

	public User validate(String email, String password);
}
