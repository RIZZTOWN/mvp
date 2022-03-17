
DROP DATABASE IF EXISTS mvp;

CREATE DATABASE mvp;

\c mvp;

DROP TABLE IF EXISTS bosses;

CREATE TABLE bosses(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(150) NOT NULL,
  map VARCHAR(150) NOT NULL,
  location VARCHAR(150) DEFAULT NULL,
  items VARCHAR(250) DEFAULT NULL
);



CREATE INDEX bosses_map_idx ON bosses (map);


\copy bosses FROM '/users/rizztown/Desktop/MVP/bosses.csv' DELIMITER ',';

