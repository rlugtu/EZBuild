/* Parts holds all of our parts and all possible specs a part could have as properties. Because of that relative complexity, I'll be putting templates in place for each part type. Be sure to use the appropriate template if adding anything. */

/*CPU and GPU are primary components. They'll serve as the fixtures of our builds, and while some may repeat, GPU+CPU will be unique for each.
/*CPU
CPU ID is a unique ID that is used - in conjunction with GPU ID - to link to each build.

INSERT INTO PARTS (cpu_id, price, price_tier, image_url, description, make, model, clock_speed, cores)
VALUES ();
*/

INSERT INTO PARTS (cpu_id, price, price_tier, image_url, item_description, make, model, generation, clock_speed, cores)
VALUES (1, 100, 'bronze', '/db/assets/intelc3.jpeg', 'The Intel i3 is an entry-level core, fine for daily browsing and streaming but not well-equipped for more demanding professional applications.', 'Intel', 'Core i3', '9','3.4 GHz', 2);
VALUES (2, 150, 'silver', '/db/assets/intelc3.jpeg', 'The Intel i5 constitutes the most prominent mid-range model Intel offers and is equipped for most creatives and gamers.', 'Intel', 'Core i5'. '9', '3.8 GHz', 4);
VALUES (3, 250, 'gold', '/db/assets/intelc3.jpeg', 'Unless you need to run some serious calculations, chances are an Intel i7 will suit you just fine. We pack it into all of our high-end professional models.', 'Intel', 'Core i7'. '9', '4.2 GHz', 4);

/*GPU
INSERT INTO PARTS (gpu_id, price, price_tier, image_url, make, model, base_clock, boost_clock, cuda_cores, mem_bandwidth, gysync, freesync)
VALUES ();
*/

INSERT INTO PARTS (gpu_id, price, price_tier, image_url, make, model, base_clock, boost_clock, cuda_cores, mem_bandwidth, gysync, freesync)
VALUES (1, 100, 'bronze', 'http://google.com', 'Radeon', 'RX 5700');
INSERT INTO PARTS (gpu_id, price, price_tier, image_url, gpu_make, gpu_model) VALUES (2, 200, 'silver', 'http://google.com', 'NVIDIA', 'GeForce RTX');
INSERT INTO PARTS (gpu_id, price, price_tier, image_url, gpu_make, gpu_model) VALUES (3, 300, 'gold', 'http://google.com', 'NVIDIA', 'GeForce GTX');

/*RAM
INSERT INTO PARTS (capacity, price, transfer_rate)
VALUES ();
*/
/*Storage
INSERT INTO PARTS (capacity, price)
VALUES ();
*/
/*PSU, Cooler
INSERT INTO PARTS (name, price)
VALUES ();
*/
/*case
INSERT INTO PARTS (name, image_url)
VALUES ();
*/


INSERT INTO PARTS (cpu_id, price, price_tier, image_url, cpu_make, cpu_model) VALUES (1, 99, 'bronze', 'http://google.com', 'Intel', 'i3');
INSERT INTO PARTS (cpu_id, price, price_tier, image_url, cpu_make, cpu_model) VALUES (2, 150, 'silver', 'http://google.com', 'Intel', 'i5');
INSERT INTO PARTS (cpu_id, price, price_tier, image_url, cpu_make, cpu_model) VALUES (3, 250, 'gold', 'http://google.com', 'Intel', 'i7');
INSERT INTO PARTS (gpu_id, price, price_tier, image_url, gpu_make, gpu_model) VALUES (1, 100, 'bronze', 'http://google.com', 'Radeon', 'RX 5700');
INSERT INTO PARTS (gpu_id, price, price_tier, image_url, gpu_make, gpu_model) VALUES (2, 200, 'silver', 'http://google.com', 'NVIDIA', 'GeForce RTX');
INSERT INTO PARTS (gpu_id, price, price_tier, image_url, gpu_make, gpu_model) VALUES (3, 300, 'gold', 'http://google.com', 'NVIDIA', 'GeForce GTX');


