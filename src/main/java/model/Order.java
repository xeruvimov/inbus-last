package model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Order {
    @Id
    private long id;

    @Column(name = "number_route")
    private String numberRoute;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private int price;

    public long getId() {
        return id;
    }

    public void setId(long id) {
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
}
