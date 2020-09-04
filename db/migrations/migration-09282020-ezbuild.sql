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
    part_type VARCHAR
(255),
    cpu_id INTEGER,
    gpu_id INTEGER,
    make VARCHAR
(255),
    model VARCHAR
(255),
    price INTEGER NOT NULL,
    price_tier VARCHAR
(255),
    image_url VARCHAR
(255),
    part_description TEXT,
    /*Unique to CPU*/
    cores INTEGER,
    clock_speed INTEGER,
    generation VARCHAR
(255),
    /*Unique to GPU*/
    boost_clock INTEGER,
    memory VARCHAR
(255),
    gsync BOOLEAN,
    freesync BOOLEAN,
    /*Unique to RAM*/
    capacity VARCHAR
(255),
    ram_id INTEGER,
    transfer_rate INTEGER,
    /*Unique to hard drive*/
    ssd_id INTEGER,
    voltage INTEGER
);

CREATE TABLE
IF NOT EXISTS builds
(
    id SERIAL PRIMARY KEY,
    price_tier VARCHAR
(255),
    build_type VARCHAR NOT NULL,
    build_name VARCHAR NOT NULL,
    build_description TEXT,
    cpu_id INTEGER NOT NULL,
    gpu_id INTEGER NOT NULL,
    ram_id INTEGER NOT NULL,
    ssd_id INTEGER NOT NULL,
    image_url VARCHAR
);

CREATE TABLE
IF NOT EXISTS user_builds
(
    id SERIAL PRIMARY KEY,
    cpu VARCHAR
(255),
    gpu VARCHAR
(255),
    ram VARCHAR
(255),
    motherboard VARCHAR
(255),
    cooling VARCHAR
(255),
    storage VARCHAR
(255),
    psu VARCHAR
(255),
    desktop_case VARCHAR
(255),
total INTEGER,
name VARCHAR
(255),
notes VARCHAR
(255)
    );