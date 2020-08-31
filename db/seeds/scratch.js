// Each build will offer a unique combination of CPU and GPU, so we'll be using that as our standard for our select queries.

// Get all gaming builds and display CPU/GPU
SELECT parts.make, parts.model, builds.build_name
FROM builds
INNER JOIN parts ON builds.cpu_id = parts.cpu_id AND builds.gpu_id = parts.gpu_id AND builds.build_type = 'gaming';

// Get all streaming builds and display CPU/GPU
SELECT parts.make, parts.model, builds.build_name
FROM builds
INNER JOIN parts ON builds.cpu_id = parts.cpu_id AND builds.gpu_id = parts.gpu_id AND builds.build_type = 'streaming';

// Get all creators builds and display CPU/GPU
SELECT parts.make, parts.model, builds.build_name
FROM builds
INNER JOIN parts ON builds.cpu_id = parts.cpu_id AND builds.gpu_id = parts.gpu_id AND builds.build_type = 'creators';

// Get all cheap builds
SELECT parts.make, parts.model, builds.build_name
FROM builds
INNER JOIN parts ON builds.cpu_id = parts.cpu_id AND builds.gpu_id = parts.gpu_id AND builds.price_tier = 'bronze';

// Get all mid-range builds
SELECT parts.make, parts.model, builds.build_name
FROM builds
INNER JOIN parts ON builds.cpu_id = parts.cpu_id AND builds.gpu_id = parts.gpu_id AND builds.price_tier = 'silver';

// Get all luxury builds
SELECT parts.make, parts.model, builds.build_name
FROM builds
INNER JOIN parts ON builds.cpu_id = parts.cpu_id AND builds.gpu_id = parts.gpu_id AND builds.price_tier = 'gold';