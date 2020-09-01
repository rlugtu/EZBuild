// Each build will offer a unique combination of CPU and GPU, so we'll be using that as our standard for our select queries.

SELECT parts.ram_id, parts.capacity, parts.price, builds.build_name
FROM parts
INNER JOIN builds ON builds.ram_id=parts.ram_id AND builds.build_name='gato';

// Get all gaming builds and display CPU/GPU
    SELECT parts.name, parts.model, builds.build_name
    FROM builds
    INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.build_type='gaming';

SELECT parts.capacity, parts.ram_id, builds.build_name
FROM builds
INNER JOIN parts on builds.ram_id = parts.ram_id;
    // Get all streaming builds and display CPU/GPU
SELECT parts.make, parts.model, parts.ram_id, parts.capacity, builds.build_name
FROM builds
INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_name='gato';


SELECT parts.make, parts.model, builds.build_name
FROM builds
INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_type='streaming';

// Get all creation builds and display CPU/GPU
SELECT parts.make, parts.model, builds.build_name
FROM builds
INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_type='creation';

// Get all cheap builds
SELECT parts.make, parts.model, builds.build_name
FROM builds
INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.price_tier='bronze';

// Get all mid-range builds
SELECT parts.make, parts.model, builds.build_name
FROM builds
INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.price_tier='silver';

// Get all luxury builds
SELECT parts.make, parts.model, builds.build_name
FROM builds
INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.price_tier='gold';

SELECT parts.make, parts.model, builds.build_name
FROM parts
INNER JOIN builds ON builds.cpu_id=parts.cpu_id AND builds.gpu_id=parts.gpu_id AND builds.build_type='gaming';

SELECT parts.make, parts.model, builds.build_name
FROM parts
(INNER JOIN builds ON builds.cpu_id = parts.cpu_id AND builds.build_type='gaming') AND
(INNER JOIN builds ON gpu_id = parts.gpu_id AND builds.build_type='gaming');

SELECT parts.make, parts.model, builds.build_name
FROM builds
INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.build_type='gaming';

SELECT parts.cpu_make, parts.cpu_model, parts.gpu_make, parts.gpu_model, builds.build_name
FROM builds
INNER JOIN parts ON builds.cpu_id=parts.cpu_id;

SELECT parts.cpu_make, parts.cpu_model
FROM builds
FULL OUTER JOIN parts
ON builds.cpu_id = parts.cpu_id
WHERE builds.build_type='gaming';

SELECT *
FROM builds
WHERE builds.cpu_id = 1;

SELECT parts.cpu_make, parts.cpu_model
FROM parts
WHERE id = 1;

SELECT parts.cpu_make, parts.cpu_model, parts.gpu_make, parts.gpu_model, builds.build_name
FROM builds
INNER JOIN parts ON builds.cpu_id=parts.cpu_id AND builds.build_type='gaming';

SELECT parts.cpu_make, parts.cpu_model, parts.gpu_make, parts.gpu_model, builds.build_name
FROM builds
INNER JOIN parts ON builds.gpu_id=parts.gpu_id AND builds.build_name='il pinguino';

SELECT parts.cpu_make, parts.cpu_model, builds.build_name
FROM   builds
INNER JOIN parts on builds.cpu_id=parts.cpu_id AND builds.build_type='gaming'
UNION ALL
SELECT parts.gpu_make, parts.gpu_model, builds.build_name
FROM   builds
INNER JOIN parts on builds.gpu_id=parts.gpu_id AND builds.build_type='gaming';
