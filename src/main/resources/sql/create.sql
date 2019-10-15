create table if not exists contract
(
    id           serial primary key,
    number_route varchar(11)   not null,
    description  varchar(1000) not null,
    price        int           not null,
    date         time          not null,
    number_auto  varchar(11)   not null
);
create table if not exists customer
(
    id             serial primary key,
    login          varchar(30) not null,
    booked_order   int,
    personal_order int,
    FOREIGN KEY (booked_order) REFERENCES contract (id),
    FOREIGN KEY (personal_order) REFERENCES contract (id)
);