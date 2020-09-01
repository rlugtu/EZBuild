INSERT INTO PARTS (cpu_id, price, price_tier, image_url, part_description, make, model, generation, clock_speed, cores)
VALUES (1, 100, 'bronze', '/db/assets/intelc3.jpeg', 'The Intel i3 is an entry-level core, fine for daily browsing and streaming but not well-equipped for more demanding professional applications.', 'Intel', 'Core i3', '9',3400, 2);
INSERT INTO PARTS (cpu_id, price, price_tier, image_url, part_description, make, model, generation, clock_speed, cores)
VALUES (2, 150, 'silver', '/db/assets/intelc3.jpeg', 'The Intel i5 constitutes the most prominent mid-range model Intel offers and is equipped for most creatives and gamers.', 'Intel', 'Core i5', '9', 3800, 4);
INSERT INTO PARTS (cpu_id, price, price_tier, image_url, part_description, make, model, generation, clock_speed, cores)
VALUES (3, 250, 'gold', '/db/assets/intelc3.jpeg', 'Unless you need to run some serious calculations, chances are an Intel i7 will suit you just fine. We pack it into all of our high-end professional models.', 'Intel', 'Core i7', '9', 4200, 4);
INSERT INTO PARTS (cpu_id, price, price_tier, image_url, part_description, make, model, generation, clock_speed, cores)
VALUES (4, 169, 'bronze', '/db/assets/ryzen5_1600.jpg', 'Intel may leave AMD in the dust with mid- and high-tier CPUs, but their Ryzen 5 series is ideal for gamers looking to get good bang for the buck.', 'Ryzen', '1600', '5', 3200, 6);
INSERT INTO PARTS (gpu_id, price, price_tier, image_url, make, model, base_clock, boost_clock, cuda_cores, mem_bandwidth, gsync, freesync)
VALUES (1, 170, 'bronze', 'db/assets/xfx_radeon.jpg', 'AMD Radeon', 'RX 570', 3200, 3600, 0, '16384 MB', false, true);

INSERT INTO PARTS  (ram_id, capacity, price, price_tier, transfer_rate)
VALUES (1, '4GB', 20, 'bronze', 2666);
INSERT INTO PARTS  (ram_id, capacity, price, price_tier, transfer_rate)
VALUES (2, '8GB', 40, 'bronze', 2666);
INSERT INTO PARTS  (ram_id, capacity, price, price_tier, transfer_rate)
VALUES (3, '16GB', 60, 'silver', 2666);
INSERT INTO PARTS  (ram_id, capacity, price, price_tier, transfer_rate)
VALUES (4, '32GB', 120, 'gold', 2666);

INSERT INTO PARTS (capacity, price)
VALUES ('256 GB', 40);

INSERT INTO PARTS (model, price_tier, price)
VALUES ('default cooler', 'bronze', 50);

INSERT INTO PARTS (model, price_tier, price)
VALUES ('default psu', 'bronze', 50);

