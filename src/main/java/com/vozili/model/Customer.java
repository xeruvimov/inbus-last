package com.vozili.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "login")
    private String login;

    @Column(name = "booked_order")
    private Integer bookedOrder;

    @Column(name = "personal_order")
    private Integer personalOrder;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public Integer getBookedOrder() {
        return bookedOrder;
    }

    public void setBookedOrder(Integer bookedOrder) {
        this.bookedOrder = bookedOrder;
    }

    public Integer getPersonalOrder() {
        return personalOrder;
    }

    public void setPersonalOrder(Integer personalOrder) {
        this.personalOrder = personalOrder;
    }
}
