-- ALTER TABLE testingschema.events
-- MODIFY COLUMN eventId varchar(16);

SELECT * FROM testingschema.events;
SELECT * FROM testingschema.users;

-- DESC testingschema.events;

-- DROP TABLE testingschema.events;

-- CREATE TABLE testingschema.events (
--     eventid int not null PRIMARY KEY,
--     eventdate int,
--     headcount int
-- );

-- INSERT INTO testingschema.events (eventid, eventdate, headcount)
-- VALUES (1, 11122024, 34);