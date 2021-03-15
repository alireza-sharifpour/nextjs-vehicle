--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE Person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
);

CREATE TABLE Vehicle (
    id INTEGER PRIMARY KEY,
    brand TEXT,
    model TEXT,
    ownerId INTEGER REFERENCES Person(id)
);

INSERT INTO Person (name, email) VALUES ('Alireza', 'Alireza7612@gmail.com');
INSERT INTO Person(name, email) VALUES('Mammad', 'Mammad@gmail.com');
INSERT INTO Vehicle (brand, model, ownerId) VALUES('Peikan', 'Javanan', 1);
INSERT INTO Vehicle (brand, model, ownerId) VALUES('Samand', 'New', 1);
INSERT INTO Vehicle (brand, model, ownerId) VALUES('Peraid', 'HachBack', 2);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE Person;
DROP TABLE Vehicle;