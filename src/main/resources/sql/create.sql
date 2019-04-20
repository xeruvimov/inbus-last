create table if not exists contract (
id bigint identity primary key,
number_route varchar(11) not null,
description varchar(1000) not null,
price int not null,
date datetime not null,
number_auto varchar(11) not null
);