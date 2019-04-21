package com.vozili.model;

import javax.persistence.*;
import java.sql.Time;

@Entity
@Table(name = "contract")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "number_route")
    private String numberRoute;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private Integer price;

    @Column(name = "date")
    private Time date;

    @Column(name = "number_auto")
    private String numberAuto;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNumberRoute() {
        return numberRoute;
    }

    public void setNumberRoute(String numberRoute) {
        this.numberRoute = numberRoute;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Time getDate() {
        return date;
    }

    public void setDate(Time date) {
        this.date = date;
    }

    public String getNumberAuto() {
        return numberAuto;
    }

    public void setNumberAuto(String numberAuto) {
        this.numberAuto = numberAuto;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", numberRoute='" + numberRoute + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", date=" + date +
                ", numberAuto='" + numberAuto + '\'' +
                '}';
    }
}
