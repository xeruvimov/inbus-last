create table if not exists order (
id bigint identity primary key,
number_route varchar(11) not null,
description varchar(1000) not null,
price int not null
);