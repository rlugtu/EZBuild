

INSERT INTO PARTS
    (cpu_id, price, part_type, price_tier, image_url, part_description, make, model, generation, clock_speed, cores)
VALUES
    (1, 140, 'cpu', 'bronze', '/db/assets/intelc3.jpeg', 'The Ryzen 5 3600 is arguably the best value on a CPU under $200.', 'AMD', 'Ryzen 5 3600', '5', 3600, 4);
INSERT INTO PARTS
    (cpu_id, price, part_type, price_tier, image_url, part_description, make, model, generation, clock_speed, cores)
VALUES
    (2, 220, 'cpu', 'silver', '/db/assets/intelc3.jpeg', 'The latest generation of the i7 represents the higher end of performance and is appropriate for just about anyone.', 'Intel', 'i7 9700K', '9', 3600, 8);
INSERT INTO PARTS
    (cpu_id, price, part_type, price_tier, image_url, part_description, make, model, generation, clock_speed, cores)
VALUES
    (3, 500, 'cpu', 'gold', '/db/assets/intelc3.jpeg', 'An i9 is most often used for demands that go well beyond gaming. A PC with the latest gen i9 will meet all of your demands for a long time to come.', 'Intel', 'i9 10900K', '10', 3700, 10);
INSERT INTO PARTS
    (cpu_id, price, part_type, price_tier, image_url, part_description, make, model, generation, clock_speed, cores)
VALUES
    (4, 170, 'cpu', 'bronze', '/db/assets/intelc3.jpeg', 'The i5 can get you up and running for under $170 - a great choice for gamers, streamers, and creators who have a tight budget or are still gauging their interest in the field.', 'Intel', 'i5 9400', '9', 2900, 6);
INSERT INTO PARTS
    (cpu_id, price, part_type, price_tier, image_url, part_description, make, model, generation, clock_speed, cores)
VALUES
    (5, 300, 'cpu', 'silver', '/db/assets/intelc3.jpeg', 'Not every i5 is built the same. The 10600K draws on the latest generation evolutions to create a reliable powerhouse especially competent at multitasking.', 'Intel', 'i5 10600K', '10', 4100, 6);

INSERT INTO PARTS
    (gpu_id, price, part_type, price_tier, image_url, part_description, make, model, boost_clock, memory, gsync, freesync)
VALUES
    (1, 220, 'gpu', 'bronze', 'db/assets/xfx_radeon.jpg', 'Placeholder part description - GTX 1660 Ti', 'NVIDIA', 'GeForce GTX 1660 Ti', 1770, '6 GB GDDR6', true, false);
INSERT INTO PARTS
    (gpu_id, price, part_type, price_tier, image_url, part_description, make, model, boost_clock, memory, gsync, freesync)
VALUES
    (2, 350, 'gpu', 'silver', 'db/assets/xfx_radeon.jpg', 'Placeholder part description - RTX 2060', 'NVIDIA', 'GeForce RTX 2060', 1680, '6 GB GDDR6', true, false);
INSERT INTO PARTS
    (gpu_id, price, part_type, price_tier, image_url, part_description, make, model, boost_clock, memory, gsync, freesync)
VALUES
    (3, 600, 'gpu', 'gold', 'db/assets/xfx_radeon.jpg', 'Placeholder part description - 2080 Super', 'NVIDIA', 'GeForce RTX 2080 Super', 1815, '6 GB GDDR6', true, false);
INSERT INTO PARTS
    (gpu_id, price, part_type, price_tier, image_url, part_description, make, model, boost_clock, memory, gsync, freesync)
VALUES
    (4, 140, 'gpu', 'bronze', 'db/assets/xfx_radeon.jpg', 'Placeholder part description - RX 570', 'NVIDIA', 'GeForce RX 570', 1168, '8 GB GDDR5', true, false);
INSERT INTO PARTS
    (gpu_id, price, part_type, price_tier, image_url, part_description, make, model, boost_clock, memory, gsync, freesync)
VALUES
    (5, 350, 'gpu', 'silver', 'db/assets/xfx_radeon.jpg', 'Placeholder part description - RTX 2070 Super', 'NVIDIA', 'GeForce RTX 2070 Super', 1605, '8 GB GDDR6', true, false);

INSERT INTO PARTS
    (ram_id, make, part_type, model, capacity, price, price_tier, transfer_rate)
VALUES
    (1, 'Corsair', 'ram', 'Vengeance', '4GB', 20, 'bronze', 2666);
INSERT INTO PARTS
    (ram_id, make, part_type, model, capacity, price, price_tier, transfer_rate)
VALUES
    (2, 'Kingston', 'ram', 'HyperX Fury', '8GB', 40, 'bronze', 2666);
INSERT INTO PARTS
    (ram_id, make, part_type, model, capacity, price, price_tier, transfer_rate)
VALUES
    (3, 'Kingston', 'ram', 'HyperX Predator', '16GB', 60, 'silver', 2666);
INSERT INTO PARTS
    (ram_id, make, part_type, model, capacity, price, price_tier, transfer_rate)
VALUES
    (4, 'G.', 'ram', 'Skill Trident', '32GB', 120, 'gold', 2666);
INSERT INTO PARTS
    (ram_id, make, part_type, model, capacity, price, price_tier, transfer_rate)
VALUES (5, 'Kingston', 'ram', 'HyperX Fury', '8GB', 40, 'silver', 2666);
INSERT INTO PARTS
    (ram_id, make, part_type, model, capacity, price, price_tier, transfer_rate)
VALUES (6, 'Kingston', 'ram', 'HyperX Predator', '16GB', 60, 'gold', 2666);



INSERT INTO PARTS
    (ram_id, make, part_type, model, capacity, price, price_tier, transfer_rate)
VALUES
    (5, 'Kingston', 'ram', 'HyperX Fury', '8GB', 40, 'silver', 2666);

INSERT INTO PARTS
    (ram_id, make, part_type, model, capacity, price, price_tier, transfer_rate)
VALUES
    (6, 'Kingston', 'ram', 'HyperX Predator', '16GB', 60, 'gold', 2666);



INSERT INTO PARTS
    (ssd_id, make, part_type, capacity, price)
VALUES
    (1, 'PNY', 'storage', '240 GB', 30);
INSERT INTO PARTS
    (ssd_id, make, part_type, capacity, price)
VALUES
    (2, 'SanDisk', 'storage', '512 GB', 65);
INSERT INTO PARTS
    (ssd_id, make, part_type, capacity, price)
VALUES
    (3, 'Western Digital', 'storage', '1 TB', 150);
INSERT INTO PARTS
    (ssd_id, make, part_type, capacity, price)
VALUES
    (4, 'SanDisk', 'storage', '2 TB', 180);


INSERT INTO user_builds
    (price_tier, cpu_id, gpu_id, ram_id, ssd_id)
VALUES
    ('bronze', 1, 2, 3, 4);

INSERT INTO PARTS
    (model, price_tier, price, part_type)
VALUES
    ('Cooler Master Hyper 212 Evo', 'bronze', 35, 'cooling');
INSERT INTO PARTS
    (model, price_tier, price, part_type)
VALUES

    ('Corsarir H100i PRO', 'silver', 120, 'cooling');

INSERT INTO PARTS
    (model, price_tier, price, part_type)
VALUES
    ('Corsair H100i PRO', 'gold', 120, 'cooling');

INSERT INTO PARTS
    (model, price_tier, price, part_type)
VALUES
    ('MSI Z390', 'bronze', 130, 'motherboard');
INSERT INTO PARTS
    (model, price_tier, price, part_type)
VALUES
    ('ASUS Prime X570-P', 'silver', 170, 'motherboard');
INSERT INTO PARTS
    (model, price_tier, price, part_type)
VALUES
    ('MSI MPG X570', 'gold', 200, 'motherboard');

INSERT INTO PARTS
    (model, price_tier, voltage, price, part_type)
VALUES
    ('EVGA SuperNova G3', 'bronze', 550, 100, 'psu');
INSERT INTO PARTS
    (model, price_tier, voltage, price, part_type)
VALUES
    ('EVGA SuperNova G2', 'silver', 650, 130, 'psu');
INSERT INTO PARTS
    (model, price_tier, voltage, price, part_type)
VALUES
    ('EVGA SuperNova G2', 'gold', 650, 130, 'psu');
