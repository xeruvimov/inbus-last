package com.vozili.service;

import com.vozili.model.Customer;
import com.vozili.model.Order;
import com.vozili.repository.CustomerRepository;
import com.vozili.repository.OrderRepository;
import com.vozili.serviceinterface.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository repository;

    @Autowired
    private CustomerRepository customerRepository;
    @Override
    public Order getById(Long id) {
        return repository.getOne(id);
    }

    @Override
    public List<Order> getAll() {
        return repository.findAll();
    }

    @Override
    public Order save(Order order) {
        Order result = repository.save(order);
        Customer tmp = customerRepository.findOne(1L);
        tmp.setPersonalOrder(result);
        customerRepository.save(tmp);
        return result;
    }

    @Override
    public void delete(Long id) {
        repository.delete(id);
    }
}
