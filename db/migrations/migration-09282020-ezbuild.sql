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
    price INTEGER NOT NULL,
    price_tier VARCHAR (255),
    image_url VARCHAR (255),
    part_description TEXT,
    /*Unique to CPU*/
    cores INTEGER,
    clock_speed INTEGER,
    cpu_make VARCHAR (255),
    cpu_model VARCHAR (255),
    generation VARCHAR (255),
    /*Unique to GPU*/
    base_clock INTEGER,
    boost_clock INTEGER,
    cuda_cores INTEGER,
    mem_bandwidth VARCHAR (255),
    gsync BOOLEAN,
    freesync BOOLEAN,
    gpu_make VARCHAR (255),
    gpu_model VARCHAR (255),
    /*Unique to RAM*/
    capacity VARCHAR (255),
    /*Unique to hard drive*/
    storage VARCHAR (255)
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
    gpu_id INTEGER NOT NULL
);