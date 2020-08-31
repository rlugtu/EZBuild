SELECT parts.cpu_id, parts.gpu_id, builds.cpu_id, builds.gpu_id
FROM builds
INNER JOIN parts ON builds.cpu_id = parts.cpu_id AND builds.gpu_id = parts.cpu_id;

