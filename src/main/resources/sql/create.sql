create table if not exists contract (
id serial primary key,
number_route varchar(11) not null,
description varchar(1000) not null,
price int not null,
date time not null,
number_auto varchar(11) not null
);