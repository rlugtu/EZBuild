ALTER TABLE user_builds ADD COLUMN user_id INTEGER REFERENCES users
(id);