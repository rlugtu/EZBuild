/*Contains the basic information for each user. Will also be used to link a build to a user before purchase*/

CREATE TABLE
IF NOT EXISTS users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR
(255) UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    email VARCHAR
(255)
);

CREATE TABLE
IF NOT EXISTS builds
(
    id SERIAL PRIMARY KEY,
    price_tier VARCHAR (255),
    build_type VARCHAR NOT NULL,
    build_name VARCHAR NOT NULL,
    CONSTRAINT fk_cpu
    FOREIGN KEY(cpu)
    REFERENCES parts(id),
    CONSTRAINT fk_gpu
    FOREIGN KEY(gpu) 
    REFERENCES parts(id),
    CONSTRAINT fk_ram
    FOREIGN KEY(ram)
    REFERENCES parts(id),
    CONSTRAINT fk_storage
    FOREIGN KEY (storage)
    REFERENCES parts(id),
    CONSTRAINT fk_cooler
    FOREIGN KEY(cooler)
    REFERENCES parts(id),
    CONSTRAINT fk_psu
    FOREIGN KEY(psu)
    REFERENCES parts(id)
);

CREATE TABLE
IF NOT EXISTS parts
(
    id SERIAL PRIMARY KEY,
    part_type VARCHAR (255),
    price INTEGER NOT NULL,
    price_tier VARCHAR (255),
    image_url VARCHAR (255),
    part_description VARCHAR,
    make VARCHAR (255),
    model VARCHAR (255),
    /*Unique to CPU*/
    cores INTEGER,
    clock_speed INTEGER,
    sockets INTEGER,
    /*Unique to GPU*/
    memory INTEGER,
    mem_clock INTEGER,
    bus VARCHAR (255),
    /*Unique to RAM*/
    capacity: VARCHAR (255),
    /*Unique to hard drive*/
    storage: VARCHAR (255)
)