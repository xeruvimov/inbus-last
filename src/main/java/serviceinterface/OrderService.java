package serviceinterface;

import model.Order;

import java.util.List;

public interface OrderService {
    Order getById(Long id);

    List<Order> getAll();

    Order save(Order order);
}
