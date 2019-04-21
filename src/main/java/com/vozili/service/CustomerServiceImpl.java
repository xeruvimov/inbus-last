package com.vozili.service;

import com.vozili.model.Customer;
import com.vozili.model.Order;
import com.vozili.repository.CustomerRepository;
import com.vozili.serviceinterface.CustomerServisce;
import org.springframework.beans.factory.annotation.Autowired;

public class CustomerServiceImpl implements CustomerServisce {
    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public Customer getCustomer() {
        return customerRepository.getOne(1L);
    }

    @Override
    public Order getBookedOrder() {
        return customerRepository.getOne(1L).getBookedOrder();
    }

    @Override
    public Order getPersonalOrder() {
        return customerRepository.getOne(1L).getPersonalOrder();
    }
}
