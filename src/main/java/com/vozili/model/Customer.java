package com.vozili.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "customer")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "login")
    private String login;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "booked_order", referencedColumnName = "id")
    private Order bookedOrder;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "personal_order", referencedColumnName = "id")
    private Order personalOrder;

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

    public Order getBookedOrder() {
        return bookedOrder;
    }

    public void setBookedOrder(Order bookedOrder) {
        this.bookedOrder = bookedOrder;
    }

    public Order getPersonalOrder() {
        return personalOrder;
    }

    public void setPersonalOrder(Order personalOrder) {
        this.personalOrder = personalOrder;
    }
}
