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
IF NOT EXISTS parts
(
    id SERIAL PRIMARY KEY,
    cpu_id SERIAL,
    gpu_id SERIAL,
    make VARCHAR (255),
    model VARCHAR (255),
    price INTEGER NOT NULL,
    price_tier VARCHAR (255),
    image_url VARCHAR (255),
    part_description TEXT,
    /*Unique to CPU*/
    cores INTEGER,
    clock_speed INTEGER,
    generation VARCHAR (255),
    /*Unique to GPU*/
    boost_clock INTEGER,
    memory VARCHAR (255),
    gsync BOOLEAN,
    freesync BOOLEAN,
    /*Unique to RAM*/
    capacity VARCHAR (255),
    ram_id SERIAL,
    transfer_rate INTEGER,
    /*Unique to hard drive*/
    ssd_id SERIAL
);

CREATE TABLE
IF NOT EXISTS builds
(
    id SERIAL PRIMARY KEY,
    price_tier VARCHAR (255),
    build_type VARCHAR NOT NULL,
    build_name VARCHAR NOT NULL,
    build_description TEXT,
    cpu_id INTEGER NOT NULL,
    gpu_id INTEGER NOT NULL,
    ram_id INTEGER NOT NULL
);