package com.vozili.service;

import com.vozili.model.Order;
import com.vozili.repository.OrderRepository;
import com.vozili.serviceinterface.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository repository;

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
        return repository.save(order);
    }

    @Override
    public void delete(Long id) {
        repository.delete(id);
    }
}
