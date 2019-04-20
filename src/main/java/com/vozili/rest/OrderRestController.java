package com.vozili.rest;

import com.vozili.model.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.vozili.serviceinterface.OrderService;

import java.util.List;

@Controller
@RequestMapping("/orders")
public class OrderRestController {
    @Autowired
    private OrderService orderService;

    @RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<List<Order>> getAllPlayers() {
        List<Order> result = this.orderService.getAll();
        if (result.isEmpty()) {
            return new ResponseEntity<List<Order>>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<List<Order>>(result, HttpStatus.OK);
    }

    @RequestMapping(value = "", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Order> addPlayer(@RequestBody Order order) {
        return new ResponseEntity<Order>(orderService.save(order), HttpStatus.OK);
    }
}
