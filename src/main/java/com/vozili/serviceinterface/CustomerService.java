package com.vozili.serviceinterface;

import com.vozili.model.Customer;
import com.vozili.model.Order;

public interface CustomerService {
    Customer getCustomer();

    Order getBookedOrder();

    Order getPersonalOrder();
}
